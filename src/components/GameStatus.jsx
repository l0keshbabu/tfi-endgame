import { getFarewellText } from "../utils/getFarewellText"
import { heroes } from "../data/heroes"

export default function GameStatus({
  isGameWon,
  isGameLost,
  isLastGuessIncorrect,
  wrongGuessCount
}) {

  if (!isGameWon && !isGameLost && isLastGuessIncorrect) {
    const hero = heroes[wrongGuessCount - 1]

    return (
      <section className="game-status farewell">
        <p>{getFarewellText(hero.name)}</p>
      </section>
    )
  }

  if (isGameWon) {
    return (
      <section className="game-status won">
        <h2>Blockbuster! 🎬🔥</h2>
        <p>You saved TFI!</p>
      </section>
    )
  }


  if (isGameLost) {
    return (
      <section className="game-status lost">
        <h2>Game Over! 💀</h2>
        <p>
          All top heroes have fallen... Sampoornesh Babu is the last hope of TFI now 💀🎬
        </p>
      </section>
    )
  }

  return null
}