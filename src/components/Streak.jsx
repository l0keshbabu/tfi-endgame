export default function Streak({currentStreak,bestStreak}){
    return( 
        <section className="streak-card">
            <div className="streak-box">
            <p className="streak-title">🔥Box Office Run</p>
            <h3 className="streak-text">
                {currentStreak===0
                    ? "No hit yet 🎭"
                   :(
    <>
      <span className="gradient-text">
        {currentStreak} Blockbusters in a row
      </span>
    </>
  )}
            </h3>
            </div>
            <div className="streak-box best-box">
                <p className="streak-title">🏆 Hall of Fame</p>
                <h3 className="streak-text">
                {bestStreak===0
                    ? "No hit yet 🎭"
                   :(
    <>
      <span className="best-gradient-text">
        {bestStreak} Consecutive Blockbusters
      </span>
    </>
  )}
            </h3>

            </div>
        </section>
    )
}