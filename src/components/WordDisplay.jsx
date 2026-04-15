export default function WordDisplay({
  currentMovie,
  guessedLetters,
  isGameLost
}) {
  const letterElements = currentMovie.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter)
    const isSpace = letter === " "

    const shouldRevealLetter = isGameLost || isGuessed || isSpace

    const style = {
      color: isGameLost
        ? isGuessed || isSpace
          ? "white"
          : "red"
        : isGuessed || isSpace
          ? "white"
          : "transparent"
    }

    return (
      <span
      key={index}
      className={isSpace ? "space" : ""}
      style={!isSpace ? style : {}}
    >
      {!isSpace && shouldRevealLetter ? letter.toUpperCase() : ""}
    </span>
    )
  })

  return <section className="word">{letterElements}</section>
}

