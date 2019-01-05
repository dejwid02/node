
const playerPath = 'C:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe';
var playerProcess;
let playing = false;
const {spawn} = require('child_process');

function play(mediaPath) {
    if(playing) {
        stop();
    }
    playerProcess = spawn(playerPath, [mediaPath]);
    playing=true;
}
function stop() {
    if (playing && typeof playerProcess!=='undefined')
    {
       playerProcess.kill();
       playerProcess=undefined; 
    }
}

module.exports.stop = stop;
module.exports.play = play; 
