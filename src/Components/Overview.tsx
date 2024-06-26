import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
// This is the component beneath the header (second header)

export const Overview = (props) => {
  return (
    <>
      <h1 className='ml-4 text-3xl font-medium tracking-wider'>{props.title}</h1>
      <div>
        <select className='bg-inherit font-normal border border-slate-400 rounded-md px-1 py-1'>
          <input type='date' id='date' className='bg-red-600'/>
          <FontAwesomeIcon icon={faCalendarWeek} />
          <option>Monthly</option>
        </select>
        <button className='bg-violet-950 px-3 py-1 mr-2 ml-3 rounded-sm hover:bg-purple-400'>
          <FontAwesomeIcon icon={faDownload}/>
          <span className='ml-2'>Download Report</span>
        </button>
      </div>
    </>
  )
}
