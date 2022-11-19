import React, { Component } from 'react';
import './style.css';
import presentation from '../../res/icons/presentation.png';
import competence from '../../res/icons/competence.png';
import task from '../../res/icons/task.png';
import contact from '../../res/icons/contact.png';

/*f/unction hundlerClick(params) {
  let pages = document.querySelectorAll('article[data-page_id]')
  let animation_li = document.querySelectorAll('[data-animation]')
  let menu = document.querySelector('menu')
  let link_of_page = document.querySelectorAll('li[data-page_id]')


  rum_anim()
  function rum_anim() {
    console.log("dfgh");
    pages.forEach(target_page => {
      animation_li.forEach(item_anim => {
        if (item_anim.closest('article[data-page_id]') == target_page) {
          setTimeout(() => {
            item_anim.setAttribute("data-animation", "end")
          }, (65 * item_anim.dataset.sequence) + 50)
        }
      })
    })
  }

  menu.addEventListener('click', e => {

    let item = e.target.closest('li[data-page_id]')
    if (!item) return
    //виключаю всі елементи меню
    link_of_page.forEach(i => i.setAttribute("cheked", "false"))
    //включаю поточну сторінку
    item.setAttribute("cheked", "true")

    pages.forEach(target_page => {
      if (item.dataset.page_id == target_page.dataset.page_id) {
        target_page.setAttribute("cheked", "true")
        target_page.style.zIndex = 2
        animation_li.forEach(item_anim => {
          if (item_anim.closest('article[data-page_id]') == target_page) {
            setTimeout(() => {
              item_anim.setAttribute("data-animation", "end")
            }, (65 * item_anim.dataset.sequence) + 50)
          }
        })
      }
      else {
        target_page.style.zIndex = 0
        setTimeout(() => { target_page.setAttribute("cheked", "false") }, 300);
        animation_li.forEach(l => l.setAttribute("data-animation", "start"))
      }
    })

  })

}*/
class Aside extends Component {
  state = {
    active_page:"Introduction"
  }
  
  hundlerClick=(e)=> {
    let target
    e.target.parentNode.dataset.page_id && (target = e.target.parentNode)
    e.target.dataset.page_id && (target = e.target)
    this.setState({ active_page: target.dataset.page_id });
    return e
  }
  
  render() {
    return (
      <aside>
        <menu>
          <h1>Summary</h1>
          <nav>
            <li onClick={this.hundlerClick} data-page_id="Introduction" cheked={("Introduction" == this.state.active_page).toString()}>
              <img src={presentation} alt="presentation" width="40px" height="40px"></img>
              <span>Introduction</span>
            </li>

            <li onClick={this.hundlerClick} data-page_id="Skills" cheked={("Skills" == this.state.active_page).toString()}>
              <img src={competence} alt="competence" width="40px" height="40px"></img>
              <span>Skills</span>
            </li>

            <li onClick={this.hundlerClick} data-page_id="Projects" cheked={("Projects" == this.state.active_page).toString()}>
              <img src={task} alt="task" width="40px" height="40px"></img>
              <span>Projects</span>
            </li>

            <li onClick={this.hundlerClick} data-page_id="Contacts" cheked={("Contacts" == this.state.active_page).toString()}>
              <img src={contact} alt="contact" width="40px" height="40px"></img>
              <span>Contacts</span>
            </li>
          </nav>
        </menu>
      </aside >
    )
  }
}
export default Aside