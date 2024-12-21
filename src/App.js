import React, { useState } from "react";

function App(){
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const takeoff = () => setCount(0)

  if (count < 0) {
    alert("Nooooooooooooooooooooooooo!")
    takeoff();
  }

  return (
  <div style = {styles.container}>
    <h1 style = {styles.heading}>clicker</h1>
    <p style = {styles.counter}>Clicks: {count}</p>
    <div>
      <button style={styles.buttons} onClick={increase}>Increase</button>
      <button style={styles.buttons} onClick={decrease}>Decrease</button>
      <button style={styles.buttons} onClick={takeoff}>Take off</button>
    </div>
  </div>
);
}

//Прості стилі
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  heading: {
    color: "#ff0000"
  },
  counter: {
    fontSize: "30px"
  },
  buttons: {
    padding: "10px 20px",
    margin: "5px"
  }
}


export default App;
