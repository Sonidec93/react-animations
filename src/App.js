import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false
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

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
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
