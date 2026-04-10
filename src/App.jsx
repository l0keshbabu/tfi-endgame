import { useState } from "react"
import { heroes } from "./data/heroes"
import { getRandomMovie } from "./utils/getRandomMovie"
import { getFarewellText } from "./utils/getFarewellText"
import Disclaimer from "./components/Disclaimer"





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
  <main>
    <h1>TFI: Endgame</h1>

    <p>Movie: {currentMovie}</p> {/* TEMP debug */}

    <p>Guessed: {guessedLetters.join(", ")}</p>

    <p>Wrong guesses: {wrongGuessCount}</p>

    <button onClick={() => addGuessedLetter("a")}>Guess A</button>

    {isGameOver && (
      <button onClick={startNewGame}>New Game</button>
    )}
  </main>
)
}