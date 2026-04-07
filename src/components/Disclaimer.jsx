import React from "react"
import "../styles/app.css"

export default function Disclaimer({ onProceed }) {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-box">
        <h1>Disclaimer</h1>
        <p>
          This game is created purely for entertainment purposes.
          It does not intend to disrespect, criticize, or harm any actor
          or the Telugu Film Industry (TFI).
        </p>
        <p>
          All names used are for fun and gameplay experience only.
        </p>
        <p className="highlight">
          Enjoy the game and celebrate cinema! 🎬
        </p>

        <button className="proceed-btn" onClick={onProceed}>
          Enter TFI Endgame 🔥
        </button>
      </div>
    </div>
  )
}