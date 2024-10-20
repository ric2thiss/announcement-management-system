import React from 'react'
import Logo from '../assets/ams-logo.svg';
import ProfileImage from '../assets/profile.jpg';


function Header() {
  return (
    <>
    <header class="bg-gray-900 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div class="flex items-center space-x-4">
            {/* <!-- Logo and Title --> */}
            <img src={Logo} alt="CSUCC logo" class="w-12" />
            <h1 class="text-2xl font-bold">AMSystem</h1>
            <span class="mx-4">|</span>
            <p>Home</p>
        </div>
        <nav class="space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">Dashboard</a>
            <span class="mx-4">|</span>
            <a href="#" class="text-white font-bold">Announcement</a>
        </nav>
        <div class="flex items-center space-x-4">
            <button class="bg-yellow-500 px-2 py-1 rounded">
                <i class="fa-solid fa-plus"></i>
            </button>
            <button class="text-gray-300"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="text-gray-300"><i class="fa-solid fa-bell"></i></button>
            <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
        </div>
    </header>
    
    </>
  )
}

export default Header