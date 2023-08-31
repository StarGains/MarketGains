import Card from "../component/Card"
import logo from "../images/logo.png"
export default function Services() {

  return (
   <div className="services">
    <div className="card-holder">
    <Card card={{"src":logo}}/>
    <Card card={{"src":logo}}/>
    <Card card={{"src":logo}}/>
    </div>
    <div className="services-text">
      <img src={logo} alt="" />
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

