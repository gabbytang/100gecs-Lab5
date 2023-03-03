import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount} from './counterSlice'; //import styles from ' ./Counter. module.css'
import TextField from '@mui/material/TextField';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = React.useState('');

  const handleIncrementAmount = event => {
    setIncrementAmount(event.target.value);
  };

  return (
    <div>
      <TextField
        aria-label="Increment value"
        value={incrementAmount}
        onChange={handleIncrementAmount}
      />
      <button
        onClick={() => dispatch(incrementByAmount(parseInt(incrementAmount)))}
      >
        Submit
      </button>
      <span>{count}</span>
    </div>
  );
}
