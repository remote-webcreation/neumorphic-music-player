document.addEventListener('DOMContentLoaded', function() {

    function setupPlayer(audioId, playButtonId, forwardId, backwardId, albumCoverId, rangeId, playerClass) {
        var audio = document.getElementById(audioId);
        var playbutton = document.getElementById(playButtonId);
        var forward = document.getElementById(forwardId);
        var backward = document.getElementById(backwardId);
        var albumCover = document.getElementById(albumCoverId);
        var range = document.getElementById(rangeId);

        var otherAudioId = audioId === 'audio' ? 'audio1' : 'audio'; // ID des anderen Audio-Elements
        var otherAudio = document.getElementById(otherAudioId);

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

                if (audio.getAttribute('data-condition') === 'play') {
                    audio.pause();
                }
                
                audio.currentTime = 0;
                audio.setAttribute('data-condition', 'paused');
                playbutton.innerHTML = '<i class="fa-solid fa-play fa-sm" style="color: #ffffff;"></i>';
                albumCover.classList.remove('rotate');

                if (audioId === 'audio') {
                    audio = document.getElementById('audio1');
                    otherAudio = document.getElementById('audio');
                } else {
                    audio = document.getElementById('audio');
                    otherAudio = document.getElementById('audio1');
                }
                
                audioId = audio.id;
                
                audio.play();
                audio.setAttribute('data-condition', 'play');
                playbutton.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #ffffff;"></i>';
                albumCover.classList.add('rotate');
            };

            backward.onclick = function() {
                if (audio.getAttribute('data-condition') === 'play') {
                    audio.pause();
                }
                audio.currentTime = 0;
                audio.setAttribute('data-condition', 'paused');
                playbutton.innerHTML = '<i class="fa-solid fa-play fa-sm" style="color: #ffffff;"></i>';
                albumCover.classList.remove('rotate');

                if (audioId === 'audio') {
                    audio = document.getElementById('audio1');
                    otherAudio = document.getElementById('audio');
                } else {
                    audio = document.getElementById('audio');
                    otherAudio = document.getElementById('audio1');
                }
                
                audioId = audio.id;
                
                audio.play();
                audio.setAttribute('data-condition', 'play');
                playbutton.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #ffffff;"></i>';
                albumCover.classList.add('rotate');
            };

            audio.onloadedmetadata = function() {
                var duration = audio.duration;
                range.max = duration;
                var min = Math.floor(duration / 60);
                var sec = Math.floor(duration % 60);

                if (sec < 10) {
                    sec = '0' + sec;
                }

                document.querySelectorAll(playerClass + ' .end')[0].innerHTML = min + ':' + sec;
            };

            audio.ontimeupdate = function() {
                var current = audio.currentTime;
                range.value = current;
                var min = Math.floor(current / 60);
                var sec = Math.floor(current % 60);

                if (sec < 10) {
                    sec = '0' + sec;
                }

                document.querySelectorAll(playerClass + ' .start')[0].innerHTML = min + ':' + sec;
            };

            range.oninput = function() {
                audio.currentTime = range.value;
            };
        } else {
            console.error(playerClass + ": Ein oder mehrere Elemente wurden nicht gefunden.");
        }
    }

    setupPlayer('audio', 'play', 'forward', 'backward', 'album-cover', 'range', '.white-player');

});