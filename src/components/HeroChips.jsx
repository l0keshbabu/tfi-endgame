import { heroes } from "../data/heroes"

export default function HeroChips({ wrongGuessCount }) {
  const heroElements = heroes.map((hero, index) => {
    const isLost = index < wrongGuessCount

    const styles = {
      backgroundColor: hero.backgroundColor,
      color: hero.color,
      opacity: isLost ? 0.3 : 1,
    }

    return (
      <span
        key={hero.name}
        className={`hero-chip ${isLost ? "lost" : ""}`}
        style={styles}
      >
        {hero.name}
      </span>
    )
  })

  return <section className="hero-chips">{heroElements}</section>
}