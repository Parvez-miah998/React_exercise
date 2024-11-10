import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function incrementAs() {
    setIncrementBy(incrementBy + 1);
  }
  function decerementAs() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>Count The Button Click: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>Increment the numberof button click: {incrementBy}</h1>
      <button onClick={incrementAs}>Increment Incrementby</button>
      <button onClick={decerementAs}>Decerement IncrementBy</button>
    </div>
  );
}
