import Boxpart from "./Boxpart";


export default function Headbar(){
    return(
        <>
            <div className="nav-bg-holder">
                <div className="nav-bar">
                    <div className="nav-bg"></div>
                    <img className="logo" src="D:\Projects\project1\src\images" alt="Picture" />
                    <div className="Company">
                        <p>NewIndia</p>
                    </div>
                    <button className="contactbutton">
                        Contact
                    </button>
                </div>
            </div>
            <div className="text-starting">
                <p>
                    <div className="moving-text"><span className="text-gradient" id="together">Together </span></div>
                    <p id="p1">Let's transform your</p>  time into
                    <span className="text-gradient" id="money"> Money.</span>
                </p>
            </div>
            <Boxpart />
        </>
    )
}