export function getFarewellText(heroName) {
  const messages = [
    `${heroName} walked out after a disaster opening day 💔`,
    `${heroName}'s film turned into a meme fest 😂`,
    `${heroName}'s movie got rejected by fans 😭`,
    `${heroName} couldn't survive the box office flop 📉`,
    `${heroName} entry strong... but exit even faster 😶`,
    `${heroName} lost the collections battle 💸`,
    `${heroName} came with hype... left with silence 🤐`,
    `${heroName} stepped down after a flop show 🎬`,
    `${heroName}'s movie failed to impress the audience 👎`,
    `${heroName} got eliminated from the TFI lineup 🚫`
  ]

  const randomIndex = Math.floor(Math.random() * messages.length)
  return messages[randomIndex]
}