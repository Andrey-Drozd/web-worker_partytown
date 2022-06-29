import './Component1.scss'

import React, { useEffect, useState } from 'react'

interface IState {
  result: string
  value: number
}

function Component1() {
  const [state, setState] = useState<IState>({
    result: '--',
    value: 0
  })

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    setState((prevState) => {
      return {
        ...prevState,
        result: 'processing'
      }
    })

    window.fibonacci(state.value)
  }

  const onChange = (e: { target: { value: string } }) => {
    setState((prevState) => {
      return {
        ...prevState,
        value: +e.target.value
      }
    })
  }

  const storageHandler = () => {
    const currentValue = localStorage.getItem('fibonacci')

    setState((prevState) => {
      return {
        ...prevState,
        result: currentValue || '--'
      }
    })
  }

  useEffect(() => {
    window.addEventListener('storage', storageHandler)

    return () => window.removeEventListener('storage', storageHandler)
  }, [])

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
