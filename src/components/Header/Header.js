import React from 'react'
import logo from '../assets/amsystems_logo.svg';
import profile from '../assets/profile.jpg';
import '../global/global.css';

function Header() {
  return (
    <>
            <header class="flex items-center justify-between px-3">
            <section class="flex gap-3 items-center text-white">
                <div class="logo flex items-center">
                    <img src={logo} alt="Website logo" class="" />
                    <div class="system-name">AMSystem</div>
                </div>
                <div class="small-divider"></div>
                <div class="current-location">
                    <p>Home</p>
                </div>
            </section>
            <section class="">
                <div class="flex gap-3 items-center">
                    <a href="#" class="colorOfSmallDivider">Dashboard</a>
                    <span class="small-divider"></span>
                    <a href="#" class="bg-[#333847] text-white px-3 py-1 rounded-md">    Announcement</a>
                </div>
            </section>
            <section>
                <div class="flex gap-5 items-center">
                    <button class="plus-sign-button bg-[#fdcd56] px-3 py-1 rounded-md">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <div class="search-notification flex gap-2 text-white">
                        <button class="search-button bg-[#333847] px-3 py-1 rounded-md">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button class="notification-button  bg-[#333847] px-3 py-1 rounded-md">
                            <i class="fa-solid fa-bell"></i>
                        </button>
                    </div>
                    <div class="profile">
                        <img src={profile} alt="SAMPLE" class="rounded-full" width="50" />
                    </div>
                </div>
            </section>
           
        </header>
    </>
  )
}

export default Header