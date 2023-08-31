import Card from "../component/Card"
import nselogo from "../images/NSE.svg"
import personArrow from "../images/person-arrow.png"
import bullBear from "../images/Bull-bear.png"
import bull from "../images/Bull.jpg"
export default function Services() {

  return (
    <div className="services">
      <svg className="floater" width="143" height="143" viewBox="0 0 143 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.835 89.668L59.7552 70.134C63.0966 68.4989 67.1307 69.8822 68.7658 73.2236C70.4008 76.5649 69.0175 80.5991 65.6761 82.2341L25.7559 101.768L19.835 89.668Z" fill="#399600" />
        <path d="M77.2341 69.0804C75.5991 65.739 76.9824 61.7048 80.3238 60.0698L120.244 40.5358L126.165 52.636L86.2447 72.17C82.9033 73.805 78.8692 72.4217 77.2341 69.0804Z" fill="#399600" />
        <path d="M72.704 70.547C69.3634 72.1817 65.3301 70.7987 63.6955 67.4581L44.1558 27.5262L56.2532 21.6066L75.7929 61.5385C77.4276 64.8791 76.0446 68.9124 72.704 70.547Z" fill="#399600" />
        <path d="M89.7468 120.697L70.2071 80.7654C68.5725 77.4248 69.9554 73.3915 73.2961 71.7569C76.6367 70.1222 80.6699 71.5052 82.3046 74.8458L101.844 114.778L89.7468 120.697Z" fill="#399600" />
        <ellipse cx="73" cy="71.1522" rx="7.40746" ry="5.38845" transform="rotate(-26.0737 73 71.1522)" fill="#399600" />
      </svg>

      <div className="card-holder">
        <Card card={{ "src": personArrow, "heading": "Your Gateway for Investing!", "footer": "With us you can always trade safe", "body": "Traders and Investors in India use our stable and reliable platforms regularlyTradings have risk and also brings a lot of fortune. It was like rollercoaster that depends on the market to go forward" }} />
        <Card card={{ "src": bullBear, "heading": "User Friendly Trading", "body": "A Trained research team will send BUY/SELL recommendations on the basis of technical analysis.With our trading strategies, and research backed tips you will minimise risks and maximise returns." }} />
        <Card card={{ "src": bull, "heading": "Precise Assessment", "body": "The price of a stock moves on the basis of any news, fundamentals, technical analysis, and so on.By gaining knowledge about these aspects, you can enhance your knowledge of stocks and stock markets. This will help you to figure out the right price to enter or exit a trade." }} />
      </div>
      <div className="services-text">
        <img src={nselogo} height="150px" alt="" />
        <div>
          <p>Unmached Gudiance Sharing</p>
          <p>The Fast and reliable source for Analysis and Decision making</p>
        </div>
        <button>Live News</button>
        <button>Live Market</button>
      </div>
    </div>
  )
}

