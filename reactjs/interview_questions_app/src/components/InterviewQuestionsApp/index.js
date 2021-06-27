// Write you Code here
import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  state = {level: 'ALL', category: 'ALL'}

  updateCategory = category =>
    this.setState(prevState => ({level: prevState.level, category}))

  updateLevel = level =>
    this.setState(prevState => ({level, category: prevState.category}))

  renderQuestions = questions =>
    questions.map(question => {
      const {id, questionText, answerText, language, difficultyLevel} = question
      return (
        <InterviewQuestion
          key={id}
          questionText={questionText}
          answerText={answerText}
          language={language}
          difficultyLevel={difficultyLevel}
        />
      )
    })

  render() {
    const {category, level} = this.state
    const {questionsData, levelsData, categoryData} = this.props
    const finalQuestionsData = questionsData.filter(question => {
      const {language, difficultyLevel} = question
      return (
        (category === 'ALL' || language === category) &&
        (level === 'ALL' || difficultyLevel === level)
      )
    })
    return (
      <div className="app-container">
        <div className="header-section">
          <h1 className="header-title">
            30 Seconds <br /> of Interviews
          </h1>
          <img
            alt="background"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            className="header-image"
          />
        </div>
        <div className="body-section">
          <Filters
            updateCategory={this.updateCategory}
            updateLevel={this.updateLevel}
            levelsData={levelsData}
            categoryData={categoryData}
            selectedCategory={category}
            selectedLevel={level}
          />
          {this.renderQuestions(finalQuestionsData)}
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
