import './style.css';
import github from '../../../../res/icons/contacts/github.png'
import data from './data';
import ItemProject from "./ItemProject"
import React from 'react';
export default function Projects(props) {

    let list_data = data.map((item,index) => <ItemProject key={item.title.toString()} Item={[item, index]}></ItemProject>)
    return (
        <article data-page_id="Projects" cheked={props.cheked} className="Projects">
            <ul>
                {list_data}
                <li key={"More in my Git-Hub"}>
                    <div>
                        <a href="https://github.com/AlexReshetnik" target="_blank" rel="noopener noreferrer">
                            <h3 data-animation="start" data-sequence="17">More in my Git-Hub</h3>
                            <img src={github} alt="" width="40px" height="40px"></img>
                        </a>
                    </div>
                </li>
            </ul>
        </article>
    );
}


