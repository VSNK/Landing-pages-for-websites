// Write your code here.
import './index.css'

export default props => {
  const {optionTitle, description, selected, submitAnswer} = props
  return (
    <li className="option-list-item">
      <button
        type="button"
        className={selected ? 'option-container active' : 'option-container'}
        onClick={() => submitAnswer(optionTitle)}
      >
        <div className="option-title-container">
          <h1 className="option-title-name">{optionTitle}</h1>
          {!selected && (
            <img
              alt="blue cup"
              src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
              className="option-title-icon"
            />
          )}
          {selected && (
            <img
              alt="white cup"
              src="https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png"
              className="option-title-icon"
            />
          )}
        </div>
        <p className="option-description">{description}</p>
      </button>
    </li>
  )
}
