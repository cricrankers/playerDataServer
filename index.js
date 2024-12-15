import express from 'express';
import Router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 7000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, 'views'));

app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 100000 })); 

app.use(express.static(path.resolve(__dirname, './public')));

app.use((req, res, next) => {
    // console.log(`Payload size: ${JSON.stringify(req.body || {}).length}`);
    next();
});

app.get('/proxy', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.text(); 
        res.json({ contents: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.use("/", Router);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
