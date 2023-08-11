import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterrAction'

export default function Counter() {
    // const [count, setCount] = useState(0)

    // const count = useSelector(state => console.log(state))
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    // console.log(count)
    const handleIncrement = () => {
        // setCount( () => count + 1)
        dispatch(incrementCounter())
    }
    const handleReset = () => {
        // setCount( () => count + 1)
        dispatch(resetCounter())
    }
    const handleDecrement = () => {
        // setCount( () => count + 1)
        dispatch(decrementCounter())
    }

  return (
    <div>
      <h1>Counter App</h1>

      {/* <h3>Count: {count}</h3> */}
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

// step-1:  state = count : 0
//  step-2: actions = increment, decrement, reset
//  step-3: 
// reducers = increment, => count + 1
// reducers = deccrement, => count - 1
// reducers = reset, => count = 0

// step-4: 
//  store
