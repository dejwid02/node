const playerPath = 'C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe';
let playerProcess;
let playing = false;
const { spawn } = require('child_process');

function stop() {
  if (playing && typeof playerProcess !== 'undefined') {
    playerProcess.kill();
    playerProcess = undefined;
  }
}

function play(mediaPath) {
  if (playing) {
    stop();
  }
  playerProcess = spawn(playerPath, [mediaPath]);
  playing = true;
}

module.exports.stop = stop;
module.exports.play = play;
