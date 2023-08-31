import Card from "../component/Card"
import nselogo from "../images/NSE.svg"
import personArrow from "../images/person-arrow.png"
import bullBear from "../images/Bull-bear.png"
import bull from "../images/Bull.jpg"
export default function Services() {

  return (
   <div className="services">
    <div className="card-holder">
    <Card card={{"src":personArrow, "heading":"Your Gateway for Investing!", "footer":"With us you can always trade safe", "body":"Traders and Investors in India use our stable and reliable platforms regularlyTradings have risk and also brings a lot of fortune. It was like rollercoaster that depends on the market to go forward"}}/>
    <Card card={{"src":bullBear,"heading":"User Friendly Trading","body":"A Trained research team will send BUY/SELL recommendations on the basis of technical analysis.With our trading strategies, and research backed tips you will minimise risks and maximise returns."}}/>
    <Card card={{"src":bull,"heading":"Precise Assessment","body":"The price of a stock moves on the basis of any news, fundamentals, technical analysis, and so on.By gaining knowledge about these aspects, you can enhance your knowledge of stocks and stock markets. This will help you to figure out the right price to enter or exit a trade."}}/>
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

