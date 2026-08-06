# 🎬 TFI Endgame

> **A cinematic movie guessing game inspired by Assembly Endgame, reimagined as a tribute to Telugu Cinema.**

TFI Endgame is a React-based word guessing game where players must correctly guess Telugu movie titles before the industry's biggest stars are eliminated one by one.

Unlike the original Assembly Endgame, this project introduces an entirely new theme, custom gameplay elements, sound effects, streak tracking, responsive design, and a cinematic UI inspired by Telugu cinema.

---

# 🎯 Why I Built This

Instead of recreating the original Assembly Endgame project, I wanted to build something with my own identity.

TFI Endgame takes the same core React concepts and applies them to a completely different theme, introducing custom gameplay mechanics, original UI, responsive design, streak tracking, sound effects, and a cinematic experience inspired by Telugu cinema.

The goal of this project was not only to practice React fundamentals, but also to learn how to transform a simple tutorial into a polished, portfolio-worthy application.

---

# ✨ Features

### 🎭 Cinematic Disclaimer
- First-time disclaimer shown using **Session Storage**
- Automatically skipped on future visits within the same browser session

### 🎬 Telugu Movie Guessing
- Random Telugu movie selected every game
- Guess letters using an on-screen keyboard
- Spaces are handled intelligently

### ⭐ Hero Elimination System
- Each incorrect guess eliminates one Tollywood hero
- Custom hero chips with unique styling
- Visual elimination effects

### 💬 Dynamic Farewell Messages
- Unique Tollywood-themed farewell message after every wrong guess
- Messages change dynamically throughout the game

### 🏆 Streak System
- 🔥 Current Box Office Run
- 🏆 Hall of Fame (Best Streak)
- Best streak is permanently stored using **Local Storage**

### 🎉 Win Celebration
- Custom-colored confetti animation
- Victory sound effect

### 💀 Lose Experience
- Custom defeat sound
- Cinematic game-over message

### 📱 Fully Responsive
- Optimized for Mobile, Tablet, Laptop, and Desktop

### 🎨 Custom UI
- Modern dark cinematic interface
- Film-inspired header
- Custom hero cards
- Responsive keyboard
- Glassmorphism-inspired cards
- Smooth hover interactions

---

# 🛠 Tech Stack

- React
- JavaScript (ES6+)
- CSS3
- Vite

---

# 📚 React Concepts Practiced

This project was built completely from scratch as a React learning project.

It demonstrates:

- Functional Components
- Component Composition
- Props
- State Management (`useState`)
- Side Effects (`useEffect`)
- Refs (`useRef`)
- Conditional Rendering
- Event Handling
- Derived State
- Local Storage
- Session Storage
- Responsive Design
- Dynamic Styling
- Component Reusability

---

# 🎮 Gameplay

1. Read the disclaimer.
2. A random Telugu movie is selected.
3. Guess one letter at a time.
4. Every incorrect guess eliminates one hero.
5. Guess the movie before only Sampoornesh Babu remains.
6. Win and continue your Box Office Run.
7. Beat your Hall of Fame record.

---

# 📂 Project Structure

```text
src/
│
├── assets/
│   ├── sounds/
│   └── images/
│
├── components/
│   ├── Disclaimer
│   ├── GameStatus
│   ├── Header
│   ├── HeroChips
│   ├── Keyboard
│   ├── Streak
│   └── WordDisplay
│
├── data/
│   ├── heroes.js
│   └── movies.js
│
├── utils/
│   ├── getFarewellText.js
│   └── getRandomMovie.js
│
├── App.jsx
└── App.css
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/yourusername/tfi-endgame.git
```

Navigate to the project

```bash
cd tfi-endgame
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 💡 Future Improvements

- Difficulty levels
- Hint system
- Timer mode
- Global leaderboard
- Larger Telugu movie database
- Achievement badges
- Theme customization

---

# 🙏 Acknowledgements

- Inspired by the **Assembly Endgame** React project.
- Built as a personal learning project to strengthen React fundamentals while celebrating Telugu cinema.

---

# 📄 License

This project is intended for educational and portfolio purposes.

---

# 👨‍💻 Author

**Katta Lokesh Babu**

If you enjoyed this project or found it interesting, consider giving it a ⭐ on GitHub!