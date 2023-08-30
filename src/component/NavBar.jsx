import logo from "../images/logo.png"
export default function NavBar(){
    return <div className="nav-wrapper">  
    <nav>
        <img src={logo} alt="" className="logo" />
        <p className="company-name">StarGains</p>
        <button>contact</button>
    </nav>
    </div>

}