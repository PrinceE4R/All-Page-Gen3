let player;
const playButton = document.querySelector('.play');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const seekSlider = document.querySelector('.seek-slider');
const playtime = document.querySelector('.playtime');
const musicImage = document.querySelector('.music-image');
const musicImageSvg = document.querySelector('.music-image svg');
const pauseButton = document.querySelector('.pause');
let choice = 1;// Set to 1 for playlist or 2 for video
let initialLoad = true; // Flag to track initial load

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  if (choice === 1) {
    const playlistId = 'PLI2mUusOsHdLAMyfI-AOws-nQrYek39cF'; // Use actual YouTube playlist ID
    player.loadPlaylist({ list: playlistId, listType: 'playlist' });
  } else if (choice === 2) {
    const videoId = 'Gqdv_-BMlJs';
    player.loadVideoById(videoId);
  }
  
  // Pause the video immediately after loading
  player.addEventListener('onStateChange', function initialPause(event) {
    if (event.data == YT.PlayerState.PLAYING && initialLoad) {
      player.pauseVideo();
      initialLoad = false; // Reset the flag
      // Remove this event listener after first execution
      player.removeEventListener('onStateChange', initialPause);
    }
  });
  
  setInterval(updatePlayTime, 1000);
}

function updatePlayTime() {
  const currentTime = player.getCurrentTime();
  const duration = player.getDuration();
  playtime.textContent = formatTime(currentTime);
  seekSlider.value = (duration > 0) ? (currentTime / duration) * 100 : 0; // Prevent division by zero
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    const videoId = player.getVideoData().video_id;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    musicImage.style.backgroundImage = `url('${thumbnailUrl}')`;
    pauseButton.style.display = 'block';
    playButton.style.display = 'none';
    musicImageSvg.style.display = 'none';
  } else if (event.data === YT.PlayerState.PAUSED) {
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
    musicImageSvg.style.display = 'block';
    musicImage.style.backgroundImage = 'none';
  }
}

playButton.addEventListener('click', () => {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

pauseButton.addEventListener('click', () => {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

nextButton.addEventListener('click', () => {
  player.nextVideo();
  player.seekTo(0);
});

previousButton.addEventListener('click', () => {
  player.previousVideo();
  player.seekTo(0);
});

seekSlider.addEventListener('input', (e) => {
  const seekTo = player.getDuration() * (e.target.value / 100);
  player.seekTo(seekTo, true);
  changeThemeColortoTheme();
});