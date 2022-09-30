import React from 'react'
import logo from '../../assets/images/landing-page.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-around p-7 bg-secondaryPurpleLight h-screen font-sans'>
      <div className="flex flex-col items-center gap-4">
        <div className='relative'>
          <h1 className="font-bold text-[36px] leading-[4.5rem] text-center text-primaryVeryDark font-sans">
            Imagine if<br />
            had events.
          </h1>
          <h1 className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryMid to-primaryLight text-[36px] leading-[41px] text-center'>Snapchat</h1>
        </div>
        <h2 className="text-center text-base text-darkGray">
          Easily host and share events with your friends across any social media.
        </h2>
      </div>
      <div className="image-wrapper px-14 rounded-xl drop-shadow-[0px_0px_17px_rgba(0,0,0,0.05)]">
        <img src={logo} alt="" />
      </div>
      <div className="button-wrapper">
        <Link to='/create'>
          <Button>Create my event</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home