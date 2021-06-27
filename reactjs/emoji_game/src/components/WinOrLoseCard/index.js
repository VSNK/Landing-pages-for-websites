// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, winStatus, totalScore, restartGame} = this.props
    return (
      <div className="score-card">
        <div className="score-info">
          <h1 className="score-status">{winStatus ? 'You Won' : 'You Lose'}</h1>
          <p className="score-type">{winStatus ? 'Best Score' : 'Score'}</p>
          <p className="score-marks">
            {score}/{totalScore}
          </p>
          <button
            className="play-again-button"
            type="button"
            onClick={() => restartGame()}
          >
            Play Again
          </button>
        </div>
        {winStatus && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="won"
            className="win-lose-image"
          />
        )}
        {!winStatus && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose"
            className="win-lose-image"
          />
        )}
      </div>
    )
  }
}

export default WinOrLoseCard
