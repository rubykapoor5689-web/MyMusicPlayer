// script.js
import { songs } from './songs.js';

let currentIndex = -1;
const audio = document.getElementById('audio');
const playerImg = document.getElementById('player-img');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document
.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songList = document.getElementById('song-list');

const progressBar = document.getElementById('progress-bar');
const seekThumb = document.getElementById('seek-thumb');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const timeline = progressBar.parentElement;
const volumeSlider = document.getElementById('volume-slider');

let isSeeking = false;

/* ---------- Render Songs ---------- */
function renderSongs() {
  songList.innerHTML = '';
  songs.forEach((song, i) => {
    const card = document.createElement('div');
    card.className = 'song-card bg-gray-800 p-5 rounded-xl cursor-pointer shadow-lg flex flex-col items-center text-center animate-fade-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <img src="${song.img}" alt="${song.title}" class="w-36 h-36 rounded-full object-cover mb-4 shadow-xl">
      <h3 class="font-bold text-lg truncate w-full">${song.title}</h3>
      <p class="text-sm text-gray-400 truncate w-full">${song.artist}</p>
    `;
    card.addEventListener('click', () => playSong(i));
    songList.appendChild(card);
  });
}

/* ---------- Play Song ---------- */
function playSong(idx) {
  if (idx < 0 || idx >= songs.length) return;
  currentIndex = idx;
  const s = songs[currentIndex];

  audio.src = s.src;
  audio.play();
  updatePlayerUI(s);
  setPlayIcon(true);
  playPauseBtn.classList.add('animate-pulse-btn');
}

/* ---------- Update Player UI ---------- */
function updatePlayerUI(s) {
  playerImg.src = s.img;
  playerTitle.textContent = s.title;
  playerArtist.textContent = s.artist;
}

/* ---------- Toggle Play/Pause ---------- */
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    setPlayIcon(true);
    playPauseBtn.classList.add('animate-pulse-btn');
  } else {
    audio.pause();
    setPlayIcon(false);
    playPauseBtn.classList.remove('animate-pulse-btn');
  }
}

/* ---------- Set Play/Pause Icon ---------- */
function setPlayIcon(isPlaying) {
  const playSVG = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                       d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`;
  const pauseSVG = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>`;
  playIcon.setAttribute('d', isPlaying ? pauseSVG : playSVG);
}

/* ---------- Format Time ---------- */
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/* ---------- Update Timeline ---------- */
function updateProgress() {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
    seekThumb.style.left = `${percent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
}

/* ---------- Seek Handling ---------- */
function seekTo(e) {
  const rect = timeline.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const width = rect.width;
  const percent = Math.max(0, Math.min(1, x / width));
  audio.currentTime = percent * audio.duration;
}

timeline.addEventListener('click', seekTo);
timeline.addEventListener('mousemove', (e) => isSeeking && seekTo(e));
timeline.addEventListener('mousedown', () => isSeeking = true);
document.addEventListener('mouseup', () => isSeeking = false);

/* ---------- Volume Control ---------- */
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100;
});

/* ---------- Navigation ---------- */
function nextSong() {
  const next = (currentIndex + 1) % songs.length;
  playSong(next);
}
function prevSong() {
  const prev = (currentIndex - 1 + songs.length) % songs.length;
  playSong(prev);
}

/* ---------- Event Listeners ---------- */
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', updateProgress);

/* ---------- Init ---------- */
renderSongs();
audio.volume = volumeSlider.value / 100;