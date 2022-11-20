import './style.css';

import Introduction from './Articles/Introduction';
import Skills from './Articles/Skills';
import Projects from './Articles/Projects';
import Contacts from './Articles/Contacts';
import React from 'react';
import { useSelector } from 'react-redux';

function Main (){

  let activePage = useSelector(state => state.pageReducer.page)
  return (
    <main>
      <section>
        <Introduction cheked={(activePage === "Introduction").toString()} />
        <Skills cheked={(activePage === "Skills").toString()} />
        <Projects cheked={(activePage === "Projects").toString()} />
        <Contacts cheked={(activePage === "Contacts").toString()} />
      </section>
    </main>
  )

}
export default Main

