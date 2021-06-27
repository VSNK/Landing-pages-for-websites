// Write your code here.
import './index.css'

export default props => {
  const {score, topScore, showScores} = props
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
            className="title-logo"
          />
          <h1 className="title-name">Emoji Game</h1>
        </div>
        {showScores && (
          <div className="scores-container">
            <p className="scores-mark">Score: {score}</p>
            <p className="scores-mark">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}
