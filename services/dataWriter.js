import {
  getSetAllFormatData,
  getSetTestFormatData,
  getSetOdiFormatData,
  getSetOdiWcData,
  getSett20FormatData,
  getSett20WcData,
} from "./dataGetterSetter.js";
import { writeDataMongo } from "./dataWriterDb.js";
import { client } from "../db/connection.js";

const database = client.db("cricrankers");
const playerListCollection = database.collection("playerList");

async function writeDataDb(data) {
  try {
    
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

    await writeDataMongo(playerData);

    await playerListCollection.updateOne(
      { player_id: data.bioData_pid }, 
      { 
          $set: { 
              inserted: true, 
              updatedAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }), 
              testing: data.testingField === 'true',
              status: data.statusField, 
          }
      }
  );
  
  
    console.log(`Player with ID ${data.bioData_pid} marked as inserted.`);
  } catch (error) {
    console.error("Error occurred while inserting player data:", error);
  }
}

export default writeDataDb;
