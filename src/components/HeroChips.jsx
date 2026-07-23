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
  <div
    key={hero.id}
    className={`hero-chip ${isLost ? "lost" : ""}`}
    style={styles}
    title={isLost ? `${hero.name} - Eliminated` : hero.name}
  >
    <span className="hero-bulb"></span>

    <span className="hero-initials">
      {hero.initials}
    </span>

    <span className="hero-name">
      {hero.name}
    </span>

    {isLost && (
      <span className="hero-crack"></span>
    )}
  </div>
)
  })

  return <section className="hero-chips">{heroElements}</section>
}