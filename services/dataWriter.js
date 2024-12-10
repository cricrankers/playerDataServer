import path from 'path';
import { fileURLToPath } from 'url';
import fsModule from 'fs/promises';
import { getSetAllFormatData, getSetTestFormatData, getSetOdiFormatData, getSetOdiWcData, getSett20FormatData, getSett20WcData } from './dataGetterSetter.js';

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

    const playerId = data.bioData_pid;

    const bioData = {
        id: data.bioData_pid,
        name: data.bioData_pname,
        displayName: data.bioData_dname,
        country: data.bioData_country,
        insertedAt: Date.now(),
        updatedAt: '',
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
    
    

      
  // Read player list file
  const playerList = await readJsonFile(PLAYER_LIST_FILE_PATH);

  if (!playerList[playerId]) {
    console.error(`Player ID ${playerId} not found in the player list.`);
    
  }

  // Read the main database file
  const database = await readJsonFile(DATABASE_FILE_PATH);

  // Add player data to the database
  database[playerId] = playerData;

  // Write the updated database back to file
  await fsModule.writeFile(DATABASE_FILE_PATH, JSON.stringify(database, null, 2));

  // Update the player list to mark the player as inserted
  playerList[playerId].inserted = true;

  // Write the updated player list back to file
  await fsModule.writeFile(PLAYER_LIST_FILE_PATH, JSON.stringify(playerList, null, 2));

  console.log(`Player with ID ${playerId} successfully added to the database and marked as inserted.`);
}

export default writeDataDb;
