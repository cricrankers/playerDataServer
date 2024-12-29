import writeDataDb from "../services/dataWriter.js";
import { client } from "../db/connection.js";

const database = client.db('cricrankers');
const playerListCollection = database.collection('playerList');

async function addPlayer(req, res) {
    try {
        
        await writeDataDb(req.body);

        const playerId = req.body.bioData_pid;

        const player = await playerListCollection.findOne({ player_id: playerId });
        
        if (!player) {
            return res.status(404).send(`Player with ID ${playerId} not found.`);
        }

        const result = await playerListCollection.updateOne(
            { player_id: playerId },
            { $set: { inserted: true } }
        );

        if (result.modifiedCount === 0) {
            console.log(`No update was made for player ID ${playerId}.`);
        } else {
            console.log(`Player ID ${playerId} successfully marked as inserted.`);
        }

        res.send(`
            <h1>Player Data Successfully Inserted!</h1>
          
            <form action="/add" method="get">
                <button type="submit">Insert Next</button>   
                <button onclick="window.location.href='/update'" type="button">Update any Existing Player Data</button><br>
            </form>

            <form id="checkDataForm">
                <button type="button" onclick="window.location.href='/getPlayerData?id=${playerId}'">Check if Data is Successfully Inserted</button>
            </form>

            <form action="/getPlayer" method="get">
                <button type="submit">Search Any Players' Data</button>
            </form>
            <form action="/delete" method="get">
                <button type="submit">Delete any Players' Data</button>
            </form>
        `);
    } catch (error) {
        console.error("Error writing player data to database:", error);
        res.status(500).send("Failed to insert player data.");
    }
}

export { addPlayer };
