import React from "react"
import "../styles/app.css"
import bgImage from "../assets/disclimerbg.png"

export default function Disclaimer({ onProceed }) {
  return (
    <div className="disclaimer-container"
  //   style={{
  //   backgroundImage: `url(${bgImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat"
  // }}
  >
      <div className="disclaimer-box">
        <h1>Disclaimer</h1>
        <p className="par">
          This game is created purely for entertainment purposes.
          It does not intend to disrespect, criticize, or harm any actor
          or the Telugu Film Industry (TFI).
        </p>
        <p className="par">
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