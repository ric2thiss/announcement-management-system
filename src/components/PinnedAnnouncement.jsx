import React from 'react'
import ProfileImage from '../assets/profile.jpg';

function PinnedAnnouncement() {
  return (
    <>
        <div class="w-1/4">
            <div class="bg-white p-6 rounded-lg shadow sticky top-24">
                <h2 class="text-xl font-bold mb-4">Pinned Announcement</h2>
                <div class="space-y-4">
                    {/* <!-- Example of Pinned Announcement --> */}
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <div class="flex items-center space-x-4">
                            <img src={ProfileImage} alt="Profile" class="w-8 h-8 rounded-full" />
                            <div>
                                <h3 class="font-bold">Ric Charles Paquibot</h3>
                                <span class="text-gray-500">Pinned</span>
                            </div>
                        </div>
                        <h4 class="font-bold mt-4">Welcome to Announcement...</h4>
                        <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                        <a href="#" class="text-blue-500 mt-2 inline-block">View Post</a>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default PinnedAnnouncement