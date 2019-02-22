const fs = require('fs');

const loadStations = (filePath) => {
  const stations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
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
