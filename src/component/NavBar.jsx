import logo from "../images/logo.png"
export default function NavBar(){
    return  <nav>
        <img src={logo} alt="" className="logo" />
        <p className="company-name">StarGains</p>
        <button>contact</button>
    </nav>

}