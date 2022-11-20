import React, {useState } from 'react';
import './style.css';
import presentation from '../../res/icons/presentation.png';
import competence from '../../res/icons/competence.png';
import task from '../../res/icons/task.png';
import contact from '../../res/icons/contact.png';
import {useDispatch } from 'react-redux';
import { openPage } from "../../redux/actions"

function Aside() {
  const [activePage, setActivePage] = useState("Introduction");
  const dispatch = useDispatch()

  let hundlerClick = (e) => {
    let target
    e.target.parentNode.dataset.page_id && (target = e.target.parentNode)
    e.target.dataset.page_id && (target = e.target)

    setActivePage(target.dataset.page_id)
    dispatch(openPage(target.dataset.page_id))
  }

  return (
    <aside>
      <menu>
        <h1>Summary</h1>
        <nav>
          <li onClick={hundlerClick} data-page_id="Introduction" cheked={("Introduction" === activePage).toString()}>
            <img src={presentation} alt="presentation" width="40px" height="40px"></img>
            <span>Introduction</span>
          </li>

          <li onClick={hundlerClick} data-page_id="Skills" cheked={("Skills" === activePage).toString()}>
            <img src={competence} alt="competence" width="40px" height="40px"></img>
            <span>Skills</span>
          </li>

          <li onClick={hundlerClick} data-page_id="Projects" cheked={("Projects" === activePage).toString()}>
            <img src={task} alt="task" width="40px" height="40px"></img>
            <span>Projects</span>
          </li>

          <li onClick={hundlerClick} data-page_id="Contacts" cheked={("Contacts" === activePage).toString()}>
            <img src={contact} alt="contact" width="40px" height="40px"></img>
            <span>Contacts</span>
          </li>
        </nav>
      </menu>
    </aside >
  )
}
export default Aside