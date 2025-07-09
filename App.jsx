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
    r: INPUTS.r.defaultValue,
    n: INPUTS.n.defaultValue,
    t: INPUTS.t.defaultValue,
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
  
  //TODO if `error` is truthy, we don't need to calculate finalBalance
  const finalBalance = calculateTermDepositReturn(state.P, state.r, state.n, state.t);

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
        <label> in a Term Depsosit</label>
        <br />
        <label>at an interest rate of </label>
        <input
          defaultValue={state.r}
          max={INPUTS.r.max}
          min={INPUTS.r.min}
          name="r"
          type="number"
        />
        <label>% per annum</label>
        <br />
        <label>paid </label>
        <input
          defaultValue={state.n}
          max={INPUTS.n.max}
          min={INPUTS.n.min}
          name="n"
          type="number"
        />
        <label> {(state.n > 0) ? ' times per year' : ' at maturity'}</label>
        <br />
        <label>over </label>
        <input
          defaultValue={state.t}
          max={INPUTS.t.max}
          min={INPUTS.t.min}
          name="t"
          type="number"
        />
        <label> months</label>
        <br />
        <br />
      </form>
      {error && <label>{error}</label>}
      {!error && finalBalance > 0 && <label>
        will return {finalBalance.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}
      </label>
      }
    </>
  )
}