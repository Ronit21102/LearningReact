import React, { useContext } from "react";
import Counter from "../components/Counter";
import { CounterContext } from "../context/CounterContext";

function App() {
  const { count } = useContext(CounterContext); 
  console.log(count);
  
  return (
    <>
      <h1>Count: {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
