const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const OUR_CURRENT_TIME = 'videoplayer-current-time';
const player = new Player(document.querySelector('iframe'));

lookForSavedTime();

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(e) {
  localStorage.setItem(OUR_CURRENT_TIME, e.seconds);
}
function lookForSavedTime() {
  if (localStorage.getItem(OUR_CURRENT_TIME) !== null) {
    player.setCurrentTime(localStorage.getItem(OUR_CURRENT_TIME));
  }
}