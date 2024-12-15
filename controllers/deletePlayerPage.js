import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const playerListFilePath = path.resolve(__dirname, '../utils/playerList.json');

async function deletePlayerPage(req, res) {
  try {
    const data = await fs.promises.readFile(playerListFilePath, 'utf8');
    const players = JSON.parse(data); 

    const playerList = [];

    for (let id in players) {
      const player = players[id];

      if (player.name) {
        playerList.push({
          id: id,      
          name: player.name
        });
      }
    }

    if (playerList.length === 0) {
      return res.status(500).json({ error: 'No valid players found in the list' });
    }

    const playerOptions = playerList
      .map(player => `<option value="${player.id}">${player.name} (ID: ${player.id})</option>`)
      .join('');

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Delete Player</title>
      </head>
      <body>
        <h1>Delete Player</h1>
        
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
              window.location.href = \`/deletePlayerData?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please enter a valid Player ID');
            }
          });

          // Handle the select player dropdown form submission
          document.getElementById('selectPlayerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const playerId = document.getElementById('playerSelect').value;
            if (playerId) {
              window.location.href = \`/deletePlayerData?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please select a player');
            }
          });
        </script>
      </body>
      </html>
    `);
  } catch (err) {
    console.error("Error reading or parsing file:", err);
    return res.status(500).send("Error loading player data.");
  }
}

export { deletePlayerPage };
