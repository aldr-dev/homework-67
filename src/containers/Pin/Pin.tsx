import React from 'react';
import './Pin.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {addNum, deleteNum, borderColor, messageInfo, resetValue} from './pinSlice';

const Pin = () => {
  const value: string = useSelector((state: RootState) => state.pin.value);
  const color: string = useSelector((state: RootState) => state.pin.color);
  const text: string = useSelector((state: RootState) => state.pin.text);
  const dispatch = useDispatch<AppDispatch>();
  const pinCode = '1337';
  const secretNumber = '*'.repeat(value.length);
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

  const handleReset = () => {
    dispatch(messageInfo(''));
    dispatch(borderColor('ok'));
    dispatch(resetValue());
  };

  const handleEnter = () => {
    if (pinCode === value) {
      dispatch(messageInfo('Access Granted'));
      dispatch(borderColor('success'));
    }
    else {
      dispatch(messageInfo('Access Denied'));
      dispatch(borderColor('error'));
    }
  };

  return (
    <div className="pin">
      <div className="pin-wrapper">
        <div className="pin-message-inner">
          <p>{text}</p>
        </div>
        <div className={`pin-window ${color ? color : 'pin-window'}`}>
          {secretNumber}
        </div>
        <div className="pin-wrapper-btn">
          {numbers.map((number) => (
            <button
              key={number}
              className="pin-btn"
              onClick={() => dispatch(addNum(number))}
              type="button">
              {number}
            </button>
          ))}
          <button onClick={() => dispatch(deleteNum())} className="pin-btn">{'<'}</button>
          <button onClick={() => handleReset()} className="pin-btn">Reset</button>
          <button onClick={() => handleEnter()} className="pin-btn">E</button>
        </div>
      </div>
    </div>
  );
};

export default Pin;