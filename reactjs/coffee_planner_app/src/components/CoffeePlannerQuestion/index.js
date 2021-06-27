// Write your code here
import {Component} from 'react'
import QuestionOption from '../QuestionOption'
import './index.css'

class CoffeePlannerQuestion extends Component {
  submitAnswer = optionTitle => {
    const {questionType, addAnswer} = this.props
    const answer = {}
    answer[questionType] = optionTitle
    addAnswer(answer)
  }

  renderOptions = () => {
    const {optionsList, selectedOption} = this.props
    return optionsList.map(option => {
      const {id, optionTitle, description} = option
      return (
        <QuestionOption
          key={id}
          submitAnswer={this.submitAnswer}
          optionTitle={optionTitle}
          description={description}
          selected={selectedOption === optionTitle}
        />
      )
    })
  }

  render() {
    const {questionTitle} = this.props
    return (
      <li className="question-container">
        <h1 className="question-text">{questionTitle}</h1>
        <ul className="options-container">{this.renderOptions()}</ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
