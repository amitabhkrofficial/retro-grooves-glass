# 🎵 RetroGrooves - Retro Music Player with Glassmorphism ✨

<div align="center">
  <img src="https://images.unsplash.com/photo-1614149162883-504ce46d48a9?q=80&w=600&auto=format&fit=crop" alt="RetroGrooves Banner" width="600"/>
  
  [![React](https://img.shields.io/badge/React-18.0+-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
  [![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  
  **🎶 Step into the future of retro music with stunning glassmorphism effects 🚀**
</div>

---

## 🌟 Features

### 🎨 **Visual Experience**
- 🔮 **Glassmorphism UI** - Modern glass-like interface with blur effects
- 🌈 **Retro Color Palette** - Purple, teal, and neon color schemes
- ✨ **Animated Components** - Smooth transitions and hover effects
- 📱 **Responsive Design** - Perfect on all devices and screen sizes
- 🎭 **Custom Fonts** - Orbitron, Press Start 2P, and VT323 for authentic retro feel

### 🎵 **Music Player Features**
- ▶️ **Full Audio Controls** - Play, pause, skip, previous, volume control
- 🎚️ **Progress Tracking** - Real-time playback progress with seek functionality
- 🔊 **Volume Management** - Adjustable volume with mute/unmute
- 📝 **Queue System** - Add tracks to queue and manage playback order
- 🔄 **Continuous Playback** - Auto-advance to next track

### 🎬 **Audio Visualization**
- 📊 **Real-time Visualizer** - Canvas-based frequency visualization
- 🌊 **Dynamic Bars** - Animated bars that respond to audio frequencies
- 🎨 **Gradient Effects** - Beautiful purple-to-teal gradients
- 💫 **Idle Animation** - Pulsating waveform when no audio is playing

### 🗂️ **Content Organization**
- 🏠 **Home Dashboard** - Featured tracks and trending music
- 🌍 **Explore Page** - Discover new music and artists
- 💿 **Albums Collection** - Browse music by albums
- 📋 **Playlists Manager** - Create and manage custom playlists
- ❤️ **Favorites** - Save your favorite tracks
- 🔍 **Search Functionality** - Find tracks, artists, and albums

### 🎯 **User Experience**
- 🎮 **Intuitive Navigation** - Clean sidebar navigation
- 🔔 **Toast Notifications** - User feedback for actions
- 📱 **Mobile Optimized** - Touch-friendly controls
- ⚡ **Fast Loading** - Optimized performance with React Query
- 🎪 **Interactive Cards** - Hover effects and play buttons

---

## 🛠️ Tech Stack

| Technology | Usage | Version |
|------------|-------|---------|
| ⚛️ **React** | Frontend Framework | 18.0+ |
| 📘 **TypeScript** | Type Safety | 5.0+ |
| 🎨 **Tailwind CSS** | Styling & Animations | Latest |
| ⚡ **Vite** | Build Tool & Dev Server | Latest |
| 🔧 **shadcn/ui** | UI Components | Latest |
| 🎵 **HTML5 Audio** | Audio Playback | Native |
| 📊 **Canvas API** | Audio Visualization | Native |
| 🔄 **React Query** | Data Fetching | Latest |
| 🧭 **React Router** | Navigation | Latest |
| 🎭 **Lucide React** | Icons | Latest |

---

## 🚀 Getting Started

### 📋 Prerequisites
- 📦 Node.js (v16 or higher)
- 📥 npm or yarn package manager
- 🌐 Modern web browser

### 💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/retro-grooves-glass.git
   cd retro-grooves-glass
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` 🎉

---

## 📁 Project Structure

```
src/
├── 🎵 components/          # Reusable UI components
│   ├── MusicCard.tsx      # Music track cards
│   ├── NowPlaying.tsx     # Bottom music player
│   ├── SideBar.tsx        # Navigation sidebar
│   ├── TopBar.tsx         # Search and header
│   ├── Visualizer.tsx     # Audio visualization
│   └── ui/                # shadcn/ui components
├── 📖 pages/              # Route pages
│   ├── Index.tsx          # Home dashboard
│   ├── Explore.tsx        # Music discovery
│   ├── Albums.tsx         # Albums collection
│   ├── Playlists.tsx      # Playlist management
│   └── Favorites.tsx      # Favorite tracks
├── 🎛️ context/           # React contexts
│   └── AudioContext.tsx   # Audio player state
├── 🎨 data/              # Mock data & APIs
├── 🔧 hooks/             # Custom React hooks
├── 🎪 services/          # API services
└── 📝 types/             # TypeScript definitions
```

---

## 🎨 Design System

### 🌈 Color Palette
```css
🟣 Primary Purple: #663399 (retro-purple)
🟢 Neon Teal: #00FFCA (retro-neon)
🌸 Accent Pink: #FF6B9D (retro-pink)
⚫ Dark Background: #0a0a0f (retro-dark)
```

### 🎭 Typography
- **Display**: Orbitron (Digital/Futuristic)
- **Headings**: Press Start 2P (Pixel/Retro)
- **Body**: VT323 (Monospace/Terminal)

### ✨ Glassmorphism Effects
- `glassmorphism` - Light glass effect
- `glassmorphism-dark` - Dark glass effect
- `glassmorphism-light` - Subtle glass effect

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
1. 🔍 Check existing issues first
2. 📝 Create detailed bug report
3. 🖼️ Include screenshots if applicable
4. 🔄 Provide steps to reproduce

### ✨ Feature Requests
1. 💡 Describe the feature clearly
2. 🎯 Explain the use case
3. 🎨 Include mockups if possible
4. 🗣️ Discuss implementation approach

### 💻 Code Contributions

1. **Fork the repository**
   ```bash
   git fork https://github.com/yourusername/retro-grooves-glass.git
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Follow coding standards**
   - ✅ Use TypeScript for type safety
   - 🎨 Follow existing component patterns
   - 📝 Write meaningful commit messages
   - 🧪 Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git commit -m "✨ Add amazing feature"
   ```

5. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create Pull Request**
   - 📋 Use PR template
   - 🏷️ Add relevant labels
   - 🔗 Link related issues

### 📏 Code Style Guidelines
- 🎯 Use functional components with hooks
- 📘 Always use TypeScript types
- 🎨 Follow Tailwind CSS conventions
- 📱 Ensure mobile responsiveness
- ♿ Maintain accessibility standards

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👀 Preview production build |
| `npm run lint` | 🔍 Run ESLint |

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| 🌟 Chrome | 90+ | ✅ Fully Supported |
| 🦊 Firefox | 85+ | ✅ Fully Supported |
| 🧭 Safari | 14+ | ✅ Fully Supported |
| 📘 Edge | 90+ | ✅ Fully Supported |

---

## 🎯 Roadmap

### 🚀 Version 2.0
- [ ] 🎤 Lyrics display
- [ ] 🎧 Equalizer controls
- [ ] ☁️ Cloud music integration
- [ ] 👥 Social sharing features
- [ ] 🎨 Theme customization

### 🌟 Version 3.0
- [ ] 🤖 AI music recommendations
- [ ] 🎙️ Podcast support
- [ ] 📱 Mobile app
- [ ] 🌐 Multi-language support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- 🎨 **Glassmorphism Design** - Inspired by modern design trends
- 🎵 **Free Music Archive** - For providing free music samples
- 🎭 **Lucide Icons** - Beautiful icon library
- 🌈 **Tailwind CSS** - Amazing utility-first CSS framework
- ⚛️ **React Community** - For incredible ecosystem

---

## 📞 Support

- 📧 **Email**: support@retrogrooves.com
- 💬 **Discord**: [Join our community](https://discord.gg/retrogrooves)
- 🐦 **Twitter**: [@RetroGrooves](https://twitter.com/retrogrooves)
- 📖 **Documentation**: [docs.retrogrooves.com](https://docs.retrogrooves.com)

---

<div align="center">
  <p>
    <strong>🎵 Made with ❤️ for music lovers everywhere 🎵</strong>
  </p>
  <p>
    <em>🌟 Star us on GitHub if you love RetroGrooves! 🌟</em>
  </p>
</div>