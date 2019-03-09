const stationsDataGateway = require('../models/JsonLoader');
const Station = require('../models/Station');
const path = require('path');
const filePath = path.join(__dirname, 'stations.json');
const stationsArray = [
  new Station(0, 'PR1', 'http://stream3.polskieradio.pl:8900', 'http://www.portalmedialny.pl/media/images/original/md5/e/c/ec4de4217b056cb7a3fb73dd7ce94135/polskie_radio_30.jpg', 'Polskie'),
    new Station(1, 'BBC Radio 1', 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p', 'https://ichef.bbci.co.uk/images/ic/640x360/p02lrp2x.jpg', 'Zagraniczne'),
    new Station(2, 'BBC Radio 2', 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p', 'http://www.bbc.co.uk/staticarchive/10baa75eb508c2fc07f6245cfba0a8b958dab13f.jpg', 'Zagraniczne'),
    new Station(3, 'BBC Radio 3', 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p', 'https://ichef.bbci.co.uk/images/ic/480xn/p029jbdz.jpg', 'Zagraniczne'),
    new Station(4, 'BBC Radio 6 music', 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p', 'http://radio.nadaje.com/media/images/thumbnail/md5/2/9/29823998bb559cd2cb3f15b79c96ceca/bbc6music.jpg', 'Zagraniczne'),
    new Station(5, 'ResonanceFM', 'http://stream.resonance.fm:8000/resonance', 'https://pbs.twimg.com/profile_images/914261187818344451/OdOTwXdk.jpg', 'Zagraniczne'),
    new Station(6, 'Classic FM', 'http://media-ice.musicradio.com:80/ClassicFMMP3', 'https://images-eu.ssl-images-amazon.com/images/I/41i37jMWVqL.png', 'Zagraniczne'),
    new Station(7, 'Classic102', 'http://icepool.silvacast.com/KLASSIK1.mp3', 'https://cdn-radiotime-logos.tunein.com/s107537q.png', 'Zagraniczne'),
    new Station(8, 'Koncerty w 3', 'http://stream85.polskieradio.pl/omniaaxe/k16.stream/playlist.m3u8', 'http://static.prsa.pl/images/e3c67c19-fdc3-4ab2-909d-6b3ff40c3a3d.jpg', 'Zagraniczne'),
    new Station(9, 'OE3', 'http://185.85.29.166:8000', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hitradio_%C3%963.svg/1200px-Hitradio_%C3%963.svg.png', 'Zagraniczne'),
    new Station(10, 'WDR2', 'http://addrad.io/4WRNvc', 'https://www1.wdr.de/radio/startseite/symbolbilder/dummy-logo108~_v-gseagaleriexl.jpg', 'Zagraniczne'),
  ];

const stationsList = (req, res) => {
  const stations = stationsDataGateway.loadStations(filePath);
  res
    .status(200)
    .json(stations);
};

module.exports = {
  stationsList,
};
