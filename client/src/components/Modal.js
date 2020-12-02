import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {
  return ReactDom.createPortal(
    <div className="ui dimmer modals visable active">
      <div className="ui standard modal visable active">
        lorem ipsum lorem ipsum lorem ipsum
      </div>
    </div>
    ,document.querySelector('#modal'));
};

export default Modal;
