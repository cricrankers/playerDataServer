import express from 'express';
import { getAddPlayerPage } from '../controllers/getPlayerController.js';
import { addPlayer } from '../controllers/addPlayerController.js';
import { updatePlayerPage } from '../controllers/updatePageController.js';
import { updatePlayer } from '../controllers/updatePlayerController.js';
import { deletePlayerPage } from '../controllers/deletePlayerPage.js';
import { getPlayerPage } from '../controllers/getPlayerPage.js';
import { getPlayer } from '../controllers/getPlayer.js';
import { deletePlayer } from '../controllers/deletePlayer.js';

const Router = express.Router();

Router.get('/',(req,res)=>{
res.redirect('/add')
})

Router.route('/add',)
.get(getAddPlayerPage)
.post(addPlayer)

Router.route('/update')
.get(updatePlayerPage)

Router.route('/updatePlayerData')
.get(updatePlayer)

Router.route('/delete')
.get(deletePlayerPage)

Router.route('/deletePlayerData')
.get(deletePlayer)

Router.route('/getPlayer')
.get(getPlayerPage)

Router.route('/getPlayerData')
.get(getPlayer)

Router.get('/proxy',async (req, res) => {
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

export default Router;