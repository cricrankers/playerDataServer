import { client } from "../db/connection.js";

const database = client.db('cricrankers');
const playerListCollection = database.collection('playerList');
const playersDataCollection = database.collection('playersData');

async function deletePlayerFromMongo(id) {
    try {
        // Delete player from playersData collection
        const result = await playersDataCollection.deleteOne({ [`${id}`]: { $exists: true } });

        if (result.deletedCount === 1) {
            console.log(`Player data with ID ${id} deleted successfully.`);
        } else {
            console.log(`Player with ID ${id} not found in MongoDB.`);
        }

        // After deletion, update the playerList collection by setting 'inserted' to false
        await playerListCollection.updateOne(
            { player_id: id }, // Find player by player_id
            { $set: { inserted: false } } // Set 'inserted' field to false
        );
    } catch (error) {
        console.error('Error deleting player data from MongoDB:', error.message);
    }
}

async function deletePlayerPage(req, res) {
    try {
      const players = await playerListCollection.find().toArray(); 

        if (players.length === 0) {
            return res.status(500).json({ error: 'No valid players found in the list' });
        }

        const playerOptions = players
            .map(player => `<option value="${player.player_id}">${player.name} (ID: ${player.player_id})</option>`)
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
        console.error("Error fetching player data:", err);
        return res.status(500).send("Error loading player data.");
    }
}

async function deletePlayerData(req, res) {
    try {
        const playerId = req.query.id;

        if (!playerId) {
            return res.status(400).send('Player ID is required.');
        }

        // Call the function to delete player from MongoDB and update the playerList
        await deletePlayerFromMongo(playerId);

        res.send(`
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
        console.error('Error processing delete request:', err);
        return res.status(500).send(`
            <h1>Error: Unable to Delete Player</h1>
            <form action="/delete" method="get">
                <button type="submit">Try Again</button>
            </form>
        `);
    }
}

export { deletePlayerPage, deletePlayerData };
