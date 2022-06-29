import './Component1.scss'

import React, { useState } from 'react'

function Component1() {
  const [state, setState] = useState({
    result: '--',
    value: 0
  })

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  const onChange = (e: { target: { value: string } }) => {
    setState((prevState) => {
      return {
        ...prevState,
        value: +e.target.value
      }
    })
  }

  return (
    <form onSubmit={onSubmit} id="form">
      <p>
        <label htmlFor="number">
          <span>Fibonacci: </span>
          <input
            type="text"
            id="number"
            placeholder="enter number"
            value={state.value}
            onChange={onChange}
          />
        </label>
      </p>
      <p>
        <label htmlFor="result">
          <span>Result: </span>
          <input type="text" id="result" placeholder={state.result} disabled />
        </label>
      </p>
      <button type="submit">Calculate</button>
    </form>
  )
}

export { Component1 }
