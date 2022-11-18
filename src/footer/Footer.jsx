import { useState } from 'react'

const Footer =()=> {
  const [count, setCount] = useState(0)

  return (
    <div className="footer">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/images/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src='/images/react.svg' className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default Footer
