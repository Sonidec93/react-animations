import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from 'react-transition-group';

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false
  }

  closeModal = () => {
    this.setState((prevState, props) => {
      return {
        isModalOpen: false
      }
    })
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  toggleBlock = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleBlock} >Toggle</button>
        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
          {(state) => (<div
            style={{
              backgroundColor: 'red',
              height: '100px', width: '100px', margin: '10px auto',
              border: 'solid 1px black',
              transition: 'opacity 0.3s ease-out',
              opacity: (state === 'entering' || state === 'entered') ? 1 : 0
            }} >Hi</div>)}
        </Transition>
        <Modal showModal={this.state.isModalOpen} closeModal={this.closeModal} />
        <Backdrop showbackdrop={this.state.isModalOpen} />
        <button className="Button" onClick={this.openModal} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
