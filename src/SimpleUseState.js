import React, { useState } from "react";
const initialState = 0;
function SimpleUseState() {
  const [count, setCount] = useState(initialState);
  let clickBtn = {
    color: "#fff",
    background: "green",
    border: "none",
    height: "30px",
    width: "100px",
    cursor: "pointer"
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button
        style={clickBtn}
        onClick={() => setCount(preState => preState + 1)}
      >
        Click
      </button>
    </div>
  );
}

export default SimpleUseState;
