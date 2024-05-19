import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SideNav } from './Components/SideNav'
import { Header } from './Components/Header'
// import { NavDetails1 } from './data/data'
import { Dashboard } from './pages/Dashboard'
import { OrderHistory } from './pages/OrderHistory';
import { Customers } from './pages/Customers';
import { ExpenseStatement } from './pages/ExpenseStatement';

function App() {

  // const routesComponent = NavDetails1.map(({component, path}) => (
  //   <Route key={component} path={path} element={component}/>
  // ))
  return (
    <div className='text-stone-100 grid grid-cols-[250px,1fr] grid-rows-[60px,1fr] h-[1000px] gap-2'>
      {/* sideNav */}
      <div className='bg-slate-800 row-[1/3] col-[1/2] p-2 flex flex-col gap-5 h-screen sticky top-0 drop-shadow-lg'>
        <SideNav />
      </div>

      {/* Header */}
      <div className='bg-gray-800 sticky top-0 z-50 col[2/3] row-[1/2] flex items-center justify-between p-4 rounded-b-md drop-shadow-lg'>
        <Header />
      </div>
      <Router>
        <Routes>
          {/* {routesComponent} */}
          <Route path='/' element={<Dashboard />} />
          <Route path='/pages/OrderHistory' element={<OrderHistory />} />
          <Route path='/pages/Customers' element={<Customers />} />
          <Route path='/pages/ExpenseStatement' element={<ExpenseStatement />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
