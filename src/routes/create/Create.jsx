import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import FormInput from '../../components/FormInput'
import Button from '../../components/Button'
import { AiOutlineHome } from 'react-icons/ai'

const Create = () => {

  const formik = useFormik({
    initialValues: {
      eventName: '',
      hostName: '',
      startTime: '',
      endTime: '',
      startDate: '',
      endDate: '',
      eventAddress: '',
      eventCity: '',
      eventState: '',
      eventPostCode: '',
      eventPhoto: ''
    },
    validationSchema: Yup.object({
      eventName: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
      hostName: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
      startTime: Yup.mixed()
      .required("Required"),
      endTime: Yup.mixed()
      .required("Required"),
      startDate: Yup.date()
      .required("Required"),
      endDate: Yup.date()
      .required("Required")
      .min(Yup.ref('startDate')),
      eventAddress: Yup.string()
      .required("Required"),
      eventCity: Yup.string()
      .required("Required"),
      eventState: Yup.string()
      .required("Required"),
      eventPostCode: Yup.number()
      .required("Required"),
    }),
    onSubmit: (values) => {
      // This would be passed to a backend or firestore
      // instead of just passed to the next component
    navigate('/event', {state:{...values}})
    }
  })
  
  const navigate = useNavigate()

 
  return (
    <div className='flex flex-col items-center justify-around p-7 bg-secondaryPurpleLight'>
      <Link to='/'>
        <AiOutlineHome className='absolute left-5 top-5' size='28' />
      </Link>
      <div className='relative'>
        <h1 className="font-bold text-[36px] leading-[4.5rem] text-center text-primaryVeryDark">
          Time to<br />
          your event!
        </h1>
        <h1 className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primaryMid to-primaryLight text-[36px] leading-[41px] text-center'>CREATE</h1>
      </div>
      <form className='flex flex-col' onSubmit={formik.handleSubmit}>
        <FormInput 
          label="Event Name"
          type="text" 
          required 
          onChange={formik.handleChange} 
          name='eventName' 
          value={formik.values.eventName}
          placeholder='Enter the Event name'
        />
        <FormInput 
          label="Host Name"
          type="text" 
          required 
          onChange={formik.handleChange} 
          name='hostName' 
          value={formik.values.hostName}
          placeholder='Enter the host name'
        />
        <div className="time-group flex flex-row gap-4">
          <FormInput
            label="Start Time" 
            type="time" 
            required 
            onChange={formik.handleChange} 
            name='startTime' 
            value={formik.values.startTime}
            placeholder='Pick a start time'
          />
          <FormInput
            label="Ending Time" 
            type="time" 
            required 
            onChange={formik.handleChange} 
            name='endTime' 
            value={formik.values.endTime}
            placeholder='Pick an ending time'
          />
        </div>
        <div className="date-group flex flex-row gap-4">
          <FormInput
            label="Start Date" 
            type="date" 
            required 
            onChange={formik.handleChange} 
            name='startDate' 
            value={formik.values.startDate}
            placeholder='Pick a Start date'
          />
          <FormInput
            label="End Date" 
            type="date" 
            required 
            onChange={formik.handleChange} 
            name='endDate' 
            value={formik.values.endDate}
            placeholder='Pick an Ending date'
          />
        </div>
        <FormInput 
          label="Event Address"
          type="text" 
          required 
          onChange={formik.handleChange} 
          name='eventAddress' 
          value={formik.values.eventAddress}
          placeholder='Enter the Address'
        />
        <FormInput 
          label="Event City"
          type="text" 
          required 
          onChange={formik.handleChange} 
          name='eventCity' 
          value={formik.values.eventCity}
          placeholder='Enter the City'
        />
        <FormInput 
          label="Event State"
          type="text" 
          required 
          onChange={formik.handleChange} 
          name='eventState' 
          value={formik.values.eventState}
          placeholder='Enter the State'
        />
        <FormInput 
          label="Event Postcode"
          type="text" 
          required 
          onChange={formik.handleChange} 
          name='eventPostCode' 
          value={formik.values.eventPostCode}
          placeholder='Enter the Postcode'
        />
        <div className="button-group flex flex-row justify-center items-center">
          <Button type={'submit'} >Let's Go</Button>
        </div>
      </form>
    </div>
  )
}

export default Create