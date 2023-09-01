export default function TermsAndConditions(){
    return  (<div className="terms-and-conditions">
            <h1>Terms and Conditions: </h1>
            <ol>
                <li>Once after registering with us for our service calls, amount will not be refunded.</li>
                <li>Our calls depend on the NSE daily updates and different market levels and strategies.</li>
                <li>We are not responsible for the profits and losses of the clients with our daily calls. Those calls purely depend on the market levels.</li>
                <li>We don't handle client accounts until unless he requests us to handle his account.</li>
                <li>Neither our team persons nor our company is not responsible for the profits and losses of the clients money in the dmat account.</li>
            </ol>
            <div className="accept-tandc">
                <input type="checkbox" />
                <p>I hereby accept all the Terms & Conditions.</p>
            </div>
            <div className="email-submit">
                <input id="e1" type="email" placeholder="email" />
                <input id="submit" type="submit" />
            </div>
    </div>)
}