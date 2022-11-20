import React, { Component } from 'react';
import Aside from './Aside';
import Main from './Main';
import './style.css';


class App extends Component {

  componentDidMount() {
    let main = document.querySelector('main')
    let aside = document.querySelector('aside')

    if (document.body.clientWidth > 768) {
      main.style.marginLeft = getComputedStyle(aside).width
    }
    window.onresize = (e) => {
      if (document.body.clientWidth > 768) {
        main.style.marginLeft = getComputedStyle(aside).width
      } else {
        main.style.marginLeft = "0px"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Aside />
        <Main />
      </div>
    )
  }
}

export default App
