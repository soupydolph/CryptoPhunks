import { useState } from 'react'
import phunk from './assets/phunk0939.svg'
import 'normalize.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className="wrapper">
        <div className="topBar">
          <h1 className="phunkTitle">CRYPTOPHUNKS</h1>
          <menu className="menu">
            <p>About</p>
            <p>Projects</p>
            <p>History</p>
          </menu>
        </div>



        <div className='intro-text-container'>
          <h3>We are <span>innovators</span></h3>
          <p>
            Phunks are free-use, public domain Art, run entirely by decentralized community of artist and builders. There are no Devs, no Leaders, no Roadmaps, just Phunk Pham building cool stuff cause they care about Web3 and decentralization. ✊
          </p>
        </div>
        <div className='intro-phunk-container'>
          <img src={phunk} className="logo react" alt="React logo" />
        </div>
      </div>
    </div>
  )
}

export default App
