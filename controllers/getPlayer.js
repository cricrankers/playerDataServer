import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATABASE_FILE_PATH = path.resolve(__dirname, '../utils/playersDatabase.json');

async function getPlayer(req, res) {
  try {
    const { id } = req.query;
    const data = await fs.promises.readFile(DATABASE_FILE_PATH, 'utf8');
    const players = JSON.parse(data);

    if (!id) {
      return res.json(players);
    }

    if (players[id]) {
      return res.json(players[id]);
    } else {
      return res.status(404).json({ error: 'Player not found' });
    }
  } catch (err) {
    console.error('Error reading or parsing file:', err);
    return res.status(500).json({ error: 'Error loading player data' });
  }
}

export { getPlayer };
