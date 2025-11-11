# Music Player 🎵

A **modern, responsive, Spotify-style music player** built with **HTML, CSS, Tailwind, and Vanilla JavaScript**.  
Play your favorite songs with a sleek UI, animated progress bar, volume control, and smooth loading experience.

---

## Live Demo

[Play Music Now!](https://rubykapoor5689-web.github.io/MyMusicPlayer/)  
Open the link and start listening instantly!

---

## Features

- **Beautiful UI** with gradient backgrounds and animated album art  
- **Responsive Design** – Works on mobile, tablet, and desktop  
- **Progress Bar** – Click or drag to seek  
- **Play/Pause, Next, Previous** controls  
- **Volume Slider** (desktop)  
- **Loading Screen** with spinner until all assets load  
- **Fast Playback** using GitHub raw URLs (no delay)  
- **Preloaded first song** for instant start  

---

## Tech Stack

- **HTML5** `<audio>` API  
- **Tailwind CSS** (via CDN)  
- **Vanilla JavaScript** (ES6 Modules)  
- **GitHub Pages** for free hosting  
- **Git LFS** for large audio files  

---

## Project Structure
MyMusicPlayer/
├── index.html          # Main page
├── script.js           # Player logic
├── songs.js            # Song list 
├── style.css           # Extra animations
├── music/              # MP3 files 
├── images/             # Album art & logo
└── README.md           # This file


---

## How to Use

1. **Open the live site**:  
   [https://rubykapoor5689-web.github.io/MyMusicPlayer/](https://rubykapoor5689-web.github.io/MyMusicPlayer/)

2. **Click any song card** to play  
3. Use **controls** to play, pause, skip, or seek  
4. Enjoy the music!

---

## Add Your Own Songs

1. Upload your `.mp3` file to the `music/` folder via GitHub  
2. Upload album art to `images/`  
3. Add entry to `songs.js`:

```js
{
  title: "Your Song Name",
  artist: "Artist Name",
  src: "music/your-song.mp3",
  img: "images/your-cover.jpg"
}

**## Local Development**

git clone https://github.com/rubykapoor5689-web/MyMusicPlayer.git
Open index.html in VS Code → Use Live Server to test.

**Deployment**

Hosted on GitHub Pages
Auto-deploys on every push to main
Fast, reliable, and free


Made with love by Ruby Kapoor
MIT License – Fork, use, and enjoy!
