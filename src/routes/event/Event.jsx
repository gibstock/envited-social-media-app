import React, {useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import EventImage from '../../assets/images/birthday-cake.png'
import {BiCalendar} from 'react-icons/bi'
import {IoLocationOutline} from 'react-icons/io5'
import { AiOutlineRight} from 'react-icons/ai'
import Button from '../../components/Button'
import { useReward } from 'react-rewards'

const Event = () => {
  const {state} = useLocation()
  const {eventName, hostName, startTime, endTime, startDate, endDate, eventAddress, eventCity, eventState, eventPostCode, eventPhoto} = state
  const { reward, isAnimating } = useReward('rewardEl', 'confetti')

  useEffect(() => {
    reward()
  }, [reward])

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full box-border bg-mainBack md:px-40 lg:px-60 lg:flex-row-reverse lg:justify-start lg:gap-16'>
      <div className="event-image flex flex-row justify-center items-center bg-mainBack w-full md:max-w-xl md:mt-20 lg:flex-col lg:justify-start lg:max-w-lg ">
        <img src={EventImage} alt="" />
      </div>
      <div className="info-wrapper flex flex-col justify-start items-center gap-6 w-full p-5 grow md:px-0 md:py-5 lg:justify-start lg:p-0">
        <div className="info-header self-start">
          <h1 className='font-bold text-3xl text-primaryVeryDark md:text-5xl'>{eventName}</h1>
          <p className='text-sm text-midGrey md:text-lg'>Hosted by <span>{hostName}</span></p>
        </div>
        <div className="info-content grid grid-cols-[1fr_2fr_1fr] gap-4 items-center w-full md:grid-cols-[1fr_4fr_1fr]">
              <div className="justify-self-end icon flex flex-col justify-center items-center p-3 gap-1 h-12 w-12 bg-white rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-primaryMid md:h-14 md:w-14 md:justify-self-start">
                <BiCalendar size='30'/>
              </div>
              <div className="flex flex-col text-base md:text-lg">
                <span className='text-primaryVeryDark font-bold'>{startDate} {startTime}</span>
                <span>to <span className='text-darkGrey'>{endDate} {endTime}</span></span>
              </div>
            <div className="arrow justify-self-end md:justify-self-start">
              <AiOutlineRight />
            </div>
              <div className="justify-self-end icon flex flex-col justify-center items-center p-3 gap-1 h-12 w-12 bg-white rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-primaryMid md:h-14 md:w-14 md:justify-self-start">
                <IoLocationOutline size='30' />
              </div>
              <div className="flex flex-col text-base md:text-lg">
                <span className='text-primaryVeryDark font-bold'>{eventAddress}</span>
                <span className='text-darkGrey'>{eventCity} {eventState}, {eventPostCode}</span>
              </div>
            <div className="arrow justify-self-end md:justify-self-start">
              <AiOutlineRight />
            </div>
        </div>    
        <Link className='justify-self-end mt-16' to='/create'>
          <Button id='rewardEl' disabled={isAnimating} type={'button'}>Create another event</Button>
        </Link>
      </div>
    </div>
  )
}

export default Event