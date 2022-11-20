import './style.css';
import data from './data';
import ItemContact from "./ItemContact"
import React from 'react';
export default function Contacts(props) {
    return (
        <article data-page_id="Contacts" cheked={props.cheked} className="Contacts">
            <ul>
                {data.map((item, index) => <ItemContact key={item.title} Item={[item, index]} />)}
                
                <li data-animation="start" data-sequence="7">
                    <span style={{ position: 'relative', left: '80px' }}>* please write me feedback</span>
                </li>
            </ul>
        </article>
    );
}


