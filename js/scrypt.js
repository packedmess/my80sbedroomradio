const audio = document.querySelector('.player__streaming');
const playButton = document.querySelector('.player__play-button');
const playIcon = document.querySelector('.player__play-icon');
const stopIcon = document.querySelector('.player__stop-icon');
const volume = document.querySelector('.player__volume');
const streamingUrl = 'http://radio.my80sbedroomradio.com:8010/radio';
const corsPassApi = 'https://frosty-rice-bfaa.bitnikvasya.workers.dev/';
const api = 'http://radio.my80sbedroomradio.com:8080/api/djs/1/';

setInterval(() => {
  const streamingMeta = document.querySelector('#RTWidgetStatus').innerHTML;
  const streamingMetaArtist = document.querySelector('.player__meta-artist');
  const streamingMetaTrack = document.querySelector('.player__meta-track');

  streamingMetaArtist.innerHTML = streamingMeta.slice(
    streamingMeta.indexOf(':') + 1,
    streamingMeta.indexOf(' - ')
  );
  streamingMetaTrack.innerHTML = streamingMeta.slice(
    streamingMeta.indexOf(' - ') + 3
  );
}, 1000);

playButton.addEventListener('click', () => {
  audio.src = audio.src === streamingUrl ? '' : streamingUrl;

  if (stopIcon.classList.contains('hidden')) {
    playIcon.classList.contains('loading')
      ? playIcon.classList.remove('loading')
      : playIcon.classList.add('loading');
  } else {
    playIcon.classList.remove('hidden');
    stopIcon.classList.add('hidden');
  }
});

audio.addEventListener('playing', (event) => {
  stopIcon.classList.remove('hidden');
  playIcon.classList.remove('loading');
  playIcon.classList.add('hidden');
});

console.log(volume.valueAsNumber);
