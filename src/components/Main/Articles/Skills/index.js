import './style.css';
import data from './data';
import ItemList from "./ItemList"
import React from 'react';


let stack = data.find(item => item.id === "stack")
let language = data.find(item => item.id === "language")
let courses = data.find(item => item.id === "courses")

export default function Skills(props) {
    return (
        <article data-page_id="Skills" cheked={props.cheked} className="Skills">
            <ul>
                <li><h3>{stack.title}</h3></li>
                {stack.list.map((item, index) => <ItemList key={item} Item={[item, index]} />)}
            </ul>
            <div >
                <ul>
                    <li><h3>{language.title}</h3></li>
                    {language.list.map((item, index) => <ItemList key={item} Item={[item, index]} />)}
                </ul>
                <ul>
                    <li><h3>{courses.title}</h3></li>
                    {courses.list.map((item, index) => <ItemList key={item} Item={[item, index]} />)}
                </ul>
            </div>
        </article>
    );
}


