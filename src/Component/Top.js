import '../style/Top.css'
import { useState } from 'react';
// import '../App.css
// import { link } from "react-router-dom";

function Top() {
    const [click, setShowNav] = useState(false);
    return (
        <div>
            <div className="App hed">

                <div className='nbar'>
                    <i class="fa-solid fa-bars" onClick={() => setShowNav(!click)}></i>
                </div>
                <div className={click ? "hednav hednavmob" : "hednav"}>
                    <div>
                        <a target="_blank" href="https://drive.google.com/file/d/1lNrUB5VCygTJFq9JsNcocwv-Ie8YxrNx/view?usp=drivesdk">
                        <button className='btnn'>RESUME ✍</button>
                        </a>
                    </div>
                    <nav>
                        <ul className='ull'>
                            <li className="lin"> <a href="/Portfolioweb">  HOME </a></li>
                            <li className="lin"> <a href="/About">  ABOUT</a></li>
                            <li className="lin"> <a href="/Services"> SERVICES</a></li>
                            <li className="lin"> <a for="Contact" href="/Contact">  CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="hedmid">
                    <div className='imgdiv'>
                        <img src={require('../Images/ssdf.jpg')} alt="salman" className='imgsal' />
                    </div>
                    <div className='salintro'>
                        <p>Hey There,</p>
                        <h1>I'M SALMAN </h1>
                        <p>I am a Web Developer and Open Source Enthusiast</p>
                    </div>
                </div>
                <div className="hedfoot">
                    <a href="/">Explore</a>
                </div>
            </div>
        </div>
    )
}
export default Top;