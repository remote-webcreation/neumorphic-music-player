
document.addEventListener('DOMContentLoaded', function() {

    // White Player
    var audio = document.getElementById('audio');
    var playbutton = document.getElementById('play');
    var forward = document.getElementById('forward');
    var backward = document.getElementById('backward');
    var albumCover = document.getElementById('album-cover');
    var range = document.getElementById('range');

    if (audio && playbutton && forward && backward && albumCover && range) {
        playbutton.onclick = function() {
            if (audio.getAttribute('data-condition') == 'paused') {
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
        };

        forward.onclick = function() {
            audio.currentTime += 5;
        };

        backward.onclick = function() {
            audio.currentTime -= 5;
        };

        audio.onloadedmetadata = function() {
            var duration = audio.duration;
            range.max = duration;
            var min = Math.floor(duration / 60);
            var sec = Math.floor(duration % 60);

            if (sec < 10) {
                sec = '0' + sec;
            }

            document.querySelectorAll('.white-player .end')[0].innerHTML = min + ':' + sec;
        };

        audio.ontimeupdate = function() {
            var current = audio.currentTime;
            range.value = current;
            var min = Math.floor(current / 60);
            var sec = Math.floor(current % 60);

            if (sec < 10) {
                sec = '0' + sec;
            }

            document.querySelectorAll('.white-player .start')[0].innerHTML = min + ':' + sec;
        };

        range.oninput = function() {
            audio.currentTime = range.value;
        };
    } else {
        console.error("White Player: Ein oder mehrere Elemente wurden nicht gefunden.");
    }



    // Dark Player

    var darkAudio = document.getElementById('dark-audio');
    var darkPlaybutton = document.getElementById('dark-play');
    var darkForward = document.getElementById('dark-forward');
    var darkBackward = document.getElementById('dark-backward');
    var darkAlbumCover = document.getElementById('dark-album-cover');
    var darkRange = document.getElementById('dark-range');

    if (darkAudio && darkPlaybutton && darkForward && darkBackward && darkAlbumCover && darkRange) {
    darkPlaybutton.onclick = function() {
        if (darkAudio.getAttribute('data-condition') == 'paused') {
            darkAudio.play();
            darkAudio.setAttribute('data-condition', 'play');
            darkPlaybutton.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #ffffff;"></i>';
            // darkAlbumCover.classList.add('rotate'); // Entfernt
        } else {
            darkAudio.pause();
            darkAudio.setAttribute('data-condition', 'paused');
            darkPlaybutton.innerHTML = '<i class="fa-solid fa-play fa-sm" style="color: #ffffff;"></i>';
            // darkAlbumCover.classList.remove('rotate'); // Entfernt
        }
    };

    darkForward.onclick = function() {
        darkAudio.currentTime += 5;
    };

    darkBackward.onclick = function() {
        darkAudio.currentTime -= 5;
    };

    darkAudio.onloadedmetadata = function() {
        var duration = darkAudio.duration;
        darkRange.max = duration;
        var min = Math.floor(duration / 60);
        var sec = Math.floor(duration % 60);

        if (sec < 10) {
            sec = '0' + sec;
        }

        document.querySelectorAll('.dark-player .end')[0].innerHTML = min + ':' + sec;
    };

    darkAudio.ontimeupdate = function() {
        var current = darkAudio.currentTime;
        darkRange.value = current;
        var min = Math.floor(current / 60);
        var sec = Math.floor(current % 60);

        if (sec < 10) {
            sec = '0' + sec;
        }

        document.querySelectorAll('.dark-player .start')[0].innerHTML = min + ':' + sec;
    };

    darkRange.oninput = function() {
        darkAudio.currentTime = darkRange.value;
    };
    } else {
        console.error("Dark Player: Ein oder mehrere Elemente wurden nicht gefunden.");
    } 
});