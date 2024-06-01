import React from 'react';
import { IoMdSearch, IoIosHeart } from 'react-icons/io';

const MenuLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/"
  },
  {
    id: 2,
    name: "En tendencia",
    link: "/trend"
  },
  {
    id: 3,
    name: "Sobre nosotros",
    link: "/about"
  },
  {
    id: 4,
    name: "Solicitud especial",
    link: "/special"
  }
]

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark-text-black duration-200 relative z-40">
      <div className='PY-4'>
        <div className="container flex justify-between items-center">
          <div className='flex items-center gap-4'>
            <a href="#" className='text-black font-semibold tracking-widest text 2xl uppercase sm:text-3xl'>
              INDUCOR FENIX
            </a>
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {
                  MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-white dark:hover:text-white duration-200'>{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='search' className='search-bar' />
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-pretty dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
            </div>
            <button className='relative p-3'>
              <IoIosHeart className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;