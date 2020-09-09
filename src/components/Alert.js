import React from 'react';
import { useSelector } from 'react-redux';
import './Alert.scss';

export default function Alert(props) {
  const alertRise = useSelector(state => state.alertRise);

  return (
    <div className={`alert ${alertRise ? 'alert-rise' : null}`}>
      <h1 className="alert__header">Alert!</h1>
      <p className="alert__text">{props.alertMsg}</p>
    </div>
  )
};