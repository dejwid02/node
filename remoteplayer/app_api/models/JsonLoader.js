const fs = require('fs');
const path = require('path');
const Station = require('./Station');

const loadStations = (filePath) => {
  const stations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`Loaded stations: ${stations}`);
  return stations;
};

const saveStations = (value, filePath) => {
  const stations = JSON.stringify(value);
  fs.writeFileSync(filePath, stations, 'utf8');
};

module.exports = {
  loadStations,
  saveStations,
};
