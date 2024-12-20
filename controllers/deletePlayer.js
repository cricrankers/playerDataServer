import { client } from "../db/connection.js";

const database = client.db("cricrankers");
const playersDataCollection = database.collection("playersData");
const playerListCollection = database.collection("playerList");

async function deletePlayerFromMongo(id) {
  try {
    const result = await playersDataCollection.deleteOne({ [`${id}`]: { $exists: true } });

    if (result.deletedCount === 1) {
      console.log(`Player data with ID ${id} deleted successfully.`);

      const updateResult = await playerListCollection.updateOne(
        { player_id: id },
        { $set: { inserted: false } }
      );

      if (updateResult.modifiedCount === 1) {
        console.log(`Player with ID ${id} marked as not inserted.`);
      } else {
        console.log(`Failed to update 'inserted' field for player with ID ${id}.`);
      }
    } else {
      console.log(`Player with ID ${id} not found in MongoDB.`);
    }
  } catch (error) {
    console.error("Error deleting player data from MongoDB:", error.message);
  }
}

async function deletePlayer(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send(`
        <h1>Error: Player ID is required!</h1>
        <form action="/delete" method="get">
          <button type="submit">Try Again</button>
        </form>
      `);
    }

    await deletePlayerFromMongo(id);

    return res.send(`
      <h1>Player Data Successfully Deleted!</h1>
      <form action="/delete" method="get">
        <button type="submit">Delete Another Player</button><br>
      </form>
      <form action="/add" method="get">
        <button type="submit">Insert New Player</button><br>
      </form>
      <form action="/update" method="get">
        <h3>Update Existing Player's Data</h3><button type="submit">Update</button><br>
      </form>
      <form action="/getPlayer" method="get">
        <h3>Get Data of Existing Player</h3><button type="submit">Search</button>
      </form>
    `);
  } catch (err) {
    console.error("Error processing delete request:", err);
    return res.status(500).send(`
      <h1>Error: Unable to Delete Player</h1>
      <form action="/delete" method="get">
        <button type="submit">Try Again</button>
      </form>
    `);
  }
}

export { deletePlayer };
