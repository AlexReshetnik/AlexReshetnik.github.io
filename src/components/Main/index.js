import './style.css';

import Introduction from '../Articles/Introduction';
import Skills from '../Articles/Skills';
import Projects from '../Articles/Projects';
import Contacts from '../Articles/Contacts';

function handlerLoad(e) {
  if (e.type == "load") {
    let aside = document.querySelector('aside')
    let main = document.querySelector('main')
    let styleAside = getComputedStyle(aside)
    if (document.body.clientWidth > 768) {
      main.style.marginLeft = styleAside.width
    }
    window.onresize = (e) => {
      styleAside = getComputedStyle(aside)

      if (document.body.clientWidth > 768) {

        main.style.marginLeft = styleAside.width
      } else {
        main.style.marginLeft = "0px"
      }
    }
  }
}

export default function Main() {
  return (
    <main onLoad={handlerLoad} >
      <section>
        <Introduction />
        <Skills />
        <Projects />
        <Contacts />
      </section>
    </main>
  );
}


