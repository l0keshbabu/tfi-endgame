import { useEffect, useState } from "react"
import "../styles/navigation.css"

export default function Navigation() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setIsInfoOpen(false)
      setIsMenuOpen(false)
    }
  }

  window.addEventListener("keydown", handleKeyDown)

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [])
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
        <button
        type="button"
        className="nav-icon-btn menu-trigger"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        aria-haspopup="menu"
        aria-expanded={isMenuOpen}>
          <span aria-hidden="true">☰</span>
        </button>
      </nav>
      {isMenuOpen && (
  <div
    className="nav-overlay"
    onClick={() => setIsMenuOpen(false)}
  >
    <div
      className="nav-drawer"
      role="menu"
      aria-label="Game menu"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="nav-drawer-header">
        <span>Menu</span>

        <button
          type="button"
          className="nav-close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      <ul className="nav-drawer-list">
        <li>
          <button
            type="button"
            className="nav-drawer-item"
            role="menuitem"
          >
            <span className="nav-drawer-icon" aria-hidden="true">
              🎮
            </span>

            <span className="nav-drawer-label">
              How to Play
            </span>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="nav-drawer-item"
            disabled
          >
            <span className="nav-drawer-icon" aria-hidden="true">
              ⚙️
            </span>

            <span className="nav-drawer-label">
              Settings
            </span>

            <span className="nav-drawer-badge">
              Soon
            </span>
          </button>
        </li>

        <li>
          <button
            type="button"
            className="nav-drawer-item"
            disabled
          >
            <span className="nav-drawer-icon" aria-hidden="true">
              🔊
            </span>

            <span className="nav-drawer-label">
              Sound Controls
            </span>

            <span className="nav-drawer-badge">
              Soon
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
)}
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