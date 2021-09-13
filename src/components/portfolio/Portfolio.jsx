import React from 'react';
import './portfolio.scss'
 export default function Portfolio(){
    return (
        <div className='portfolio' id='portfolio'>
           <h1>Skills/Technologies</h1> 
            {/* <ul>

            </ul> */}
            <div className="container">
                <div className="item item1">
                <img src="https://mindxmaster.s3.amazonaws.com/wp-content/uploads/2019/08/1_python-1-750x422.jpg" alt="python-logo"/>
                <h3>Python</h3>
                </div>
                <div className="item">
                <img src="https://wallpaperaccess.com/full/3949076.jpg" alt="python-logo"/>
                <h3>React</h3>
                </div>
                <div className="item">
                <img src="https://www.teahub.io/photos/full/292-2920011_django-developer.png" alt="python-logo"/>
                <h3>Django</h3>
                </div>
                <div className="item">
                <img src="https://i.imgur.com/KRwfMz3.png" alt="python-logo"/>
                <h3>Javascript</h3>
                </div>
                <div className="item">
                <img src="https://www.cloudways.com/blog/wp-content/uploads/Building-Laravel-Android-App-With-Laravel-REST-API-1280x720.jpg" alt="python-logo"/>
                <h3>RestAPI</h3>
                </div>
                <div className="item">
                <img src="https://wallpaperaccess.com/full/1631875.jpg" alt="python-logo"/>
                <h3>HTML5</h3>
                </div>
                <div className="item">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uFzN1yha--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/17ewmfug4cencd9izyii.jpg" alt="python-logo"/>
                <h3>CSS</h3>
                </div>
                <div className="item">
                <img src="https://softchief.com/wp-content/uploads/2021/04/1_OY34A4uBsawmGoqpBV3UaA.png" alt="python-logo"/>
                <h3>git</h3>
                </div>
                
            </div>
            <div className="about">
                <p>
                I  am a fresher certified in Full Stack Web Development with focus on Django-React stack. I love making new and responsive web applications. I love working with people and developing new and exciting projects with them. I also have good knowledge of various other technologies like SQL , JavaScript , Python and Data Structures. Currently looking for an opportunity to work on these technologies and grow with a professional team. 
                </p>
            </div>
        </div>

    )
}