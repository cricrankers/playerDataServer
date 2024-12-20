import path from "path";
import { fileURLToPath } from "url";
import { client } from "../db/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addPlayerPagePath = path.join(__dirname, "../views/addPlayerPage.ejs");

const database = client.db("cricrankers");
const playerListCollection = database.collection("playerList");

async function getPlayerById(playerId) {
  try {
    // Fetch player by player_id from the MongoDB collection
    const player = await playerListCollection.findOne({ player_id: playerId });

    if (!player) {
      console.error("Player not found in the database");
      return null;
    }

    // Add the player ID to the player object if necessary
    player.id = playerId;

    return player;
  } catch (err) {
    console.error("Error fetching player from the database:", err);
    return null;
  }
}

async function updatePlayer(req, res) {
  const playerId = req.query.id;

  if (!playerId) {
    return res.status(400).send("Player ID is required.");
  }

  const player = await getPlayerById(playerId);

  if (!player) {
    return res.status(404).send("Player not found.");
  }

  res.render(addPlayerPagePath, { player });
}

export { updatePlayer };
