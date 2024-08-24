import {FaSearch } from 'react-icons/fa';
import { Link} from 'react-router-dom'

export default function Header() {
  return (
   <header className='bg-slate-200 shadow-md'>
    < div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
   <Link to='/'>
   <img src='/images/SURF DECK.png'></img>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Surf</span>
        <span className='text-slate-900'>Deck</span>


    </h1>
    </Link>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center' >

        <input type='text'
         placeholder='Search...' 
        className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600' />
    </form>
    <ul className='flex gap-4'>
        <Link to='/Home'>
        <li>Home</li>
        </Link>
        <Link to='/About'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            About
            </li>
            </Link>

        <Link to='/packages'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            Packages
            </li>
            </Link>

         <Link to='/staff'>   
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            Staff
            </li>
            </Link>

            <Link to='/Event'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            Events
            </li>
            </Link>

            <Link to='/Equipment'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            Equipments
            </li>
            </Link>

            <Link to='/payments'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Payments</li>
        </Link>

        <Link to='/Supplier'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            Supplier
            </li>
            </Link>

        <Link to='/profile'>
        <li className='hidden sm:inline text-slate-700 hover:underline'> Profile</li>
        </Link>

        <Link to='/signin'>
        <li className=' text-slate-700 hover:underline'>Signin</li>
        </Link>


    </ul>
    </div>
   </header>
  );
}
