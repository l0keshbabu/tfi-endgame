import { useState } from "react"
import "../styles/navigation.css"

export default function Navigation() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  function openInfo() {
    setIsInfoOpen(true)
  }

  function closeInfo() {
    setIsInfoOpen(false)
  }

  return (
    <>
      <nav className="page-nav" aria-label="Game navigation">
        <button
          type="button"
          className="nav-icon-btn info-trigger"
          onClick={openInfo}
          aria-label="How to play"
          aria-haspopup="dialog"
        >
          <span aria-hidden="true">ⓘ</span>
        </button>
      </nav>

      {isInfoOpen && (
        <div
          className="nav-overlay"
          onClick={closeInfo}
        >
          <div
            className="info-panel"
            role="dialog"
            aria-modal="true"
            aria-label="How to play"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="info-panel-header">
              <h2>🎬 How to Play</h2>

              <button
                type="button"
                className="nav-close-btn"
                onClick={closeInfo}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <ul className="info-panel-list">
              <li>🎯 A mystery Telugu blockbuster title is hidden, letter by letter.</li>
              <li>⌨️ Guess letters using the on-screen keys or your physical keyboard.</li>
              <li>💥 Every wrong guess costs one hero — keep an eye on the hero row.</li>
              <li>🏆 Reveal the full title before every hero is eliminated to win.</li>
              <li>🔥 Wins build your Box Office Run — chase a new Hall of Fame best.</li>
            </ul>

            <p className="info-panel-footer">
              More settings &amp; sound controls are coming soon from the menu.
            </p>
          </div>
        </div>
      )}
    </>
  )
}