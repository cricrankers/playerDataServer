import path from 'path';
import { fileURLToPath } from 'url';
import fsModule from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const addPlayerPagePath = path.join(__dirname, '../views/addPlayerPage.ejs');
const playerListFilePath = path.resolve(__dirname, '../utils/playerList.json'); 


async function getAddPlayerPage(req, res) {
    const fs = fsModule.promises;

    async function getPlayer() {
        try {
            const data = await fs.readFile(playerListFilePath, 'utf-8');
            const jsonData = JSON.parse(data);

            for (let id in jsonData) {
                const player = jsonData[id];

                if (!player.inserted || player.inserted == false) {
                    player.id = id;
                    // player.inserted = 'updating';

                    // jsonData[id] = player;
                    // await fs.writeFile(playerListFilePath, JSON.stringify(jsonData, null, 2));

                    return player;
                }
            }

            return res.send('Complete list is updated already, use the update page');
        } catch (err) {
            console.error("Error reading or parsing file:", err);
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



export {getAddPlayerPage}