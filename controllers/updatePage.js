import { client } from "../db/connection.js";

const database = client.db("cricrankers");
const playerListCollection = database.collection("playerList");

async function updatePlayerPage(req, res) {
  try {
    // Fetch all players from the playerList collection
    const players = await playerListCollection.find({}).toArray();

    if (!players || players.length === 0) {
      return res.status(500).json({ error: "No valid players found in the database" });
    }

    // Map players into an array of options, using the `player_id`
    const playerOptions = players
      .map(player => `<option value="${player.player_id}">${player.name} (ID: ${player.player_id})</option>`)
      .join("");

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Update Player</title>
      </head>
      <body>
        <h1>Update Player</h1>
        
        <!-- Form to enter player ID manually -->
        <form id="updatePlayerForm">
          <label for="playerId">Enter Player ID:</label>
          <input type="text" id="playerId" name="playerId" required>
          <button type="submit">Submit</button>
        </form>

        <h2>Or Select a Player from the List</h2>
        <!-- Dropdown to select player -->
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
              window.location.href = \`/updatePlayerData?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please enter a valid Player ID');
            }
          });

          // Handle the select player dropdown form submission
          document.getElementById('selectPlayerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const playerId = document.getElementById('playerSelect').value;
            if (playerId) {
              window.location.href = \`/updatePlayerData?id=\${encodeURIComponent(playerId)}\`;
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

export { updatePlayerPage };
