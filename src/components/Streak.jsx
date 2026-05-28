export default function Streak({currentStreak}){
    return(
        <section className="streak-card">
            <p className="streak-title">🔥Box Office Run</p>
            <h3 className="streak-text">
                {currentStreak===0
                    ? "No hit yet 🎭"
                   :(
    <>
      <span className="gradient-text">
        {currentStreak} Blockbusters in a row
      </span>{" "}
      🔥
    </>
  )}
            </h3>
        </section>
    )
}