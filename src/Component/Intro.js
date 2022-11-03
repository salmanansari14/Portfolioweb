import '../style/Intro.css'
// import '../App.css';
// import './ddd.jpg'
function Intro() {
    return (

        <div for="Top" className="maincom">

            <div className='m'>

                <img src='./Images/ddd.jpeg' alt="salman" className='imag' />

                <span className='mh'>
                    <h1>MOHD SALMAN ANSARI</h1>
                    <p className='loc'>UP, INDIA
                        <a className='locfont' target="_blank" href="https://goo.gl/maps/gsf6dzMJEYSzotjN9">
                            <i class="fa-solid fa-location-dot"></i>
                        </a>
                    </p>
                    <div class="icons">
                        <a class="media-icons linn" target="_black" href="https://www.linkedin.com/in/salmanansari14">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/salmanansari14" target="_black" class="media-icons twit">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100010226310346" target="_black" class="media-icons fab">
                            <i class="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/salmansaari/" target="_black" class="media-icons inst">
                            <i class="fa-brands fa-instagram-square"></i>
                        </a>
                    </div>

                </span>

            </div>
            <div className='ab'>
                <h1>About me</h1>
                <p>I'm a Web Developer with the skill of ReactJs. Passionate about web development Goal is to achieve a good position by doing    satisfying  work in the IT field, strongly focused to complete the task in fast faced environment.
                    I'm interested in competitive programming.. so i started learn (DS & ALGO)
                    My coding journey started from (Nov 2020)
                    Outside of Coding.. I usually spend my time with Family...</p>
                <p>Currently I have practicing coding on <b>Codechef</b> and <b>Hackerrank</b> plateform.</p>
            </div>
            

        </div>
    )
}
export default Intro;