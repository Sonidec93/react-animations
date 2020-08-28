import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';


const modal = (props) => {

    const animationTiming = {
        enter: 400,
        exit: 1000
    }

    return (
        <Transition in={props.showModal} timeout={animationTiming} mountOnEnter unmountOnExit onEnter={() => { console.log('on Enter') }} onEntering={() => {
            console.log('on Entering')
        }} onEntered={() => { console.log('Entered') }}
            onExit={() => { console.log('Exit') }} onExited={() => { console.log('Exited') }}
            onExiting={() => { console.log('Exiting') }}>
            {state => {
                let classes = ['Modal', state === 'entering' || state === 'entered' ? 'open' : state === 'exiting' || state === 'exited' ? 'close' : null]
                // <CSSTransition  in={props.showModal} classNames={
                //     {
                //         enter: 'open',
                //         enterActive: 'open',
                //         enterDone: 'open',
                //         appear: 'open',
                //         appearActive: 'open',
                //         appearDone: 'close',
                //         exitActive: 'close',
                //         exit: 'close',
                //         exitDone: 'close'

                //     }}

                return (<div className={classes.join(' ')}>
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closeModal}>Dismiss</button>
                </div>)
                // </CSSTransition>
            }}

        </Transition>
    );
};

export default modal;