import express from 'express';
import { getAddPlayerPage } from '../controllers/getPlayerController.js';
import { addPlayer } from '../controllers/addPlayerController.js';

const Router = express.Router();

Router.route('/add',)
.get(getAddPlayerPage)
.post(addPlayer)

export default Router;