// This is the component beneath the header (second header)

export const Overview = (props) => {
  return (
    <>
      <h1 className='text-3xl font-medium tracking-wider'>{props.title}</h1>
      <div>
        <select className='bg-inherit'>
          <input type='date' id='date' className='bg-red-600'/>
          <option>Monthly</option>
        </select>
        <button className='bg-purple-600 p-2.5 m-2 rounded-lg hover:bg-purple-400'>Download Report</button>
      </div>
    </>
  )
}
