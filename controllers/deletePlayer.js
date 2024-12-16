import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { deletePlayerFromMongo } from './deletePlayerDb.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_FILE_PATH = path.resolve(__dirname, '../utils/playersDatabase.json');
const PLAYER_LIST_FILE_PATH = path.resolve(__dirname, '../utils/playerList.json');

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

        const data = await fs.promises.readFile(DATABASE_FILE_PATH, 'utf8');
        const players = JSON.parse(data);

        if (players[id]) {
            delete players[id];

            await fs.promises.writeFile(DATABASE_FILE_PATH, JSON.stringify(players, null, 2), 'utf8');
            await deletePlayerFromMongo(id);

            const playerListData = await fs.promises.readFile(PLAYER_LIST_FILE_PATH, 'utf8');
            const playerList = JSON.parse(playerListData);

            if (playerList[id]) {
                playerList[id].inserted = false;

                await fs.promises.writeFile(PLAYER_LIST_FILE_PATH, JSON.stringify(playerList, null, 2), 'utf8');
            }

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
        } else {
            return res.status(404).send(`
                <h1>Error: Player Not Found!</h1>
                <form action="/delete" method="get">
                    <button type="submit">Try Again</button>
                </form>
            `);
        }
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

export { deletePlayer };
