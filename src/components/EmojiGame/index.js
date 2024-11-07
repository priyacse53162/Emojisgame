/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topscore: 0,
    clickedEmoji: [],
    end: false,
    wonorlosstext: '',
  }

  onClickEmoji = id => {
    const {clickedEmoji, score} = this.state
    const {emojisList} = this.props

    if (clickedEmoji.includes(id)) {
      this.setState({
        end: true,
        wonorlosstext: 'Lose',
      })
    } else {
      if (score + 1 === emojisList.length) {
        this.setState({
          end: true,
          wonorlosstext: 'Won',
        })
      }
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
        score: prevState.score + 1,
      }))
    }
  }

  rePlay = () => {
    const {score, topscore} = this.state
    const calculateTopscore = score > topscore ? score : topscore
    this.setState({
      score: 0,
      wonorlosstext: '',
      end: false,
      topscore: calculateTopscore,
      clickedEmoji: [],
    })
  }

  shuffledEmojisList = emojisList => emojisList.sort(() => Math.random() - 0.5)

  render() {
    const {emojisList} = this.props
    const {score, topscore, wonorlosstext, end} = this.state

    const shuffledEmojis = this.shuffledEmojisList(emojisList)

    return (
      <div className="bg-container">
        <NavBar score={score} topscore={topscore} gameends={end} />
        <h1 className="instruction">
          Instruction : If you click previously clicked emojis, you Lose the
          Game
        </h1>
        <div className="bottomContainer">
          {end ? (
            <WinOrLoseCard
              result={wonorlosstext}
              score={score}
              emojisList={emojisList}
              replayfunction={this.rePlay}
            />
          ) : (
            <ul className="emojiContainer">
              {shuffledEmojis.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickFunction={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
