var express = require('express');
var router = express.Router();
const playerPath = 'C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe';
const streamUrl = 'http://stream3.polskieradio.pl:8900';
const {spawn} = require('child_process');

var process;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/play', function(req, res, next) {
  process = spawn(playerPath, [streamUrl]);
  res.render('index', { title: 'Im playing' });
});

router.get('/stop', function(req, res, next) {
  
  process.kill();
  res.render('index', { title: 'Im playing' });
});

module.exports = router;
