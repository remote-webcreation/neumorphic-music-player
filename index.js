document.addEventListener('DOMContentLoaded', function() {

    function setupPlayer(audioId, playButtonId, forwardId, backwardId, albumCoverId, rangeId, playerClass) {
        var audio = document.getElementById(audioId);
        var playbutton = document.getElementById(playButtonId);
        var forward = document.getElementById(forwardId);
        var backward = document.getElementById(backwardId);
        var albumCover = document.getElementById(albumCoverId);
        var range = document.getElementById(rangeId);
        var artistElement = document.querySelector(playerClass + ' .player-artist');
        var songElement = document.querySelector(playerClass + ' .player-song');
        var endElement = document.querySelector(playerClass + ' .end');

        var audioData = {
            'audio': {
                artist: 'Sam Cruz Music',
                song: 'Vas Loin <br> (Tayc X Aya Nakamura)',
                cover: 'https://images.unsplash.com/photo-1530893608544-cd10fda1ac14?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            'audio1': {
                artist: 'Tabanka Djaz',
                song: 'Rusga Di 7.30h',
                cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a469?q=80&w=2850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        };

        if (audio && playbutton && forward && backward && albumCover && range && artistElement && songElement && endElement) {
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
                switchAudio(true);
            };

            backward.onclick = function() {
                switchAudio(false);
            };

            function switchAudio(forwardDirection) {
                if (audio.getAttribute('data-condition') === 'play') {
                    audio.pause();
                }
                audio.currentTime = 0;
                audio.setAttribute('data-condition', 'paused');
                playbutton.innerHTML = '<i class="fa-solid fa-play fa-sm" style="color: #ffffff;"></i>';
                albumCover.classList.remove('rotate');

                var newAudioId = audioId === 'audio' ? 'audio1' : 'audio';
                audio = document.getElementById(newAudioId);
                audioId = newAudioId;

                artistElement.innerHTML = audioData[audioId].artist;
                songElement.innerHTML = audioData[audioId].song;
                albumCover.src = audioData[audioId].cover;

                audio.play();
                audio.setAttribute('data-condition', 'play');
                playbutton.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #ffffff;"></i>';
                albumCover.classList.add('rotate');

                updateRangeMax(audio.duration);
                updateEndTime(audio.duration);
            }

            audio.onloadedmetadata = function() {
                updateRangeMax(audio.duration);
                updateEndTime(audio.duration);
            };

            audio.ontimeupdate = function() {
                updateCurrentTime(audio.currentTime);
            };

            range.oninput = function() {
                audio.currentTime = range.value;
            };

            function updateRangeMax(duration) {
                range.max = duration;
            }

            function updateEndTime(duration) {
                var min = Math.floor(duration / 60);
                var sec = Math.floor(duration % 60);

                if (sec < 10) {
                    sec = '0' + sec;
                }

                endElement.innerHTML = min + ':' + sec;
            }

            function updateCurrentTime(current) {
                range.value = current;
                var min = Math.floor(current / 60);
                var sec = Math.floor(current % 60);

                if (sec < 10) {
                    sec = '0' + sec;
                }

                document.querySelector(playerClass + ' .start').innerHTML = min + ':' + sec;
            }
        } else {
            console.error(playerClass + ": Ein oder mehrere Elemente wurden nicht gefunden.");
        }
    }

    setupPlayer('audio', 'play', 'forward', 'backward', 'album-cover', 'range', '.white-player');
});