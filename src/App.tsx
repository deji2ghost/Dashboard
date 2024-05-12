import './App.css'
import { SideNav } from './Components/SideNav'
import { Header } from './Components/Header'
import { Overview } from './Components/Overview'

function App() {

  return (
    <div className='text-stone-100 grid grid-cols-[250px,1fr] grid-rows-[60px,1fr] h-[1000px] gap-2'>
      {/* sideNav */}
      <div className='bg-slate-800 row-[1/3] col-[1/2] p-2 flex flex-col gap-5 h-screen sticky top-0 drop-shadow-lg'>
        <SideNav />  
      </div>
      {/* Header */}
      <div className='bg-gray-800 col[2/3] row-[1/2] flex items-center justify-between p-4 rounded-b-md drop-shadow-lg'>
        <Header /> 
      </div>
      <div className='grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(17,1fr)] bg-inherit gap-2'>
        {/* second header */}
        <div className='bg-gray-800 col-[1/17] row-[1/3] flex justify-between items-center px-4 rounded-md drop-shadow-lg'>
          <Overview />
        </div>
        {/* four grid beneath the second header */}
        <div className='col-[1/17] row-[3/6] grid grid-cols-4 gap-2'>
          <div className='bg-gray-800 rounded-md drop-shadow-lg'>
            
          </div>
          <div className='bg-gray-800 rounded-md drop-shadow-lg'>
            
          </div>
          <div className='bg-gray-800 rounded-md drop-shadow-lg '>
            
          </div>
          <div className='bg-gray-800 rounded-md drop-shadow-lg '>
            
          </div>
        </div>
        {/* rest of the layout */}
        <div className='bg-gray-800 col-[1/12] row-[6/14] rounded-md shadow-lg'>
          
        </div>
        <div className='bg-gray-800 col-[12/17] row-[6/10] rounded-l-md shadow-lg'>
          
        </div>
        <div className='bg-gray-800 col-[12/17] row-[10/14] rounded-l-md shadow-lg'>
          
        </div>
        <div className='bg-gray-800 col-[1/12] row-[14/18] rounded-t-md shadow-lg'>
          
        </div>
        <div className='bg-gray-800 col-[12/17] row-[14/18] rounded-tl-md shadow-lg'>
          
        </div>
      </div>
    </div>
  )
}

export default App
