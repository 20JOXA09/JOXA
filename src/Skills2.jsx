import React from 'react';
import rasm15 from '../src/img/skil.png'
import rasm16 from '../src/img/html.png'
import rasm17 from '../src/img/css.png'
import rasm18 from '../src/img/react.png'

const Skills2 = () => {
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="NAV">
                    <ul className='group'>
                        <li className='list'>
                        <a className='H3' href="/">Home</a>
                        <a className='A3' href="/about">About</a>
                        <a className='S3' href="/skills">Skills</a>
                        </li>
                    </ul>
                    <img className='rasm15' src={rasm15} alt="" />
                </div>
                <div className="CON">
                    <h1 className='H6'>I know This Front end lenguage</h1>
                    <img className='rasm16' src={rasm16} alt="" />
                    <img className='rasm17' src={rasm17} alt="" />
                    <img className='rasm18' src={rasm18} alt="" />
                    
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Skills2;