// Write your code here.
import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {showPlan: false}

  renderResponse = () => {
    const {
      DRINK_TYPE,
      COFFEE_TYPE,
      QUANTITY,
      GRIND_TYPE,
      DELIVER_TYPE,
    } = this.state

    if (
      DRINK_TYPE === undefined ||
      COFFEE_TYPE === undefined ||
      QUANTITY === undefined ||
      GRIND_TYPE === undefined ||
      DELIVER_TYPE === undefined
    ) {
      return (
        <p className="plan">Kindly select options for all the questions.</p>
      )
    }
    return (
      <p className="plan">
        I Drink my coffee as <span className="highlight">{DRINK_TYPE}</span>,
        with a <span className="highlight">{COFFEE_TYPE}</span> type of been.{' '}
        <span className="highlight">{QUANTITY}</span> of{' '}
        <span className="highlight">{GRIND_TYPE}</span> ground, send to me{' '}
        <span className="highlight">{DELIVER_TYPE}</span>.
      </p>
    )
  }

  addAnswer = answer =>
    this.setState(prevState => ({...prevState, ...answer, showPlan: false}))

  renderQuestions = () => {
    const {coffeePlannerList} = this.props
    return coffeePlannerList.map(question => {
      const {id, questionTitle, questionType, optionsList} = question
      let selectedOption = null
      // eslint-disable-next-line react/destructuring-assignment
      selectedOption = this.state[questionType]
      return (
        <CoffeePlannerQuestion
          key={id}
          addAnswer={this.addAnswer}
          questionTitle={questionTitle}
          questionType={questionType}
          optionsList={optionsList}
          selectedOption={selectedOption}
        />
      )
    })
  }

  onShowPlan = () =>
    this.setState(prevState => ({
      ...prevState,
      showPlan: true,
    }))

  render() {
    const {showPlan} = this.state
    return (
      <div className="app-container">
        <div className="header-section">
          <div className="header-inner-container">
            <h1 className="header-heading">Create a Plan</h1>
            <p className="header-description">
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <div className="body-section">
          <ul className="questions-container">{this.renderQuestions()}</ul>
          <button type="button" className="button" onClick={this.onShowPlan}>
            Create my plan
          </button>
          {showPlan && this.renderResponse()}
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
