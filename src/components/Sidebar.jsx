import React from 'react'

function Sidebar() {
  return (
    <>
        <aside class="w-16 bg-gray-900 text-white flex flex-col items-center space-y-6 py-6 sticky top-14 h-screen">
            <a href="#" class="text-white"><i class="fa-solid fa-house text-xl"></i></a>
            <a href="#" class="text-gray-300"><i class="fa-solid fa-calendar-days text-xl"></i></a>
            <a href="#" class="text-gray-300"><i class="fa-solid fa-comments text-xl"></i></a>
            <a href="#" class="text-gray-300"><i class="fa-solid fa-building text-xl"></i></a>
            <a href="#" class="text-gray-300"><i class="fa-solid fa-chart-line text-xl"></i></a>
        </aside>
    
    </>
  )
}

export default Sidebar