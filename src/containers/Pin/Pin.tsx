import React from 'react';
import './Pin.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {addNum} from './pinSlice';

const Pin = () => {
  const value = useSelector((state: RootState) => state.pin.value);
  const dispatch = useDispatch();
  const secretNumber = '*'.repeat(value.length);
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];


  return (
    <div className="pin">
      <div className="pin-wrapper">
        <div className="pin-window">
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
          <button className="pin-btn">{'<'}</button>
          <button className="pin-btn">E</button>
        </div>
      </div>
    </div>
  );
};

export default Pin;