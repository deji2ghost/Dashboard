import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavDetails1, NavDetails2, NavDetails3 } from '../data/data'
// import { Link } from 'react-router-dom'

export const SideNav = ({collapsed}) => {
  // const [collapsed, setCollapsed] = useState(false)
  return (
    <>
      <div className='px-6 sticky top-0 bg-inherit'>
        {/* accatex header */}
        <div className='flex items-center border-b-2 border-gray-400 pb-5 gap-1 font-bold'>
          <h1 className='bg-blue-600 text-xl p-1'>A</h1>
          <p className={`${collapsed ? 'visible' : 'hidden'} transition-all ease-in-out duration-500 text-base`}>Accatex</p>
        </div>
      </div>

      {/* nav list i mapped through from data.js */}
      <div className='flex flex-col gap-20 text-sm font-medium overflow-y-scroll'>
        <div className='flex flex-col gap-2'>
          {
            NavDetails1.map((nav, index) => {
              console.log(nav.path)
              return(
                <a href={nav.path}>
                  <div key={index}>
                    <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 rounded-lg hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
                      <FontAwesomeIcon icon={nav.icon} />
                      <h1 className={`${collapsed ? 'visible' : 'hidden'} transition-all ease-in-out duration-500 text-base`}>{nav.navName}</h1>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
        <div className='flex flex-col gap-2'>
          {
            NavDetails2.map((nav, index) => {
              return(
                <div key={index}>
                  <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 rounded-lg hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
                    <FontAwesomeIcon icon={nav.icon} />
                    <h1 className={`${collapsed ? 'visible' : 'hidden'} transition-all ease-in-out duration-500 text-base`}>{nav.navName}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='flex flex-col gap-2'>
          {
            NavDetails3.map((nav, index) => {
              return(
                <div key={index}>
                  <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 rounded-lg hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
                    <FontAwesomeIcon icon={nav.icon} />
                    <h1 className={`${collapsed ? 'visible' : 'hidden'} transition-all ease-in-out duration-500 text-base`}>{nav.navName}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
