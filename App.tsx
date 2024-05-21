import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideNav } from './Components/SideNav'
import { Header } from './Components/Header'
import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import { OrderHistory } from './pages/OrderHistory';
import { Customers } from './pages/Customers';
import { ExpenseStatement } from './pages/ExpenseStatement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapse = () => {
    console.log('clicked')
    setCollapsed(!collapsed)
  }

  return (
    // <div className='text-stone-100 grid grid-cols-[250px,1fr] grid-rows-[60px,1fr] h-[1000px] gap-2'>
    <div className='app text-stone-100 flex h-[1000px] gap-2'>
      {/* sideNav */}
      {/* <div className='bg-slate-800 row-[1/3] col-[1/2] p-2 flex flex-col gap-5 h-screen sticky top-0 drop-shadow-lg'> */}
      <div className={`bg-black ${collapsed ? 'transform w-[23%]' : 'transform w-[7%]'} transition-all ease-in-out duration-300 p-2 flex flex-col gap-5 h-screen sticky top-0 drop-shadow-lg`}>
        <button onClick={handleCollapse} className='pt-3'>{collapsed ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} /> }</button>
        <SideNav collapsed={collapsed}/>
      </div>

      {/* Header */}
      {/* <div className='bg-gray-800 h-[60px] w-full sticky top-0 z-50 col[2/3] row-[1/2] flex items-center justify-between p-4 rounded-b-md drop-shadow-lg'> */}
      <div className='flex flex-col gap-2 w-full'>
        <Header />
        <Router>
          <Routes>
            {/* {routesComponent} */}
            <Route path='/' element={<Dashboard />} />
            <Route path='pages/OrderHistory' element={<OrderHistory />} />
            <Route path='pages/Customers' element={<Customers />} />
            <Route path='pages/ExpenseStatement' element={<ExpenseStatement />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App