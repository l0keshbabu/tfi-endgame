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





export default function App(){
  // states
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
  return !sessionStorage.getItem("tfiDisclaimerAccepted")})
  const [currentMovie, setCurrentMovie] = useState(() => getRandomMovie())
  const [guessedLetters, setGuessedLetters] = useState([])

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


  if (showDisclaimer) {
  return <Disclaimer onProceed={handleProceed} />
  }
return (
  <main className="game-page">
    <div className="game-container">

      <Header/>
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
      {isGameOver && (
        <button onClick={startNewGame} className="new-game-btn">New Game</button>
      )}
    </div>
  </main>
)
}