const video = document.querySelector('video');
const [ ...buttons ] = document.querySelectorAll('button');
const [ ...ranges ] = document.querySelectorAll('input[type="range"]');
const progress = document.querySelector('.progress');
const player = document.querySelector('.player');
let scrubbing = false;

function playPause( { currentTarget } ) {
  if ( !( currentTarget = video ) ) {
    return;
  }

  if ( video.paused ) {
    video.play();
  } else {
    video.pause();
  }
}

function skip( { currentTarget: { dataset: { skip } } } ) {
  const timeToSeek = Number( skip );
  video.currentTime += timeToSeek;
}

function setRange( ev ) {
  const property = ev.currentTarget.name;
  const val = ev.currentTarget.value;
  video[ property ] = val;
}

function scrubaDub( ev ) {
  if ( scrubbing ) {
    const ratio = ( ( ev.clientX - player.offsetLeft ) / ev.currentTarget.offsetWidth );
    const progBar = ev.currentTarget.children[ 0 ];
    progBar.style['flex-basis'] = `${ ratio * 100 }%`;
    video.currentTime = video.duration * ratio;
  }

  if ( ev.type === 'mouseup' ) {
    scrubbing = false;
  }
}

video.addEventListener( 'click', playPause );

buttons.forEach( button => button.addEventListener( 'click', skip ) );
ranges.forEach( range => range.addEventListener( 'input', setRange ) );



progress.addEventListener( 'mousedown', () => scrubbing = true );
document.addEventListener( 'mouseout', ev => {
  if ( ev.currentTarget === video ) {
    scrubbing = false;
  }
});
progress.addEventListener( 'mouseup', scrubaDub );
progress.addEventListener( 'mousemove', scrubaDub );
