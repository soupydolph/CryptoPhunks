import { useState, useEffect } from 'react'
import phunk from './assets/phunk0939.svg'
import 'normalize.css';
import './App.css'

import Menu from './components/Menu/Menu';
import Link from './components/Link/Link';
import SideBySide from './components/SideBySide/SideBySide';

import Twitter from './components/Twitter';
import Discord from './components/Discord';
import Medium from './components/Medium';

import Video from './assets/phunks-intro-vid.mp4'
import NllLogo from './assets/nll-logo.svg'

const adjectives = [
  'innovators',
  'artists',
  'developers',
  'builders',
  'visionaries',
  'decentralized',
  'phree',
  'phunky'
]

function App() {
  const [adjIndex, setAdjIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setAdjIndex(prev => {
        const next = (prev + 1)

        if (next === adjectives.length) {
          return 0;
        } else {
          return (prev + 1)
        }
      })
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        {/* Row 1: Top bar */}
        <div className="row__top-bar">
          <h1 className="phunkTitle phunk-gradient">CRYPTOPHUNKS</h1>
          <Menu />
        </div>

        {/* Row 2: Intro */}
        <div className='row__intro__text-container'>
          <h3 className="title">We are <span className="phunk-gradient">{adjectives[adjIndex]}</span></h3>
          <p>
            Phunks are free-use, public domain Art, run entirely by decentralized community of artist and builders.
          </p>
          <p>
            There are no Devs, no Leaders, no Roadmaps, just Phunk Pham building cool stuff cause they care about Web3 and decentralization. ✊
          </p>
          <p>
            You can learn more about Phunks at the <Link url="https://phunks.gitbook.io/" title="Knowledge Base" />
          </p>
          <p>
            You can buy a Phunk at <Link url="https://notlarvalabs.com/" title="Not Larva Labs" /> or the <Link url="https://phunks.auction/" title="Auction House" /> for 0% fees!
          </p>
          <div className="phunkySocial">
            <a href="https://twitter.com/CryptoPhunksV2" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="http://discord.gg/phunks" target="_blank" rel="noopener noreferrer">
              <Discord />
            </a>
            <a href="https://eggphunk.medium.com/" target="_blank" rel="noopener noreferrer">
              <Medium />
            </a>
          </div>
        </div>
        <div className='row__intro__phunk-container'>
          <img src={phunk} className="phunk" alt="Phunky" />
        </div>

        {/* Row 3: Video explainer */}
        {/* <div className="row__video__player">
          <video controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="row__video__text">
          <div>
            <h3 className="title">So, what happened?</h3>
            <p>
              CryptoPhunks (Phunks) is a Non-Fungible Token (NFT) collection on the Ethereum blockchain.
            </p>
            <p>
              The project was created in June 2021 by a group of anonymous* developers to poke fun (parody) at the high-brow, pompous group of people that were reflecting the “old-school” rules of art into this new frontier of Web3.
            </p>
            <p>
              What they did is they took all 10'000 CryptoPunks and flipped them the other way, they are the same 1:1 just facing Left.
            </p>
          </div>
        </div> */}
      </div>

      <SideBySide
        title="NotLarvaLabs"
        link=""
        image={NllLogo}
        text="
          NotLarvaLabs (NLL) is a community built royalty-free Marketplace for buying and selling CryptoPhunks, built on top of it's own custom smart contract with 0% trading fees.
          Idea came to life after two Big Corporations (LarvaLabs and OpenSea) decided to censor CryptoPhunks.
        "
        reverse={false}
      />

      <SideBySide
        title="NotLarvaLabs"
        link=""
        image={NllLogo}
        text="
          NotLarvaLabs (NLL) is a community built royalty-free Marketplace for buying and selling CryptoPhunks, built on top of it's own custom smart contract with 0% trading fees.
          Idea came to life after two Big Corporations (LarvaLabs and OpenSea) decided to censor CryptoPhunks.
        "
        reverse={true}
      />

      {/* Row 4: Project - */}
      {/* <div className='row__side-to-side--left'>
        <h3 className="title">NotLarvaLabs</h3>
        <p>
          NotLarvaLabs (NLL) is a community built royalty-free Marketplace for buying and selling CryptoPhunks, built on top of it's own custom smart contract with 0% trading fees.
          Idea came to life after two Big Corporations (LarvaLabs and OpenSea) decided to censor CryptoPhunks. Coined and designed by Pauly & Ryder Ripps somewhere in LA and developed by Chopper and Kenobi somewhere in NA, NLL quickly gained a lot of attention in NFT world and flipped the script.
          NLL developers decided to open-source the code and renounce the ownership, this means that Phunks Marketplace (backend) operates autonomously on Ethereum blockchain forever.
        </p>
        <button>Visit</button>
      </div> */}
      {/* <div className='row__side-to-side--right'>
        <img src={NllImage} alt="" />
      </div> */}
    </div>
  )
}

export default App
