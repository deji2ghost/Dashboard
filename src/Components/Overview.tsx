import { useState } from "react"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export const Overview = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState();

  // const handleChange = () => {
  //   const [ startDate, endDate ] = range;
  //   setStartDate(startDate)
  // }
  return (
    <>
      <h1 className='text-3xl font-medium tracking-wider'>Sales Overview</h1>
      <div>
        <select className='bg-inherit'>
          <input type='date' id='date' className='bg-red-600'/>
          <option>Monthly</option>
          <DatePicker selected={date} onChange={(date: Date) => setDate(date)}/>
        </select>
      </div>
    </>
  )
}
