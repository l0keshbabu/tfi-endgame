import { useState } from "react"
import { heroes } from "./data/heroes"
import HeroChips from "./components/HeroChips"
import { getRandomMovie } from "./utils/getRandomMovie"
import { getFarewellText } from "./utils/getFarewellText"
import Disclaimer from "./components/Disclaimer"
import Header from "./components/Header"
import WordDisplay from "./components/WordDisplay"
import Keyboard from "./components/KeyBoard"
import GameStatus from "./components/GameStatus"
import Streak from "./components/Streak"
import WastedSound from "./assets/sounds/lose.mp3"
import WonSound from "./assets/sounds/Won.wav"
import {useEffect, useRef } from "react"
import Confetti from "react-confetti";




export default function App(){
  // states
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
  return !sessionStorage.getItem("tfiDisclaimerAccepted")})
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [currentMovie, setCurrentMovie] = useState(() => getRandomMovie())
  const [guessedLetters, setGuessedLetters] = useState([])
  const [currentStreak,setCurrentStreak] = useState(0)
  const [bestStreak,setBestStreak] = useState(() => {
    const savedBestStreak = localStorage.getItem("bestStreak")
    return savedBestStreak ? Number(savedBestStreak) : 0
  })


  // derived values
  const wrongGuessCount = guessedLetters.filter(
  letter => !currentMovie.includes(letter)
  ).length

  const isGameWon = currentMovie
    .split("")
    .every(letter => letter === " " || guessedLetters.includes(letter))

  const isGameLost = wrongGuessCount >= heroes.length - 1

  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]

  const isLastGuessIncorrect =
    lastGuessedLetter && !currentMovie.includes(lastGuessedLetter)

  function handleProceed() {
  sessionStorage.setItem("tfiDisclaimerAccepted", "true")
  setShowDisclaimer(false)
  }

  function addGuessedLetter(letter) {
  setGuessedLetters(prev =>
    prev.includes(letter) ? prev : [...prev, letter]
  )
  }

  function startNewGame() {
  setCurrentMovie(getRandomMovie())
  setGuessedLetters([])
  }
  const audioLostRef = useRef(null)
  useEffect(() => {
  if (isGameLost && audioLostRef.current) {
    audioLostRef.current.currentTime = 0 // restart sound
    audioLostRef.current.play()
  }
  }, [isGameLost])
  const audioWonRef = useRef(null)
  useEffect(() => {
    if(isGameWon && audioWonRef.current){
      audioWonRef.current.currentTime = 0
      audioWonRef.current.play()
    }
  },[isGameWon])

  useEffect(() => {
    if (isGameWon) {
      setCurrentStreak(prev => prev + 1)
    } else if (isGameLost) {
      setCurrentStreak(0)
    }
  },[isGameWon,isGameLost]) 


  useEffect(() => {
    if(currentStreak>bestStreak){
      setBestStreak(currentStreak)
    }
  },[currentStreak])

  useEffect(() => {
    localStorage.setItem("bestStreak",bestStreak)
  },[bestStreak])

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
  function handleKeyDown(e) {
    if (isGameOver) return
    const key = e.key.toLowerCase()
    if (key.length === 1 && key >= "a" && key <= "z") {
      addGuessedLetter(key)
    }
  }
  window.addEventListener("keydown", handleKeyDown)
  return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isGameOver, addGuessedLetter])


  if (showDisclaimer) {
  return <Disclaimer onProceed={handleProceed} />
  }
return (
  
  <main className="game-page">
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
      
      <Header/>
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
      <HeroChips wrongGuessCount={wrongGuessCount} />
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
      <audio ref={audioLostRef} src={WastedSound} preload="auto" />
      <audio ref={audioWonRef} src={WonSound} preload="auto" />
      {isGameOver && (
        <button onClick={startNewGame} className="new-game-btn">New Game</button>
      )}
    </div>
  </main>
 
)
}