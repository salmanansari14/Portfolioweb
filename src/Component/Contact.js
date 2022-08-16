import '../style/Contact.css'
// import React,{useState} from react;
import { useState } from 'react';

// const [val, setval] = useState("");


function Contact() {



    return (
        <div id='Contact'  className="contact">

            <h1 className='conth'>Contact me</h1>

            <div className='aaa'>

                <div className='form'>

                    <div className='divinp'>
                        <input type="text" className='inp' placeholder="👤   Enter your name" />
                    </div>
                    <div className='divinp'>
                        <input type="text" className='inp' placeholder="💌   Enter your email" />
                    </div>
                    <div className='divinp'>
                        <input type="text" className='inp ' placeholder="👨‍🎓   Enter your profession" />
                    </div>
                    <div className='divinp'>
                        <textarea name="" id="" cols="20" rows="5" placeholder="✍🏿 Enter your message" className='inp'></textarea>
                    </div>
                    <div className='divinp'>
                        <button onClick={onsubmit} className='subm'>Submit</button>
                    </div>
                </div>

                <div className='imdiv'>
                    {/* <img src={require('../Images/zz.jpg')} className="imgcon" alt="" /> */}
                    <img src={require('../Images/sasdf.jpg')} alt="salman" className='imgsal' />
                </div>

            </div>
        </div>
    );
}
export default Contact;