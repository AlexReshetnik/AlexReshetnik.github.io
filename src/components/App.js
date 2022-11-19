import React, { Component } from 'react';
import Aside from './Aside';
import Main from './Main';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);

    // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let main = document.querySelector('main')
    let aside = document.querySelector('aside')


    if (document.body.clientWidth > 768) {
      main.style.marginLeft = getComputedStyle(aside).width
    }
    window.onresize = (e) => {
      if (document.body.clientWidth > 768) {
        console.log(document.body.clientWidth);
        main.style.marginLeft = getComputedStyle(aside).width
      } else {
        main.style.marginLeft = "0px"
      }
    }
  }
  handleClick() {
    console.log("onClick Aside");
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        <Aside />
        <Main />
      </div>
    )
  }
}
export default App
