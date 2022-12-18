import { useState, useEffect } from 'react'

import './App.css'

import Link from './components/Link/Link';
import Provenance from './components/Provenance/Provenance';

import Twitter from './components/Twitter';
import Discord from './components/Discord';
import Medium from './components/Medium';

// import phunk from './assets/phunk0939.svg'
// import Video from './assets/phunks-intro-vid.mp4'
import NllLogo from './assets/nll-logo.svg'
import AuctionHouseLogo from './assets/auction-logo.svg'
import FlyWheelLogo from './assets/new-flywheel-logo.png'
import KnowledgeBaseLogo from './assets/phunk-knowledge-logo.jpeg'

import v1phunk from './assets/v1phunk.png'
import v2phunk from './assets/v2phunk.png'
import v3phunk from './assets/v3-phunk.png'

import Button from './components/Button/Button';

// const adjectives = [
//   'innovators',
//   'artists',
//   'developers',
//   'builders',
//   'visionaries',
//   'decentralized',
//   'phree',
//   'phunky'
// ]

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

  const year = new Date().getFullYear()

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
      <section className="container mx-auto">
        <div className="phunk-intro m-6 lg:m-24">
          <h1 className="font-display text-3xl md:text-6xl text-center text-primary my-7 md:my-24">CRYPTOPHUNKS</h1>
          <h2 className="font-body text-2xl md:text-5xl text-center text-slate-50 my-7 md:my-14">Be free, be Phunky</h2>
        </div>
      </section>

      <section className="container mx-auto my-28">
        <div className="grid grid-cols-4 gap-4">
          {phunks.map((phunk, idx) => {
            return (
              <div key={`phunk-image-${idx}`}>
                <img className='aspect-square' src={`${phunkIpfsBaseUrl}${phunk}.png`} alt="" />
              </div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto font-light my-28">
        <div className='w-3/4 mx-auto'>
          <p className='text-2xl text-slate-50 text-center my-14'>
            Phunks are free-use, public domain Art, run entirely by decentralized community of artist and builders.
          </p>

          <p className='text-2xl text-slate-50 text-center my-14'>
            There are no Devs, no Leaders, no Roadmaps, just Phunk Pham building cool stuff cause they care about
            Web3 and decentralization. ✊
          </p>

          <p className='text-2xl text-slate-50 text-center mb-24'>
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
          </p>
        </div>

        <Button
          link="https://notlarvalabs.com/"
          text="buy a phunk"
          autoMargin={true}
        />

        <div className="flex flex-row justify-center">
          <div className="basis-10 m-8 md:m-16">
            <a href="https://twitter.com/CryptoPhunksV2" target="_blank" rel="noopener noreferrer" className='social-link'>
              <Twitter />
            </a>
          </div>
          <div className="basis-10 m-8 md:m-16">
            <a href="http://discord.gg/phunks" target="_blank" rel="noopener noreferrer" className='social-link'>
              <Discord />
            </a>
          </div>
          <div className="basis-10 m-8 md:m-16">
            <a href="https://eggphunk.medium.com/" target="_blank" rel="noopener noreferrer" className='social-link'>
              <Medium />
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="font-body text-4xl md:text-6xl text-center text-slate-50 my-7 md:my-14">Phunky Projects</h2>

        <div className="flex flex-col md:flex-row m-5 my-32 items-center">
          <div className="flex flex-row content-center justify-items-center basis-1/2 my-14">
            <img className='mx-auto h-64' src={NllLogo} alt="" />
          </div>
          <div className="basis-1/2 flex flex-col justify-start content-center text-slate-50">
            <h3 className="font-body text-2xl md:text-4xl md:my-7">Not Larva Labs</h3>
            <p className='text-xl my-3'>
              NotLarvaLabs (NLL) is a community-built royalty-free Marketplace for buying and
              selling CryptoPhunks, built on top of it's own custom smart contract with 0% trading fees.
            </p>
            <p className='text-xl mb-10'>
              The idea came to life after two Big Corporations (LarvaLabs and OpenSea) decided to censor CryptoPhunks.
            </p>
            <Button
              link="https://notlarvalabs.com/"
              text="visit"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse m-5 my-32 items-center">
          <div className="flex flex-row content-center justify-items-center basis-1/2 my-14">
            <img className='mx-auto h-32' src={AuctionHouseLogo} alt="" />
          </div>
          <div className="basis-1/2 flex flex-col justify-start content-center text-slate-50">
            <h3 className="font-body text-2xl md:text-4xl md:my-7">CryptoPhunks Auction House</h3>
            <p className='text-xl my-3'>
              CryptoPhunks Auction House was built by Chopper and Kenobi with the purpose of facilitating perpetual
              auctions for CryptoPhunks held in the Treasury Vault.
            </p>
            <p className='text-xl mb-10'>
              All Ethereum collected from settled auctions will remain in the treasury under direction of the community.
            </p>
            <Button
              link="https://phunks.auction/"
              text="visit"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row m-5 my-32 items-center">
          <div className="flex flex-row content-center justify-items-center basis-1/2 my-14">
            <img className='mx-auto h-48' src={FlyWheelLogo} alt="" />
          </div>
          <div className="basis-1/2 flex flex-col justify-start content-center text-slate-50">
            <h3 className="font-body text-2xl md:text-4xl md:my-7">FlyWheel</h3>
            <p className='text-xl mb-10'>
              The FlyWheel is a DAPP that appraises mid- and top-tier CryptoPhunks and gives holders the option
              to sell them to the Treasury at a small discount to fair market value in a trustless, fair, and automatic way.
            </p>
            <Button
              link="https://www.phunks.pro/"
              text="visit"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse m-5 my-32 items-center">
          <div className="flex flex-row content-center justify-items-center basis-1/2 my-14">
            <img className='mx-auto md:h-96' src={KnowledgeBaseLogo} alt="" />
          </div>
          <div className="basis-1/2 flex flex-col justify-start content-center text-slate-50">
            <h3 className="font-body text-2xl md:text-4xl md:my-7">Phunks Knowledge Base</h3>
            <p className='text-xl mb-10'>
              The museum of all things Phunky! Take a deep dive into the history of the phunks.
            </p>
            <Button
              link="https://phunks.gitbook.io/"
              text="visit"
            />
          </div>
        </div>
      </section>

      <section className='container mx-auto'>
        <h2 className="font-body text-4xl md:text-6xl text-center text-slate-50 my-7 md:my-14">Phunky Provenance</h2>
        <Provenance
          flipped={false}
          title="V1"
          caption="The Original"
          image={v1phunk}
          lr="https://looksrare.org/collections/0x3ceB6868BfBf99F6b76FE5bB37343C075677C698"
          os="https://opensea.io/collection/official-v1-phunks"
          es="https://etherscan.io/address/0xA82F3a61F002F83Eba7D184c50bB2a8B359cA1cE"
        />
        <Provenance
          flipped={true}
          title="V2"
          caption="The Legend"
          image={v2phunk}
          lr="https://looksrare.org/collections/0xf07468eAd8cf26c752C676E43C814FEe9c8CF402?queryID=643b3f824b2b84a4737c26a0a5720ff5"
          os="https://opensea.io/collection/crypto-phunks"
          es="https://etherscan.io/address/0xf07468eAd8cf26c752C676E43C814FEe9c8CF402"
        />
        <Provenance
          flipped={false}
          title="V3"
          caption="The Evolution"
          image={v3phunk}
          lr="https://looksrare.org/collections/0xb7D405BEE01C70A9577316C1B9C2505F146e8842"
          os="https://opensea.io/collection/v3phunks"
          es="https://etherscan.io/address/0xb7d405bee01c70a9577316c1b9c2505f146e8842"
          isLast={true}
        />
      </section>
      <section className='container mx-auto'>
        <p className="text-2xl text-slate-50 text-center">Built by <Link
          url="https://twitter.com/soupydolph"
          title="soupy"
        />
        </p>
        <p className="text-2xl text-slate-50 text-center">
          © {year}
        </p>
      </section>
    </>
  )
}

export default App
