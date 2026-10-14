export default function Header(){
    return (
        <header className="game-header">
            <div className="sprocket-strip" aria-hidden="true">
              <div className="sprocket-track">
    {[0, 1].map((group) => (
      <div className="sprocket-group" key={group}>
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    ))}
  </div>
            </div>
            <p className="header-eyebrow">a tribute to Telugu cinema</p>
            <h1>TFI&nbsp;Endgame</h1>
            <p className="header-para">
                Only true TFI fans can save the industry
            </p>
            <div className="sprocket-strip" aria-hidden="true">
  <div className="sprocket-track">
    {[0, 1].map((group) => (
      <div className="sprocket-group" key={group}>
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    ))}
  </div>
</div>
        </header>
        
    )
}