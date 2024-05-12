import { faBell, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  return (
    <>
        {/* searchbar */}
        <div className='relative w-[50%] text-black'>
            <input 
                placeholder='Search'
                className='outline-none px-9 py-1 w-full rounded-md'
            />    
            <FontAwesomeIcon icon={faSearch} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-300'/>
        </div> 
        {/* account settings bar */}
        <div className='flex items-center gap-6'>
            <select name='language' id='language' className='outline-none bg-inherit cursor-pointer'>
                <option value='English' className='bg-gray-800 cursor-pointer'>English</option>
                <option value='French' className='bg-gray-800 cursor-pointer'>French</option>
                <option value='Spanish' className='bg-gray-800 cursor-pointer'>Spanish</option>
            </select>
            <div className='relative'>
                <FontAwesomeIcon icon={faBell} />
                <h1 className='bg-red-800 text-center rounded-full w-[18px] absolute -top-1 -right-2 text-[10px]'>3</h1>
            </div>

            <div className='flex items-center gap-3'>
                <FontAwesomeIcon icon={faUser}/>
                <div>
                    <h1>Emmanuella K</h1>
                    <p>Ladies-Closet</p>
                </div>
            </div>
        </div>   
    </>
  )
}
