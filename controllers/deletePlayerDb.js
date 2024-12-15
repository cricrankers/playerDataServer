import { client } from "../db/connection.js";

const database = client.db('cricrankers');
const playersDataCollection = database.collection('playersData');

async function deletePlayerFromMongo(id) {
  try {
    const result = await playersDataCollection.deleteOne({ [`${id}`]: { $exists: true } });

    if (result.deletedCount === 1) {
      console.log(`Player data with ID ${id} deleted successfully.`);
    } else {
      console.log(`Player with ID ${id} not found in MongoDB.`);
    }
  } catch (error) {
    console.error('Error deleting player data from MongoDB:', error.message);
  }
}

export { deletePlayerFromMongo };
