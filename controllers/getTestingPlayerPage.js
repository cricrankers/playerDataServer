import path from "path";
import { fileURLToPath } from "url";
import { client } from "../db/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addPlayerPagePath = path.join(__dirname, "../views/addPlayerPage.ejs");

const database = client.db("cricrankers");
const playerListCollection = database.collection("playerList");

async function getTestingPlayerPage(req, res) {
  try {
    const players = await playerListCollection.find({
      testing: true
    }).toArray();

    if (!players || players.length === 0) {
      return res.status(500).json({ error: "No players with testing:true found in the database" });
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
        <title>Update Testing Player</title>
      </head>
      <body>
        <h1>Update Testing Player</h1>

        <form action="/getTestingPlayer" method="get">
                  <button type="submit">Update Next Testing Player</button><br><br>
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
              window.location.href = \`/getTestingPlayer?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please enter a valid Player ID');
            }
          });

          // Handle the select player dropdown form submission
          document.getElementById('selectPlayerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const playerId = document.getElementById('playerSelect').value;
            if (playerId) {
              window.location.href = \`/getTestingPlayer?id=\${encodeURIComponent(playerId)}\`;
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




async function getTestingPlayer(req, res) {
  // Get player ID from the request parameters
  const { id } = req.query;

  async function getPlayer() {
    try {
      let player;
    console.log(id);
      // If player ID is provided, try to find the player with that ID
      if (id) {
        player = await playerListCollection.findOne({
          player_id: id,
          testing: { $exists: true, $eq: true }
        });
      }

      // If player is not found by ID or no ID is provided, return the first player with testing:true
      if (!player) {
        player = await playerListCollection.findOne({
          testing: { $exists: true, $eq: true }
        });
      }

      if (!player) {
        return res.send("No players found with the testing:true condition.");
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



export { getTestingPlayer ,getTestingPlayerPage };
