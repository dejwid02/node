const express = require('express');

const router = express.Router();
const player = require('../Services/MediaPlayerService');

const streamUrls = [
  ['http://stream3.polskieradio.pl:8900', 'PR 1'],
  ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p', 'BBC Radio 1'],
  ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p', 'BBC Radio 2'],
  ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p', 'BBC Radio 3'],
  ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p', 'BBC Radio 6 Music'],
  ['http://stream.resonance.fm:8000/resonance', 'ResonanceFM'],
  ['http://185.85.29.166:8000', 'OE 3'],
  ['http://addrad.io/4WRNvc', 'WDR 2'],
  ['http://stream85.polskieradio.pl/omniaaxe/k16.stream/playlist.m3u8', 'Koncerty w 3']];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
    stations: streamUrls,
  });
});

router.get('/play/:id', (req, res) => {
  player.play(streamUrls[req.params.id][0]);
  res.render('index', { title: `Im playing ${streamUrls[req.params.id][1]}` });
});

router.get('/stop', (req, res) => {
  player.stop();
  res.render('index', { title: 'Im playing' });
});

module.exports = router;
