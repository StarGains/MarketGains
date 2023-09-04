export default function ContactInfo({closeModal}) {
    return(
        <div class="Cont-box" data-aoso="fade-down" data-aoso-duration="1000">
            <div class="header-box">
                <div id="ci-title">Contact Info</div>
                <button type="button" id="bc" onClick={closeModal} aria-label="Close">x</button>
            </div>
            <div class="content">
                <div class="info-container">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="info-image" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path>
                    </svg>
                    <div>
                        <p>
                            <spawn class="tspawn">Email</spawn>
                            <br />Stargainsdeportment@gmail.com
                        </p>
                    </div>
                </div>
                <div class="info-container">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="info-image" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                    </svg>
                    <div>
                        <p>
                            <spawn class="tspawn">Phone </spawn>
                            <br />+91-9886549287
                        </p>
                    </div>
                </div>
                <div class="info-container">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" class="info-image" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                    </svg>
                    <div>
                        <p>
                            <spawn class="tspawn">Location</spawn>
                            <br />Headquarters - Chennai
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}