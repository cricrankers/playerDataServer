import { client } from "../db/connection.js";

const database = client.db("cricrankers");
const playersDataCollection = database.collection("playersData");

async function getPlayerData(req, res) {
  try {
    const { id } = req.query;

    if (id) {
      const playerData = await playersDataCollection.findOne({ [`${id}`]: { $exists: true } });

      if (playerData) {
        return res.status(200).json(playerData);
      } else {
        return res.status(404).json({ error: `Player with ID ${id} not found.` });
      }
    } else {
      const allPlayersData = await playersDataCollection.find({}).toArray();

      if (allPlayersData.length > 0) {
        return res.status(200).json(allPlayersData);
      } else {
        return res.status(404).json({ error: "No players data found." });
      }
    }
  } catch (error) {
    console.error("Error fetching player data:", error.message);
    return res.status(500).json({ error: "An error occurred while fetching player data." });
  }
}

export { getPlayerData };
