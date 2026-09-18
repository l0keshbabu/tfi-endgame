import { useState, useEffect, useRef, useCallback } from "react"
import { heroes } from "./data/heroes"
import HeroChips from "./components/HeroChips"
import { getRandomMovie } from "./utils/getRandomMovie"
import Disclaimer from "./components/Disclaimer"
import Header from "./components/Header"
import WordDisplay from "./components/WordDisplay"
import Keyboard from "./components/KeyBoard"
import GameStatus from "./components/GameStatus"
import Streak from "./components/Streak"
import WastedSound from "./assets/sounds/lose.mp3"
import WonSound from "./assets/sounds/Won.wav"
import Confetti from "react-confetti"
import Navigation from "./components/Navigation"


export default function App() {
  // states
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    return !sessionStorage.getItem("tfiDisclaimerAccepted")
  })

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const [currentMovie, setCurrentMovie] = useState(() => getRandomMovie())
  const [guessedLetters, setGuessedLetters] = useState([])
  const [currentStreak, setCurrentStreak] = useState(0)

  const [bestStreak, setBestStreak] = useState(() => {
    const savedBestStreak = localStorage.getItem("bestStreak")
    return savedBestStreak ? Number(savedBestStreak) : 0
  })


  // derived values
  const wrongGuessCount = guessedLetters.filter(
    letter => !currentMovie.includes(letter)
  ).length

  const isGameWon = currentMovie
    .split("")
    .every(
      letter =>
        letter === " " || guessedLetters.includes(letter)
    )

  const isGameLost = wrongGuessCount >= heroes.length - 1

  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter =
    guessedLetters[guessedLetters.length - 1]

  const isLastGuessIncorrect =
    lastGuessedLetter &&
    !currentMovie.includes(lastGuessedLetter)


  function handleProceed() {
    sessionStorage.setItem("tfiDisclaimerAccepted", "true")
    setShowDisclaimer(false)
  }


  const addGuessedLetter = useCallback((letter) => {
    if (isGameOver) return

    if (guessedLetters.includes(letter)) return

    const nextGuessedLetters = [...guessedLetters, letter]

    const nextWrongGuessCount = nextGuessedLetters.filter(
      guessedLetter => !currentMovie.includes(guessedLetter)
    ).length

    const won = currentMovie
      .split("")
      .every(
        movieLetter =>
          movieLetter === " " ||
          nextGuessedLetters.includes(movieLetter)
      )

    const lost =
      nextWrongGuessCount >= heroes.length - 1

    setGuessedLetters(nextGuessedLetters)

    if (won) {
      const newStreak = currentStreak + 1

      setCurrentStreak(newStreak)

      if (newStreak > bestStreak) {
        setBestStreak(newStreak)
      }
    } else if (lost) {
      setCurrentStreak(0)
    }
  }, [
    currentMovie,
    guessedLetters,
    isGameOver,
    currentStreak,
    bestStreak
  ])


  function startNewGame() {
    setCurrentMovie(getRandomMovie())
    setGuessedLetters([])
  }


  // Lose sound
  const audioLostRef = useRef(null)

  useEffect(() => {
    if (isGameLost && audioLostRef.current) {
      audioLostRef.current.currentTime = 0
      audioLostRef.current.play()
    }
  }, [isGameLost])


  // Win sound
  const audioWonRef = useRef(null)

  useEffect(() => {
    if (isGameWon && audioWonRef.current) {
      audioWonRef.current.currentTime = 0
      audioWonRef.current.play()
    }
  }, [isGameWon])


  // Save best streak
  useEffect(() => {
    localStorage.setItem("bestStreak", bestStreak)
  }, [bestStreak])


  // Keep confetti dimensions in sync with the viewport
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)

    return () =>
      window.removeEventListener("resize", handleResize)
  }, [])


  // Physical keyboard support
  useEffect(() => {
    function handleKeyDown(e) {
      if (isGameOver) return

      const key = e.key.toLowerCase()

      if (
        key.length === 1 &&
        key >= "a" &&
        key <= "z"
      ) {
        addGuessedLetter(key)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () =>
      window.removeEventListener("keydown", handleKeyDown)
  }, [isGameOver, addGuessedLetter])


  if (showDisclaimer) {
    return <Disclaimer onProceed={handleProceed} />
  }


  return (
    <main className="game-page">
      <Navigation />
      {isGameWon && (
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          width={windowSize.width}
          height={windowSize.height}
          colors={["#22d3ee", "#06b6d4", "#3b82f6"]}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}

      <div className="game-container">

        <Header />

        <Streak
          currentStreak={currentStreak}
          bestStreak={bestStreak}
        />

        <GameStatus
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isLastGuessIncorrect={isLastGuessIncorrect}
          wrongGuessCount={wrongGuessCount}
        />

        <HeroChips
          wrongGuessCount={wrongGuessCount}
        />

        <WordDisplay
          currentMovie={currentMovie}
          guessedLetters={guessedLetters}
          isGameLost={isGameLost}
        />

        <Keyboard
          guessedLetters={guessedLetters}
          currentMovie={currentMovie}
          addGuessedLetter={addGuessedLetter}
          isGameOver={isGameOver}
        />

        <audio
          ref={audioLostRef}
          src={WastedSound}
          preload="auto"
        />

        <audio
          ref={audioWonRef}
          src={WonSound}
          preload="auto"
        />

        {isGameOver && (
          <button
            onClick={startNewGame}
            className="new-game-btn"
          >
            New Game
          </button>
        )}

      </div>
    </main>
  )
}