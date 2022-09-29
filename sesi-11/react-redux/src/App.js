import "./App.css";
import CounterClass from "./features/counter/CounterClass";
import CounterFn from "./features/counter/CounterFn";
import React from "react";

function App() {
  return (
    <div>
      <CounterFn />
      <CounterClass />
    </div>
  );
}

export default App;
