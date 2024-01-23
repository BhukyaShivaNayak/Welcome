// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {subscribe: false}

  clickedIt = () => {
    const {subscribe} = this.state
    if (subscribe === false) {
      this.setState(prevState => ({subscribe: true}))
    } else {
      this.setState(prevState => ({subscribe: false}))
    }
  }

  render() {
    const {subscribe} = this.state
    let button
    if (subscribe === true) {
      button = (
        <button onClick={this.clickedIt} type="button">
          Subscribed
        </button>
      )
    } else {
      button = (
        <button onClick={this.clickedIt} type="button">
          Subscribe
        </button>
      )
    }
    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {button}
      </div>
    )
  }
}

export default Welcome
