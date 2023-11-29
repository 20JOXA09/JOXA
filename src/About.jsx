import React from 'react';
import rasm12 from '../src/img/Im.png'
import rasm14 from '../src/img/me.png'

const About = () => {
    return ( 
        <React.Fragment>
            <div className="About">
                <div className="Nav">
                    <ul className='UL'>
                        <li className='LI'>
                        <a className='H2' href="/">Home</a>
                        <a className='A2' href="/about">About</a>
                        <a className='S2' href="/skills">Skills</a>
                        </li>
                    </ul>
                </div>
                <div className="Con">
                    <h1 className='H11'>Hello, every body my name is Jahongir and my surname is Xolmirzayev. <br />
                    I go to school number 54, I like learn english and Front end. <br />
                    My hobby is playing football. And I have parents. <br />
                     My familie has 5 people theirs, my father, my mother, my brother, my sister and me</h1>
                     <img className='rasm12' src={rasm12} alt="" />
                     <img className='rasm14' src={rasm14} alt="" />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default About;