import { useState } from "react"
import { heroes } from "./data/heroes"
import HeroChips from "./components/HeroChips"
import { getRandomMovie } from "./utils/getRandomMovie"
import { getFarewellText } from "./utils/getFarewellText"
import Disclaimer from "./components/Disclaimer"
import Header from "./components/Header"





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
      <HeroChips wrongGuessCount={wrongGuessCount} />

      {/* TEMP DEBUG */}
      <p>Movie: {currentMovie}</p>
      <p>Guessed: {guessedLetters.join(", ")}</p>
      <p>Wrong guesses: {wrongGuessCount}</p>

      <button onClick={() => addGuessedLetter("a")}>Guess A</button>

      {isGameOver && (
        <button onClick={startNewGame}>New Game</button>
      )}

    </div>
  </main>
)
}