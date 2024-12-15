import { client } from "../db/connection.js";

const database = client.db('cricrankers');
const playersDataCollection = database.collection('playersData');

async function writeDataMongo(playerData) {
  try {
    const id = playerData.bioData.id;

    const formattedData = {
      [id]: {
       ...playerData
      },
    };

    await playersDataCollection.updateOne(
        { [id]: { $exists: true } }, 
        { $set: formattedData },   
        { upsert: true }           
      );

    console.log(`Player data with ID ${id} added/updated successfully.`);
  } catch (error) {
    console.error('Error writing player data to MongoDB:', error.message);
  }
}

export { writeDataMongo };
