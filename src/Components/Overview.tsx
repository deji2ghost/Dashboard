import React from 'react'

export const Overview = () => {
  return (
    <>
        <h1 className='text-3xl font-medium tracking-wider'>Sales Overview</h1>
        <div>
            <select className='bg-inherit'>
                <input type='date' id='date' className='bg-red-600'/>
                <option>Monthly</option>
            </select>
        </div>
    </>
  )
}
