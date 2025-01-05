import express from 'express';
import { getAddPlayerPage } from '../controllers/addPlayerPage.js';
import { addPlayer } from '../controllers/addPlayer.js';
import { updatePlayerPage } from '../controllers/updatePage.js';
import { updatePlayer } from '../controllers/updatePlayerController.js';
import { deletePlayerPage } from '../controllers/deletePlayerPage.js';
import { getPlayerPage } from '../controllers/getPlayerPage.js';
import { deletePlayer } from '../controllers/deletePlayer.js';
import { getPlayerData } from '../controllers/getPlayer.js';
import { getTestingPlayer, getTestingPlayerPage } from '../controllers/getTestingPlayerPage.js';
import { getActivePlayer, getActivePlayerPage } from '../controllers/getActivePlayersPage.js';
import { getRetiredPlayer, getRetiredPlayerPage } from '../controllers/getRetiredPlayers.js';

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
.get(getPlayerData)

Router.route('/getTestingPlayerPage')
.get(getTestingPlayerPage)

Router.route('/getTestingPlayer')
.get(getTestingPlayer)

Router.route('/getActivePlayerPage')
.get(getActivePlayerPage)

Router.route('/getActivePlayer')
.get(getActivePlayer)


Router.route('/getRetiredPlayerPage')
.get(getRetiredPlayerPage)

Router.route('/getRetiredPlayer')
.get(getRetiredPlayer)

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