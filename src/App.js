import React from "react";
import "./style.css";
import SimpleUseState from "./SimpleUseState";
import UseStateWithArray from "./UseStateWithArray";
import UseStateWithObject from "./UseStateWithObject";
export default function App() {
  return (
    <div
      style={{
        border: "1px solid #000222",
        padding: "20px"
      }}
    >
      <h2> Simple Use State Example</h2>
      <SimpleUseState />
      <h2> Complex Use State Example</h2>
      <UseStateWithObject />
      <UseStateWithArray />
    </div>
  );
}
