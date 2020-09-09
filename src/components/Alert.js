import React from 'react';
import './Alert.scss';

export default function Alert(props) {
  return(
    <div className="alert">
      <h1 className="alert__header">Alert!</h1>
        <p className="alert__text">{props.alertMsg}</p>
    </div>
  )
};