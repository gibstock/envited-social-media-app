import React from 'react'
import logo from '../../assets/images/landing-page.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-around p-7 bg-secondaryPurpleLight font-sans lg:h-full lg:grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr_2fr_2fr] lg:justify-items-center lg:p-0'>
      <div className="flex flex-col items-center gap-4 md:gap-0 md:mb-8 lg:row-start-2 lg:self-end">
        <div className='relative'>
          <h1 className="font-bold text-[36px] leading-[4.5rem] text-center text-primaryVeryDark font-sans md:text-7xl md:leading-[9rem]">
            Imagine if<br />
            had events.
          </h1>
          <h1 className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryMid to-primaryLight text-[36px] leading-[41px] text-center md:text-7xl'>Snapchat</h1>
        </div>
        <h2 className="text-center text-base text-darkGray md:text-2xl md:w-2/3">
          Easily host and share events with your friends across any social media.
        </h2>
      </div>
      <div className="image-wrapper px-14 rounded-xl drop-shadow-[0px_0px_17px_rgba(0,0,0,0.05)] md:max-w-xs md:p-0 lg:col-start-1 lg:row-start-1 lg:row-span-3">
        <img src={logo} alt="" />
      </div>
      <div className="button-wrapper md:w-80 lg:row-start-3 lg:self-start">
        <Link to='/create'>
          <Button width='w-full'>Create my event</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home