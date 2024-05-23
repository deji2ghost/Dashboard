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
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './Auth/firebase-config'
// import { Login } from './Components/Login';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  // const [ user, setUser ] = useState({})
  const handleCollapse = () => {
    console.log('clicked')
    setCollapsed(!collapsed)
  }

  // const registerUser = async(data) => {
  //   try {
  //     const userData = await createUserWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password,
  //     )
  //     console.log(userData)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // const signinUser = async(data) => {
  //   try {
  //     const loginData = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password,
  //     )
  //     console.log(loginData)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  return (
    <div className='app text-stone-100 flex h-[1000px] gap-2'>

      {/* Dont touch the registerpage component and signinuser component */}
      {/* <RegisterPage registerUser={registerUser} /> */} 
      {/* <Login signinUser={signinUser} /> */}
      {/* sideNav */}
      <div className={`bg-black ${collapsed ? 'transform w-[23%]' : 'transform w-[7%]'} transition-all ease-in-out duration-300 p-2 flex flex-col gap-5 h-screen sticky top-0 drop-shadow-lg`}>
        <button onClick={handleCollapse} className='pt-3 transition-all ease-in-out'>{collapsed ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} /> }</button>
        <SideNav collapsed={collapsed}/>
      </div>

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
