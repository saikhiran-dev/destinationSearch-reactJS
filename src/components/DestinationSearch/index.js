import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="search"
              className="search-input"
              value={searchInput}
              onChange={this.onSearchChange}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="destination-container">
            {searchResults.map(eachItem => (
              <DestinationItem key={eachItem.id} destinationsList={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
