import React from 'react'
import { useToggle } from './hooks/useToggle'

const App = () => {
  const [isVisible,toggle]=useToggle()

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide":"Show" }

      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App