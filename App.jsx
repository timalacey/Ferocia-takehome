import React from 'react';
import calculateTermDepositReturn from './src/calculateTermDepositReturn.js'

const INPUTS = {
  "P": { defaultValue: 10000, min: 1, max: 10 ** 20 },
  "r": { defaultValue: 1.1, min: 0, max: 15 },
  "n": { defaultValue: 0, min: 0, max: 12 },
  "t": { defaultValue: 36, min: 0, max: 720 },
};

export default function App() {
  const [error, setError] = React.useState('');
  const [state, setState] = React.useState({
    P: INPUTS.P.defaultValue,
  })

  function onFieldChange(event) {
    if (!event.target.value ||
      event.target.value < INPUTS[event.target.name].min ||
      event.target.value > INPUTS[event.target.name].max) {
      setError(`${event.target.name} must be between ${INPUTS[event.target.name].min} and ${INPUTS[event.target.name].max}.`);
      return;
    }

    setError('');
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const finalBalance = calculateTermDepositReturn(state.P, INPUTS.r.defaultValue, INPUTS.n.defaultValue, INPUTS.t.defaultValue);

  return (
    <>
      <h1>Tim Lacey's Term Deposit Calculator for Ferocia</h1>
      <form onChange={onFieldChange} >
        <label>$</label>
        <input
          defaultValue={state.P}
          max={INPUTS.P.max}
          min={INPUTS.P.min}
          name="P"
          type="number"
        />
        <label> in a Term Depsosit at {INPUTS.r.defaultValue}%</label>
        <label> paid {(INPUTS.n.defaultValue > 0) ? `${INPUTS.n.defaultValue} times per year`: 'at maturity'}</label>
        <label> for {INPUTS.t.defaultValue} months</label>
        <br />
        <br />
      </form>
      {error && <label>{error}</label>}
      {(!error && finalBalance > 0) && <label>
        will return {finalBalance.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}
      </label>
      }
    </>
  )
}