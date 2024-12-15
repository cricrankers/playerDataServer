import path from 'path';
import { fileURLToPath } from 'url';
import fsModule from 'fs/promises';
import { getSetAllFormatData, getSetTestFormatData, getSetOdiFormatData, getSetOdiWcData, getSett20FormatData, getSett20WcData } from './dataGetterSetter.js';
import { writeDataMongo } from './dataWriterDb.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_FILE_PATH = path.resolve(__dirname, '../utils/playersDatabase.json');
const PLAYER_LIST_FILE_PATH = path.resolve(__dirname, '../utils/playerList.json');

async function ensureFileExists(filePath, defaultValue = '{}') {
  try {
    await fsModule.access(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fsModule.writeFile(filePath, defaultValue);
    } else {
      throw err;
    }
  }
}

async function readJsonFile(filePath) {
  await ensureFileExists(filePath);
  const data = await fsModule.readFile(filePath, 'utf-8');
  return data.trim() ? JSON.parse(data) : {};
}

async function writeDataDb(data) {
  try {
    const playerId = data.bioData_pid;

    const bioData = {
      id: data.bioData_pid,
      name: data.bioData_pname,
      displayName: data.bioData_dname,
      country: data.bioData_country,
      updatedAt: Date.now(),
    };

    const playerData = {
      bioData: { ...bioData },
      allFormatData: await getSetAllFormatData(data),
      testFormatData: await getSetTestFormatData(data),
      odiFormatData: await getSetOdiFormatData(data),
      odiWcData: await getSetOdiWcData(data),
      t20FormatData: await getSett20FormatData(data),
      t20WcData: await getSett20WcData(data),
    };

    const result = await writeDataMongo(playerData);

    const playerList = await readJsonFile(PLAYER_LIST_FILE_PATH);

    if (!playerList[playerId]) {
      console.error(`Player ID ${playerId} not found in the player list.`);
    }

    const database = await readJsonFile(DATABASE_FILE_PATH);

    database[playerId] = playerData;

    await fsModule.writeFile(DATABASE_FILE_PATH, JSON.stringify(database, null, 2));

    playerList[playerId].inserted = true;

    await fsModule.writeFile(PLAYER_LIST_FILE_PATH, JSON.stringify(playerList, null, 2));

    console.log(`Player with ID ${playerId} successfully added to the database and marked as inserted.`);
  } catch (error) {
    console.error('Error occurred while writing player data:', error);
  }
}

export default writeDataDb;
