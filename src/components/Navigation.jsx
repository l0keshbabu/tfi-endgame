import "../styles/navigation.css"

export default function Navigation() {
  return (
    <nav className="page-nav" aria-label="Game navigation">
      <button
        type="button"
        className="nav-icon-btn info-trigger"
        aria-label="How to play"
      >
        <span aria-hidden="true">ⓘ</span>
      </button>
    </nav>
  )
}