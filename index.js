
// White Player

var audio = document.getElementById('audio');
var playbutton = document.getElementById('play');
var forward = document.getElementById('forward');
var backward = document.getElementById('backward');
var albumCover = document.querySelector('.player-album img');

playbutton.onclick = function(){
    if (audio.getAttribute('data-condition') == 'paused'){
        audio.play();
        audio.setAttribute('data-condition', 'play');
        playbutton.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #ffffff;"></i>';
        albumCover.classList.add('rotate');
    } else {
        audio.pause();
        audio.setAttribute('data-condition', 'paused');
        playbutton.innerHTML = '<i class="fa-solid fa-play fa-sm" style="color: #ffffff;"></i>';
        albumCover.classList.remove('rotate');
    }
}

forward.onclick = function(){
    audio.currentTime += 5;
}

backward.onclick = function(){
    audio.currentTime -= 5;
}

audio.onloadedmetadata = function() {
    var duration = audio.duration;
    range.max = duration;
    var min = Math.floor(duration / 60);
    var sec = Math.floor(duration % 60);

    if (sec < 10){
        sec = '0' + sec;
    }

    document.getElementsByClassName('end')[0].innerHTML = min + ':' + sec;
}

audio.ontimeupdate = function(){
    var current = audio.currentTime;
    range.value = current;
    var min = Math.floor(current / 60);
    var sec = Math.floor(current % 60);

    if (sec < 10){
        sec = '0' + sec;
    }

    document.getElementsByClassName('start')[0].innerHTML = min + ':' + sec;
}

range.oninput = function() {
    audio.currentTime = range.value;
}




// dark player

var minimalAudio = document.getElementById('minimal-audio');
var minimalPlaybutton = document.getElementById('minimal-play');
var minimalAlbumCover = document.getElementById('minimal-album-cover');
var minimalRange = document.getElementById('minimal-range');

    minimalPlaybutton.onclick = function() {
            if (minimalAudio.getAttribute('data-condition') == 'paused') {
                minimalAudio.play();
                minimalAudio.setAttribute('data-condition', 'play');
                minimalPlaybutton.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #ffffff;"></i>';
                minimalAlbumCover.classList.add('rotate');
            } else {
                minimalAudio.pause();
                minimalAudio.setAttribute('data-condition', 'paused');
                minimalPlaybutton.innerHTML = '<i class="fa-solid fa-play fa-sm" style="color: #ffffff;"></i>';
                minimalAlbumCover.classList.remove('rotate');
            }
    };

    minimalAudio.onloadedmetadata = function() {
            var duration = minimalAudio.duration;
            minimalRange.max = duration;
            var min = Math.floor(duration / 60);
            var sec = Math.floor(duration % 60);

            if (sec < 10) {
                sec = '0' + sec;
            }

            document.querySelectorAll('.minimal-player .end')[0].innerHTML = min + ':' + sec;
    };

    minimalAudio.ontimeupdate = function() {
            var current = minimalAudio.currentTime;
            minimalRange.value = current;
            var min = Math.floor(current / 60);
            var sec = Math.floor(current % 60);

            if (sec < 10) {
                sec = '0' + sec;
            }

            document.querySelectorAll('.minimal-player .start')[0].innerHTML = min + ':' + sec;
    };

    minimalRange.oninput = function() {
            minimalAudio.currentTime = minimalRange.value;
    };
