import React from 'react';

import './Modal.css';

const modal = (props) => {
    let classes = ['Modal', props.showModal ? 'open' : 'close']

    return (
        <div className={classes.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closeModal}>Dismiss</button>
        </div>);
};

export default modal;