// Write your code here
import {Component} from 'react'

import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  logger = () => {
    console.log('logger entered')
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    const messageText = isLoggedIn ? 'Welcome User' : 'Please Login'
    console.log(isLoggedIn)

    return (
      <div className="Home">
        <div className="Box">
          <Message text={messageText} />
          {isLoggedIn ? (
            <Logout onClick={this.logger} />
          ) : (
            <Login onClick={this.logger} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
