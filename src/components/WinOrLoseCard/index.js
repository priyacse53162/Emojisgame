import './index.css'

const WinOrLoseCard = props => {
  const {result, score, emojisList, replayfunction} = props
  const scoretext = result === 'Won' ? 'Best Score' : 'Score'

  const imageUrl =
    result === 'Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const replay = () => {
    replayfunction()
  }
  return (
    <div className="looseContainer">
      <div className="textContainer">
        <h1 className="LoseHeading">You {result}</h1>
        <p className="scoreParagraph">{scoretext}</p>
        <p className="scoreText">
          {score}/{emojisList.length}
        </p>
        <button className="PlayAgainButton" onClick={replay}>
          Play Again
        </button>
      </div>
      <img className="loseImage" src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
