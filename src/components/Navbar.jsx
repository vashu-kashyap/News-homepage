import React, { useState } from 'react'
import logo from '../assets/images/logo.svg' //importing logo.svg image
import menuopen from '../assets/images/icon-menu.svg'
import menuclose from '../assets/images/icon-menu-close.svg'

const Navbar = () => {

  const [showMenu,setShowMenu] =useState('max-lg:-right-full')
  const [activeoverlay,setActiveoverlay] =useState('hidden')

  const handlemenuopen = () =>{
    setShowMenu('max-lg:-right-0')
    setActiveoverlay('block')
  }

  const handleclosemenu = () =>{
    setShowMenu('max-lg:-right-full')
    setActiveoverlay('hidden')
  }


  return (
    <nav className='px-36 pt-16 pb-12 flex justify-between items-center max-lg:px-5 max-lg:py-5 max-lg:relative'>
      <div className={`overlay fixed ${activeoverlay} top-0 right-0 bg-black opacity-60 w-full min-h-screen transition-all duration-200 ease-in-out`}>

      </div>
      <div className="nav-brand">
        <img src={logo} alt="logo" />
      </div>
      <ul className={`nav-menu flex justify-start items-center gap-x-10 max-lg:fixed max-lg:flex-col max-lg:items-start ${showMenu}  max-lg:top-0 max-lg:w-2/3 max-lg:min-h-screen max-lg:bg-Off-white max-lg:pt-32 max-lg:gap-y-5 max-lg:font-bold max-lg:px-10 transition-all ease-in-out duration-500`} >
        <li><img className='closemenu absolute top-5 right-5 hidden max-lg:block cursor-pointer' onClick={handleclosemenu} src={menuclose} alt="close menu icon" /></li>
        <li className="navlink"><a className='font-inter text-sm text-Dark-grayish-blue hover:text-Soft-red transition-all duration-200 ease-in-out ' href="/">Home</a></li>
        <li className="navlink"><a className='font-inter text-sm text-Dark-grayish-blue hover:text-Soft-red transition-all duration-200 ease-in-out ' href="/">New</a></li>
        <li className="navlink"><a className='font-inter text-sm text-Dark-grayish-blue hover:text-Soft-red transition-all duration-200 ease-in-out ' href="/">Popular</a></li>
        <li className="navlink"><a className='font-inter text-sm text-Dark-grayish-blue hover:text-Soft-red transition-all duration-200 ease-in-out ' href="/">Trending</a></li>
        <li className="navlink"><a className='font-inter text-sm text-Dark-grayish-blue hover:text-Soft-red transition-all duration-200 ease-in-out ' href="/">Categories</a></li>
      </ul>

      <div className="menu-btn hidden max-lg:block">
        <button> <img src={menuopen} onClick={handlemenuopen} alt="menu-btn" /></button>
      </div>
    </nav>
  )
}

export default Navbar
