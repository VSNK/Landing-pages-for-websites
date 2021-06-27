import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojiIds: [],
    showStatus: false,
    winStatus: false,
    topScore: 0,
  }

  onEmojiSelect = emojiId => {
    const {emojisList} = this.props
    const {selectedEmojiIds, topScore} = this.state
    if (selectedEmojiIds.includes(emojiId)) {
      this.setState({
        selectedEmojiIds,
        showStatus: true,
        winStatus: false,
        topScore:
          topScore < selectedEmojiIds.length
            ? selectedEmojiIds.length
            : topScore,
      })
    } else {
      selectedEmojiIds.push(emojiId)
      if (selectedEmojiIds.length === emojisList.length) {
        this.setState({
          selectedEmojiIds,
          showStatus: true,
          winStatus: true,
          topScore: selectedEmojiIds.length,
        })
      } else {
        this.setState({
          selectedEmojiIds,
          showStatus: false,
          winStatus: false,
          topScore,
        })
      }
    }
  }

  restartGame = () =>
    this.setState(prevState => ({
      selectedEmojiIds: [],
      showStatus: false,
      winStatus: false,
      topScore: prevState.topScore,
    }))

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiCards = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <ul className="emojis-list">
        {shuffledList.map(emoji => {
          const {id, emojiName, emojiUrl} = emoji
          return (
            <EmojiCard
              key={id}
              onEmojiSelect={this.onEmojiSelect}
              emojiId={id}
              emojiName={emojiName}
              emojiUrl={emojiUrl}
            />
          )
        })}
      </ul>
    )
  }

  render() {
    const {selectedEmojiIds, showStatus, winStatus, topScore} = this.state
    const score = selectedEmojiIds.length
    const {emojisList} = this.props
    const totalScore = emojisList.length

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} showScores={!showStatus} />
        <div className="body-container">
          {!showStatus && this.renderEmojiCards()}
          {showStatus && (
            <WinOrLoseCard
              score={score}
              winStatus={winStatus}
              totalScore={totalScore}
              restartGame={this.restartGame}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
