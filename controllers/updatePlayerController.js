import path from 'path';
import { fileURLToPath } from 'url';
import fsModule from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addPlayerPagePath = path.join(__dirname, '../views/addPlayerPage.ejs');
const playerListFilePath = path.resolve(__dirname, '../utils/playerList.json');

const fs = fsModule.promises;

async function getPlayerById(playerId) {
    try {
        const playerListData = await fs.readFile(playerListFilePath, 'utf8');
        const playerList = JSON.parse(playerListData);

        if (typeof playerList !== 'object' || Array.isArray(playerList)) {
            console.error('Player list is not an object');
            return null;
        }

        const player = playerList[playerId];  
        player.id = playerId;
        return player || null;
    } catch (err) {
        console.error('Error reading or parsing player list file:', err);
        return null;
    }
}

async function updatePlayer(req, res) {
    const playerId = req.query.id;

    if (!playerId) {
        return res.status(400).send('Player ID is required.');
    }

    const player = await getPlayerById(playerId);

    if (!player) {
        return res.status(404).send('Player not found.');
    }

    res.render(addPlayerPagePath, { player });
}

export { updatePlayer };
