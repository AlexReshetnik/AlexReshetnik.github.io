import './style.css';

import Introduction from '../Articles/Introduction';
import Skills from '../Articles/Skills';
import Projects from '../Articles/Projects';
import Contacts from '../Articles/Contacts';
import React, { Component } from 'react';


class Main extends Component {
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount(e) {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <main>
        <section>
          <Introduction />
          <Skills />
          <Projects />
          <Contacts />
        </section>
      </main>
    )
  }
}
export default Main;

