export default function Streak({currentStreak,bestStreak}){
    return( 
        <section className="streak-card">
            <div className="streak-box">
            <p className="streak-title">🔥 Box Office Run</p>
            <h3 className="streak-text">
  {currentStreak === 0 ? (
      <span className="streak-empty">
    First blockbuster awaits
  </span>
  ) : (
    <>
      <span className="streak-number gradient-text">
        {currentStreak}
      </span>

      <span className="streak-label">
        {currentStreak === 1 ?(
          "Blockbuster"
        ):(
          "Blockbusters in a Row"
        )}
      </span>
    </>
  )}
</h3>
            </div>
            <div className="streak-box best-box">
                <p className="streak-title">🏆 Hall of Fame</p>
                <h3 className="streak-text">
                {bestStreak===0
                    ?<span className="streak-empty"> No records yet </span>
                   :(
   <>
  <span className="streak-number best-gradient-text">
    {bestStreak}
  </span>

  <span className="streak-label">
    {currentStreak === 1 ?(
          "Blockbuster"
        ):(
          "Consicutive Blockbusters"
        )}
  </span>
</>
  )}
            </h3>

            </div>
        </section>
    )
}