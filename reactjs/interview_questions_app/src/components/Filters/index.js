// Write you Code here
import {Component} from 'react'
import './index.css'

class Filters extends Component {
  render() {
    const {
      categoryData,
      levelsData,
      updateCategory,
      updateLevel,
      selectedCategory,
      selectedLevel,
    } = this.props
    return (
      <div className="filters-container">
        <div className="filter-container">
          <p className="filter-label">LANGUAGE</p>
          <select
            className="filter-select"
            onChange={event => updateCategory(event.target.value)}
            value={selectedCategory}
          >
            {categoryData.map(category => {
              const {id, language} = category
              return <option key={id}>{language}</option>
            })}
          </select>
        </div>
        <div className="filter-container">
          <p className="filter-label">DIFFICULTY LEVEL</p>
          <select
            className="filter-select"
            onChange={event => updateLevel(event.target.value)}
            value={selectedLevel}
          >
            {levelsData.map(category => {
              const {id, level} = category
              return <option key={id}>{level}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
