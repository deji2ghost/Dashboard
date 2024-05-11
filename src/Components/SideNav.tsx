import { faArrowRightFromBracket, faCartShopping, faChartArea, faCog, faHeadset, faHome, faMoneyBill, faStore, faTag, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SideNav = () => {
  return (
    <>
      <div className='px-6'>
        <div className='flex items-center border-b-2 border-gray-400 pb-5 gap-1 font-bold'>
          <h1 className='bg-blue-600 text-xl p-1'>A</h1>
          <p className='text-base'>Accatex</p>
        </div>
      </div>

      <div className='flex flex-col gap-20 font-medium'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faHome} />
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faCartShopping} />
            <h1>Orders</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faTag} />
            <h1>Products</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faUsers} />
            <h1>Customers</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faMoneyBill} />
            <h1>Expenses</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faChartArea} />
            <h1>Sales Report</h1>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faStore} />
            <h1>Store Set-up</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faUser} />
            <h1>Admin Account</h1>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faHeadset} />
            <h1>Help & Support</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faCog} />
            <h1>Help & Support</h1>
          </div>
          <div className='flex items-center gap-4 cursor-pointer hover:bg-stone-100 hover:text-blue-600 transition-all duration-300 ease-in-out px-6 py-2'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <h1>Help & Support</h1>
          </div>
        </div>
      </div>
    </>
  )
}
