import React from 'react';
export default function ItemContact({ Item }) {
    let [item, index] = Item;
    return (
        <li data-animation="start" data-sequence={index}>
            <a href={item.dataLink} target="_blank" rel="noopener noreferrer">
                <img src={item.imgLink} alt="" width="40px" height="40px"></img>
                <span>{item.title}</span>
            </a>
        </li>
    );
}