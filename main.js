window.onload = function () {
  let $ = function (id)
  { return document.getElementById(id) }
  
  let v = $('video')

  $('rewaindForward').addEventListener('click', () => { v.currentTime += 10 })
  $('rewaindBack').addEventListener('click', () => { v.currentTime -= 10 })
  $('playButton').addEventListener('click', function () {
    let playPause = document.querySelector('#play-pause');
    v.play()
    playPause.src = 'assets/image/4719317_audio_control_music_pause_play_icon.png'
  } )
  $('pauseButton').addEventListener('click', function () {
    let playPause = document.querySelector('#play-pause');
    v.pause()
    playPause.src = 'assets/image/4698916_audio_media_movie_music_play_icon.png'
  } )
  $('cover').addEventListener('click', function () {
    let playPause = document.querySelector('#play-pause');
    if (v.paused) {
      v.play();
      playPause.src = 'assets/image/4719317_audio_control_music_pause_play_icon.png'
    } else {
      v.pause();
      playPause.src = 'assets/image/4698916_audio_media_movie_music_play_icon.png'
    }
  })

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
  
  // Slider
  // const items = document.querySelectorAll('.item');
  // const prevBtn = document.querySelector('.prevBtn');
  // const nextBtn = document.querySelector('.nextBtn');
  
  // items.forEach((item, index) => {
  //   item.dataset.id = index;
  //   item.style.order = index;
  // })

  
  let playBtns = document.querySelectorAll('.play-btn')
  playBtns.forEach(playBtn => playBtn.addEventListener('click', function () {
    let src = playBtn.dataset.src;
    v.src = src
      v.play();

  }))
  
}


