import './style.css';
import photo from '../../../../res/photo/main3.png'
import React from 'react';
export default function Introduction(props) {
    return (
        <article data-page_id="Introduction" cheked={props.cheked} className="Introduction">
            <div className="bloc">
                <div className="photo">
                    <img src={photo} alt="" width="380px" height="400px"></img>
                </div>
                <div className="description">
                    <div className="item">
                        <h1>Alex Reshetnik</h1>
                        <h2>Front-end Development</h2>
                    </div>
                    <div className="item">
                        <h4>Languages</h4>
                        Ukrainian - Homely<br></br>
                        English- A2 (there is a desire to raise it to B2)<br></br>
                        Russian - Auditory (I'd rather not know)<br></br>
                    </div>

                    <div className="item">
                        <h4>University</h4>
                        <h5>2019 → now</h5>
                        University - Vasyl Stefanyk Precarpathian National University<br></br>
                        Faculty - Mathematics and Computer science<br></br>
                        Specialty - Computer Science<br></br>
                    </div>
                </div>
            </div>
            <div className="lists">
                <div>
                    <h4>My vision of the perfect job</h4>
                    <ul>
                        <li data-animation="start" data-sequence="1">Independent or group creation of the entire
                            front end part</li>
                        <li data-animation="start" data-sequence="2">With responsibility for UI/UX and functional
                            component</li>
                    </ul>
                </div>
                <div>
                    <h4>The main goal at work</h4>
                    <ul>
                        <li data-animation="start" data-sequence="3">Gain expertise in solving difficult problems
                        </li>
                        <li data-animation="start" data-sequence="4">Learn new technologies</li>
                        <li data-animation="start" data-sequence="5">Practice teamwork</li>
                    </ul>
                </div>
                <div>
                    <h4>My super powers</h4>
                    <ul>
                        <li data-animation="start" data-sequence="6">I quickly understand new technology</li>
                        <li data-animation="start" data-sequence="7">I can perform a large amount of work in a short
                            period of time
                        </li>
                        <li data-animation="start" data-sequence="8">I'm stubbornly going to the goal</li>
                    </ul>
                </div>
                <div>
                    <h4>I like</h4>
                    <ul>
                        <li data-animation="start" data-sequence="9">Create beautiful and convenient applications
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
}


