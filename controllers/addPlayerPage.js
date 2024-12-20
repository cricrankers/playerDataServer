import path from "path";
import { fileURLToPath } from "url";
import { client } from "../db/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addPlayerPagePath = path.join(__dirname, "../views/addPlayerPage.ejs");

const database = client.db("cricrankers");
const playerListCollection = database.collection("playerList");

async function getAddPlayerPage(req, res) {
  async function getPlayer() {
    try {
      const player = await playerListCollection.findOne({
        $or: [{ inserted: false }, { inserted: { $exists: false } }],
      });

      if (!player) {
        return res.send("Complete list is updated already, use the update page");
      }

      return player;
    } catch (err) {
      console.error("Error querying the database:", err);
      throw err;
    }
  }

  try {
    const player = await getPlayer();
    res.render(addPlayerPagePath, { player });
  } catch (err) {
    res.status(500).send("Error loading player data.");
  }
}

export { getAddPlayerPage };
