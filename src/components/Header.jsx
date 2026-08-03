export default function Header(){
    return (
        <header className="game-header">
            <div className="sprocket-strip" aria-hidden="true">
    {Array.from({ length: 22 }).map((_, i) => (
      <span key={i}></span>
    ))}
  </div>
            <p className="header-eyebrow">a tribute to Telugu cinema</p>
            <h1>TFI&nbsp;Endgame</h1>
            <p className="header-para">
                Only true TFI fans can save the industry
            </p>
            <div className="sprocket-strip" aria-hidden="true">
    {Array.from({ length: 22 }).map((_, i) => (
      <span key={i}></span>
    ))}
  </div>
        </header>
        
    )
}