import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, useCallback } from "react";

export default function TermsAndConditions() {

    //Email checking and linking on web
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const sendEmail = useCallback((email) => {
        const URL = "https://script.google.com/macros/s/AKfycbxDHIPoYAyO-rk6hRjDQQ93rE0Q0ZNOPeI3tF0g_d42E1UmpNDmfsHG8w7oPrg7Nepx/exec";
        fetch(`${URL}?email=${email}`, {
            redirect: "follow",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          mode: 'no-cors',
          }).then(alert('Thanks for joining us. You will be recieving an email'))
    })
    //scroll animation for svg file
    const [percent, setPercent] = useState(0);
    const handleScroll = useCallback(function handleScroll(e) {
        let percentage = (window.scrollY / (window.innerHeight))
        setPercent(percentage)
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div data-aos="fade-right" data-aos-duration="1500">
                <svg style={{ transform: `rotate(${percent * 180}deg)` }} className="blackfan" width="217" height="212" viewBox="0 0 217 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4482 133.143L88.7314 104.134C93.6922 101.706 99.6815 103.76 102.109 108.721C104.536 113.682 102.483 119.671 97.5219 122.098L38.2388 151.107L29.4482 133.143Z" fill="#020202" />
                    <path d="M114.684 102.568C112.257 97.607 114.31 91.6176 119.271 89.1902L178.554 60.1814L187.345 78.146L128.062 107.155C123.101 109.582 117.112 107.529 114.684 102.568Z" fill="#020202" />
                    <path d="M107.957 104.746C102.996 107.174 97.007 105.12 94.5796 100.159L65.5708 40.8762L83.5354 32.0856L112.544 91.3688C114.972 96.3296 112.918 102.319 107.957 104.746Z" fill="#020202" />
                    <path d="M133.258 179.203L104.249 119.92C101.822 114.959 103.875 108.97 108.836 106.542C113.797 104.115 119.786 106.169 122.214 111.129L151.223 170.413L133.258 179.203Z" fill="#020202" />
                    <ellipse cx="108.397" cy="105.645" rx="11" ry="8" transform="rotate(-26.0737 108.397 105.645)" fill="black" />
                </svg>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="terms-and-conditions">
                <h1>Terms and Conditions: </h1>
                <ol>
                    <li>Once after registering with us for our service calls, amount will not be refunded.</li>
                    <li>Our calls depend on the NSE daily updates and different market levels and strategies.</li>
                    <li>We are not responsible for the profits and losses of the clients with our daily calls. Those calls purely depend on the market levels.</li>
                    <li>We don't handle client accounts until unless he requests us to handle his account.</li>
                    <li>Neither our team persons nor our company is not responsible for the profits and losses of the clients money in the dmat account.</li>
                </ol>
                <div className="check-container">
                    <div className="todo-check">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                                setIsChecked(e.target.checked)
                                if (e.target.checked === true) {
                                    setError("");
                                }
                            }}
                        />
                    </div>
                    <p className="todo-para">
                        I hereby accept all the Terms & Conditions.
                    </p>
                </div>

                {/**email */}
                <div className="email-container">
                        <input
                            value={email}
                            placeholder="enter your email"
                            className="todo-email-input"
                            onChange={(e) => {
                                setEmail(e.target.value)
                                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                if (re.test(e.target.value)) {
                                    setError("");
                                } else {
                                    setError("*please enter a vaild email");
                                }
                            }}
                        />
                        {isChecked ? (
                                <button
                                    className="todo-button"
                                    onClick={() => {
                                        if (email === "") {
                                            setError("*please enter your email");
                                        } else {
                                            setError("");
                                            sendEmail(email);
                                        }
                                    }}
                                >
                                    Submit
                                </button>
                        ) : (
                                <button
                                    className="disabled todo-button"
                                    onClick={() => { setError("*please accept terms and condition"); }}
                                >
                                    Submit
                                </button>
                        )}
                </div>
                <div className="email-container">
                    <p className="error">{error}</p>
                </div>
            </div>
        </>
    )
}