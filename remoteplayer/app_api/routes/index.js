const express = require('express');

const router = express.Router();

const controlerStations = require('../controlers/stations');

router
  .route('/stations')
  .get(controlerStations.stationsList);

module.exports = router;
