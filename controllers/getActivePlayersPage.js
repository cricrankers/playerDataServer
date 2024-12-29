import path from "path";
import { fileURLToPath } from "url";
import { client } from "../db/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addPlayerPagePath = path.join(__dirname, "../views/addPlayerPage.ejs");

const database = client.db("cricrankers");
const playerListCollection = database.collection("playerList");


async function getActivePlayerPage(req, res) {
  try {
    const players = await playerListCollection.find({
      status: { $regex: /^active$/i }
    }).toArray();

    if (!players || players.length === 0) {
      return res.status(500).json({ error: "No active players found in the database" });
    }

    const playerOptions = players
      .map(player => `<option value="${player.player_id}">${player.name} (ID: ${player.player_id})</option>`)
      .join("");

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Update Active Player</title>
      </head>
      <body>
        <h1>Update Active Player</h1>

        <form action="/getActivePlayer" method="get">
                  <button type="submit">Update Next Active Player</button><br><br>
        </form>
        
        <!-- Form to enter player ID manually -->
        <form id="updatePlayerForm">
          <label for="playerId">Enter Player ID:</label>
          <input type="text" id="playerId" name="playerId" required>
          <button type="submit">Submit</button>
        </form>

        <h2>Or Select a Player from the List</h2>
        <form id="selectPlayerForm">
          <label for="playerSelect">Select Player:</label>
          <select id="playerSelect" name="playerSelect" required>
            <option value="">--Select Player--</option>
            ${playerOptions} <!-- Inject the player options here -->
          </select>
          <button type="submit">Submit</button>
        </form>

        <script>
          // Handle the manual player ID input form submission
          document.getElementById('updatePlayerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const playerId = document.getElementById('playerId').value.trim();
            if (playerId) {
              window.location.href = \`/getActivePlayer?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please enter a valid Player ID');
            }
          });

          // Handle the select player dropdown form submission
          document.getElementById('selectPlayerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const playerId = document.getElementById('playerSelect').value;
            if (playerId) {
              window.location.href = \`/getActivePlayer?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please select a player');
            }
          });
        </script>
      </body>
      </html>
    `);
  } catch (err) {
    console.error("Error fetching player data:", err);
    return res.status(500).send("Error loading player data.");
  }
}

async function getActivePlayer(req, res) {
  const { id } = req.query;

  async function getPlayer() {
    try {
      let player;

      if (id) {
        player = await playerListCollection.findOne({
          player_id: id,
          status: { $regex: /^active$/i }
        });
      }

      if (!player) {
        player = await playerListCollection.findOne({
          status: { $regex: /^active$/i }
        });
      }

      if (!player) {
        return res.status(404).send("No players found with the active status.");
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
    console.error("Error loading player data:", err);  // Enhanced error logging
    res.status(500).send("Error loading player data.");
  }
}



export { getActivePlayerPage ,  getActivePlayer};
