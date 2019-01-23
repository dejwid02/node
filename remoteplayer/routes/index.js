const express = require('express');

const router = express.Router();

const stationsController = require('../Controlers/stationsController');

/* GET home page. */
router.get('/', stationsController.homeList);

router.get('/play/:id', stationsController.playStation);
router.get('/stop', stationsController.stopPlaying);

module.exports = router;
