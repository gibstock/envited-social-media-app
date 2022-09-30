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
  const { reward, isAnimating } = useReward('rewardEl', 'balloons')

  useEffect(() => {
    reward()
  }, [])

  return (
    <div className='flex flex-col h-screen w-full box-border bg-mainBack'>
      <div className="event-image flex flex-row justify-center items-center bg-mainBack">
        <img src={EventImage} alt="" />
      </div>
      <div className="info-wrapper flex flex-col justify-start items-center gap-6 h-full p-5 grow">
        <div className="info-header self-start">
          <h1 className='font-bold text-3xl text-primaryVeryDark'>{eventName}</h1>
          <p className='text-sm text-midGrey'>Hosted by <span>{hostName}</span></p>
        </div>
        <div className="G info-content grid grid-cols-[1fr_2fr_1fr] gap-4 items-center w-full">
              <div className="justify-self-end icon flex flex-col justify-center items-center p-3 gap-1 h-12 w-12 bg-white rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-primaryMid">
                <BiCalendar size='28'/>
              </div>
              <div className="G text flex flex-col ">
                <span className='text-primaryVeryDark font-bold'>{startDate} {startTime}</span>
                <span className='text-darkGrey'>to {endDate} {endTime}</span>
              </div>
            <div className="G arrow justify-self-end">
              <AiOutlineRight />
            </div>
              <div className="justify-self-end icon flex flex-col justify-center items-center p-3 gap-1 h-12 w-12 bg-white rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,0.1)] text-primaryMid">
                <IoLocationOutline size='28' />
              </div>
              <div className="G text flex flex-col">
                <span className='text-primaryVeryDark font-bold'>{eventAddress}</span>
                <span className='text-darkGrey'>{eventCity} {eventState}, {eventPostCode}</span>
              </div>
            <div className="G arrow justify-self-end">
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