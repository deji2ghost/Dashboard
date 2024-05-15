import { Overview } from '../Components/Overview'

export const Customer = () => {
    return (
        <div className='grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(17,1fr)] bg-inherit gap-2'>
            {/* second header */}
            <div className='bg-gray-800 col-[1/17] row-[1/3] flex justify-between items-center px-4 rounded-md drop-shadow-lg'>
                <Overview title='Customer Overview' />
            </div>

            {/* four grid beneath the second header */}
            <div className='col-[1/17] row-[3/6] grid grid-cols-4 gap-2'>
                <div className='bg-gray-800 rounded-md drop-shadow-lg'></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg'></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg '></div>
                <div className='bg-gray-800 rounded-md drop-shadow-lg '></div>
            </div>
            
            {/* rest of the layout */}
            <div className='bg-gray-800 col-[1/12] row-[6/14] rounded-md shadow-lg'></div>
            <div className='bg-gray-800 col-[12/17] row-[6/10] rounded-md shadow-lg'></div>
            <div className='bg-gray-800 col-[12/17] row-[10/14] rounded-md shadow-lg'></div>
            <div className='bg-gray-800 col-[1/12] row-[14/18] rounded-md shadow-lg'></div>
            <div className='bg-gray-800 col-[12/17] row-[14/18] rounded-md shadow-lg'></div>
        </div>
    )
}