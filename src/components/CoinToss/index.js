// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossRes: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImg = ''
    let currHeadsCount = headsCount
    let currTailsCount = tailsCount

    if (toss === 0) {
      tossImg = HEADS_IMG_URL
      currHeadsCount += 1
    } else {
      tossImg = TAILS_IMG_URL
      currTailsCount += 1
    }

    this.setState({
      tossRes: tossImg,
      headsCount: currHeadsCount,
      tailsCount: currTailsCount,
    })
  }

  render() {
    const {tossRes, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-cont">
        <div className="coin-cont">
          <h1 className="head">Coin Toss Game</h1>
          <p className="descp">Heads (or) Tails</p>
          <img className="tossres-img" alt="toss result" src={tossRes} />
          <button className="btn" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-cont">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
