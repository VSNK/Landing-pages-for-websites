// Write you Code here
import {Component} from 'react'
import './index.css'

class InterviewQuestion extends Component {
  state = {showAnswer: false}

  toggleState = () =>
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))

  render() {
    const {questionText, answerText, language, difficultyLevel} = this.props
    const {showAnswer} = this.state
    return (
      <div className="question-container">
        <div className="tags-container">
          <span className="tag level-tag">{difficultyLevel}</span>
          <span className="tag language-tag">{language}</span>
        </div>
        <h1 className="question-text">{questionText}</h1>
        <button
          type="button"
          onClick={this.toggleState}
          className="show-button"
        >
          Show
          {!showAnswer && (
            <img
              className="arrow"
              alt="down arrow"
              src="https://assets.ccbp.in/frontend/react-js/down-arrow.png"
            />
          )}
          {showAnswer && (
            <img
              className="arrow"
              alt="up arrow"
              src="https://assets.ccbp.in/frontend/react-js/up-arrow.png"
            />
          )}
        </button>
        {showAnswer && <p className="question-answer">{answerText}</p>}
      </div>
    )
  }
}

export default InterviewQuestion
