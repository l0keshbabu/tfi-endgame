export default function GameStatus({ isGameWon, isGameLost }) {
  if (!isGameWon && !isGameLost) return null

  return (
    <section className={`game-status ${isGameWon ? "won" : "lost"}`}>
      {isGameWon && (
        <>
          <h2>Blockbuster! 🎬🔥</h2>
          <p>You saved TFI!</p>
        </>
      )}

      {isGameLost && (
        <>
          <h2>Disaster! 💔</h2>
          <p>All top heroes are gone... Sampoornesh Babu is the last hope of TFI now 😭🎬</p>
        </>
      )}
    </section>
  )
}