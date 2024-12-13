import express from 'express';
import { getAddPlayerPage } from '../controllers/getPlayerController.js';
import { addPlayer } from '../controllers/addPlayerController.js';
import { updatePlayerPage } from '../controllers/updatePageController.js';
import { updatePlayer } from '../controllers/updatePlayerController.js';

const Router = express.Router();

Router.route('/add',)
.get(getAddPlayerPage)
.post(addPlayer)

Router.route('/update')
.get(updatePlayerPage)

Router.route('/updatePlayer')
.get(updatePlayer)

export default Router;