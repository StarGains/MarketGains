import logo from "../images/logo.svg"
export default function NavBar(){
    return  <nav className="nav-bar">
        <img src={logo} alt="" className="logo" />
        <p className="company-name">MarketGains</p>
        <button>contact</button>
    </nav>

}