import { useState } from "react"
import Disclaimer from "./components/Disclaimer"
export default function App(){
  const [showDisclaimer, setShowDisclaimer] = useState(() => {
  return !sessionStorage.getItem("tfiDisclaimerAccepted")})

  function handleProceed() {
  sessionStorage.setItem("tfiDisclaimerAccepted", "true")
  setShowDisclaimer(false)
}

   if (showDisclaimer) {
  return <Disclaimer onProceed={handleProceed} />
  }
  return (
    <main>
      
    </main>
  )
}