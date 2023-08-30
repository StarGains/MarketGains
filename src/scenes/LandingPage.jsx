import NavBar from "../component/NavBar";

export default function LandingPage(){
    return(
        <section className="landing-page">
            <div className="landing-text">
                <p className="first-line" style={{gridColumn:"1/3",gridRow:"1/2"}}>Together</p>
                <p className="second-line" style={{gridColumn:"2/3",gridRow:"2/3",fontSize:'2rem'}}>Lets Transform our time into </p>
                <p className="third-line" style={{gridColumn:"2/4",gridRow:"3/4"}}>Money</p>
            </div>
        </section>
    )
}