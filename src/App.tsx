import { useState, useEffect } from 'react'

import './App.css'

import Menu from './components/Menu/Menu';
import Link from './components/Link/Link';
import SideBySide from './components/SideBySide/SideBySide';

import Twitter from './components/Twitter';
import Discord from './components/Discord';
import Medium from './components/Medium';

// import phunk from './assets/phunk0939.svg'
// import Video from './assets/phunks-intro-vid.mp4'
import NllLogo from './assets/nll-logo.svg'
import AuctionHouseLogo from './assets/auction-logo.svg'
import FlyWheelLogo from './assets/flywheel-logo.png'
import KnowledgeBaseLogo from './assets/phunk-knowledge-logo.jpeg'

import Button from './components/Button/Button';

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

const phunkIpfsBaseUrl = 'https://middlemarch.mypinata.cloud/ipfs/QmcvdPd7Jai74e595Mgx2u6D8QZZ1TGSFC2EQQNayQVJL8/';
const phunksToShow = 8;

function App() {
  const [phunks, setPhunks] = useState<number[]>([])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAdjIndex(prev => {
  //       const next = (prev + 1)

  //       if (next === adjectives.length) {
  //         return 0;
  //       } else {
  //         return (prev + 1)
  //       }
  //     })
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const phunkList = []
    for (let i = 0; i < phunksToShow; i++) {
      phunkList.push(getRandomInt(10000))
    }
    setPhunks(phunkList)
  }, [])

  return (
    <>
      <section className="section is-medium no-bottom-padding">
        <div className="phunk-intro has-text-centered">
          <h1 className="mb-6">CRYPTOPHUNKS</h1>
          <h2 className="large-title">Be free, be Phunky</h2>
        </div>
      </section>

      <section className="section is-medium no-bottom-padding">
        <div className="columns is-multiline is-mobile">
          {phunks.map((phunk, idx) => {
            return (
              <div key={`phunk-image-${idx}`} className="column is-one-quarter">
                <img src={`${phunkIpfsBaseUrl}${phunk}.png`} alt="" />
              </div>
            )
          })}
        </div>
      </section>

      <section className="section is-medium no-bottom-padding">
        <div className="columns is-centered">
          <div className="column is-half has-text-centered">
            <div className='block has-text-white mb-6 is-size-4'>
              Phunks are free-use, public domain Art, run entirely by decentralized community of artist and builders.
            </div>

            <div className='block has-text-white mb-6 is-size-4'>
              There are no Devs, no Leaders, no Roadmaps, just Phunk Pham building cool stuff cause they care about
              Web3 and decentralization. ✊
            </div>

            <div className='block has-text-white mb-6 is-size-4'>
              You can buy a Phunk at <Link
                url="https://notlarvalabs.com/"
                title="Not Larva Labs"
              /> or the <Link
                url="https://phunks.auction/"
                title="Auction House"
              /> with 0% fees!

              You can learn more about Phunks at the <Link
                url="https://phunks.gitbook.io/"
                title="Knowledge Base"
              />.
            </div>

            <div className="block">
              <Button
                link="https://notlarvalabs.com/"
                text="buy a phunk"
                wide={true}
              />
            </div>
            <div className="block social-block">
              <div className='level is-mobile'>
                <div className="level-item">
                  <a href="https://twitter.com/CryptoPhunksV2" target="_blank" rel="noopener noreferrer" className='social-link'>
                    <Twitter />
                  </a>
                </div>
                <div className="level-item">
                  <a href="http://discord.gg/phunks" target="_blank" rel="noopener noreferrer" className='social-link'>
                    <Discord />
                  </a>
                </div>
                <div className="level-item">
                  <a href="https://eggphunk.medium.com/" target="_blank" rel="noopener noreferrer" className='social-link'>
                    <Medium />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <h2 className="large-title mb-6">Phunky Projects</h2>

        <div className="columns side-by-side reverse-cols">
          <div className="column side-by-side-col side-by-side-col--image">
            <img src={NllLogo} alt="" />
          </div>
          <div className="column side-by-side-col">
            <h3 className='has-text-white is-size-2'>Not Larva Labs</h3>
            <div className='block has-text-white is-size-4'>
              NotLarvaLabs (NLL) is a community-built royalty-free Marketplace for buying and
              selling CryptoPhunks, built on top of it's own custom smart contract with 0% trading fees.
            </div>
            <div className='block has-text-white is-size-4'>
              The idea came to life after two Big Corporations (LarvaLabs and OpenSea) decided to censor CryptoPhunks.
            </div>
            <Button
              link="https://notlarvalabs.com/"
              text="visit"
            />
          </div>
        </div>

        <div className="columns side-by-side">
          <div className="column side-by-side-col side-by-side-col--image">
            <img className='auction-image' src={AuctionHouseLogo} alt="" />
          </div>
          <div className="column side-by-side-col">
            <h3 className='has-text-white is-size-2'>CryptoPhunks Auction House</h3>
            <div className='block has-text-white is-size-4'>
              CryptoPhunks Auction House was built by Chopper and Kenobi with the purpose of facilitating perpetual
              auctions for CryptoPhunks held in the Treasury Vault.
            </div>
            <div className='block has-text-white is-size-4'>
              All Ethereum collected from settled auctions will
              remain in the treasury under direction of the community.
            </div>
            <Button
              link="https://phunks.auction/"
              text="visit"
            />
          </div>
        </div>

        <div className="columns side-by-side reverse-cols">
          <div className="column side-by-side-col side-by-side-col--image">
            <img className='flywheel-image' src={FlyWheelLogo} alt="" />
          </div>
          <div className="column side-by-side-col">
            <h3 className='has-text-white is-size-2'>FlyWheel</h3>
            <div className='block has-text-white is-size-4'>
              The FlyWheel is a DAPP that appraises mid- and top-tier CryptoPhunks and gives holders the option
              to sell them to the Treasury at a small discount to fair market value in a trustless, fair, and automatic way.
            </div>
            <Button
              link="https://www.phunks.pro/"
              text="visit"
            />
          </div>
        </div>

        <div className="columns side-by-side">
          <div className="column side-by-side-col side-by-side-col--image">
            <img className='flywheel-image' src={KnowledgeBaseLogo} alt="" />
          </div>
          <div className="column side-by-side-col">
            <h3 className='has-text-white is-size-2'>Phunks Knowledge Base</h3>
            <div className='block has-text-white is-size-4'>
              The museum of all things Phunky! Take a deep dive into the history of the phunks.
            </div>
            <Button
              link="https://phunks.gitbook.io/"
              text="visit"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
