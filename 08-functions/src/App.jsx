import React from 'react'

const App = () => {

  function btnCLicked(){
    console.log("Button Clicked");
  }

  function mouseEntered(){
    console.log("Mouse Entered");
  }
  return (
    <div>
      <h1>Hello, Aaditya</h1>
      <button onClick={btnCLicked} onMouseEnter={mouseEntered}>Change User</button>
    </div>
  )
}

export default App