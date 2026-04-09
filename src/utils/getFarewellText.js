export function getFarewellText(heroName) {
  const messages = [
    `${heroName} walked out after a disaster opening day 💔`,
    `${heroName} couldn't survive the box office flop 📉`,
    `${heroName}'s movie got rejected by fans 😭`,
    `${heroName} lost the collections battle 💸`,
    `${heroName} vanished after a disaster talk 🗣️`,
    `${heroName}'s film turned into a meme fest 😂`,
    `${heroName} couldn't handle the negative reviews 📰`,
    `${heroName} stepped down after a flop show 🎬`,
    `${heroName}'s movie failed to impress the audience 👎`,
    `${heroName} got eliminated from the TFI lineup 🚫`
  ]

  const randomIndex = Math.floor(Math.random() * messages.length)
  return messages[randomIndex]
}