window.onload = function () {
  let $ = function (id)
  { return document.getElementById(id) }
  
  let v = $('video');

  const videoList = [
    {
      src: 'assets/video1.mp4',
      title: 'Video 1'
    },
    {
      src: 'assets/video2.mp4',
      title: 'Video 2'
    },
    {
      src: 'assets/video3.mp4',
      title: 'Video 3'
    },
    {
      src: 'assets/video4.mp4',
      title: 'Video 4'
    },
    {
      src: 'assets/video5.mp4',
      title: 'Video 5'
    }
  ];
 
  let currentVideoIndex = parseInt(localStorage.getItem('currentVideoIndex')) || 0;
  let currentVideoTime = parseFloat(localStorage.getItem('currentVideoTime')) || 0;
  
  v.src = videoList[currentVideoIndex].src; 

  v.addEventListener('loadedmetadata', function() {
    v.currentTime = currentVideoTime;
  });
  
  v.addEventListener('pause', function() {
    localStorage.setItem('currentVideoTime', v.currentTime);
  });

  $('rewaindForward').addEventListener('click', () => { v.currentTime += 10 })
  $('rewaindBack').addEventListener('click', () => { v.currentTime -= 10 })
  $('playButton').addEventListener('click', function () {
    v.play()
  } )
  $('pauseButton').addEventListener('click', function () {
    v.pause()
  } )
  $('cover').addEventListener('click', function () {
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  })

  v.addEventListener('play', function() {
    let playPause = document.querySelector('#play-pause');
    playPause.src = 'assets/image/4719317_audio_control_music_pause_play_icon.png';
  });
  
  v.addEventListener('pause', function() {
    let playPause = document.querySelector('#play-pause');
    playPause.src = 'assets/image/4698916_audio_media_movie_music_play_icon.png';
  });

  $('volume-control').addEventListener('input', function () {
    v.volume = this.value;
    if (v.volume === 0) {
      $('soundButton').src = 'assets/image/2203527_mute_sound_speaker_volume_icon.png'
    } else {
      $('soundButton').src = 'assets/image/2203528_lound_sound_speaker_volume_icon.png'    }
  })

  $('soundButton').addEventListener('click', function () {
    if (v.muted) {
      v.muted = false;
      this.src = 'assets/image/2203528_lound_sound_speaker_volume_icon.png';
      this.setAttribute('data-muted', 'false');
      $('volume-control').style.display = 'block';

    } else {
      v.muted = true;
      this.src = 'assets/image/2203527_mute_sound_speaker_volume_icon.png'
      this.setAttribute('data-muted', 'true');
      $('volume-control').style.display = 'none';
    }

  })

  $('fullButton').addEventListener('click', function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
  }
  })
  const playItems = document.querySelectorAll('.item');

  playItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      currentVideoIndex = index;
      currentVideoTime = 0;
      video.src = videoList[currentVideoIndex].src;
      video.play();
      localStorage.setItem('currentVideoIndex', currentVideoIndex);
    });
  });

  window.addEventListener('load', function() {
    if (!isNaN(currentVideoIndex) && !isNaN(currentVideoTime)) {
      v.src = videoList[currentVideoIndex].src;
      v.play();
    }
  });
  
}


