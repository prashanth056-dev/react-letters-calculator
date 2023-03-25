import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {length: 0}

  onChangeEvent = event => {
    this.setState({length: event.target.value.length})
  }

  render() {
    const {length} = this.state

    return (
      <div className="mainBg">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label for="input">Enter the phrase</label>
          <input
            id="input"
            placeholder="Enter the phrase"
            type="text"
            className="input"
            onChange={this.onChangeEvent}
          />
          <p className="lettCont">No.of letters: {length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
