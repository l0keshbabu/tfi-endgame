export default function Keyboard({
  guessedLetters,
  currentMovie,
  addGuessedLetter,
  isGameOver
}) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  const keyboardElements = alphabets.split("").map(letter => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentMovie.includes(letter)
    const isWrong = isGuessed && !currentMovie.includes(letter)

    let className = "key"

    if (isCorrect) className += " correct"
    if (isWrong) className += " wrong"

    return (
      <button
        key={letter}
        className={className}
        disabled={isGameOver || isGuessed}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

  return <section className="keyboard">{keyboardElements}</section>
}