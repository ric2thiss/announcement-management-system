import React from 'react'
import ProfileImage from '../assets/profile.jpg';

function AnnouncementFeedSection() {
  return (
    <>
         {/* <!-- Announcement Feed Section (Scrollable) --> */}
            {/* <!-- h-[calc(100vh-10rem)] --> */}
            <div class="flex-1 overflow-y-auto h-100vh">
                <div class="bg-white p-6 rounded-lg shadow mb-8">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <input type="text" placeholder="What's on your mind?" class="flex-1 bg-gray-100 p-2 rounded" />
                        <div class="flex space-x-2">
                            <button class="bg-gray-100 p-2 rounded"><i class="fa-solid fa-photo-film"></i></button>
                            <button class="bg-gray-100 p-2 rounded"><i class="fa-solid fa-video"></i></button>
                            <button class="bg-gray-100 p-2 rounded"><i class="fa-solid fa-calendar-days"></i></button>
                        </div>
                    </div>
                </div>
                
                {/* <!-- Example of Announcement Post --> */}
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-bold">Ric Charles Paquibot</h3>
                            <p class="text-gray-500">Web Developer · Oct 8, 8:36 pm</p>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mt-4">Welcome to Announcement Management System of CSUCC 🎉</h4>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                    <div class="flex items-center space-x-4 mt-4">
                        <button class="text-blue-500"><i class="fa-solid fa-thumbs-up"></i> React</button>
                        <button class="text-blue-500"><i class="fa-solid fa-comment"></i> Comment</button>
                        <button class="text-blue-500"><i class="fa-solid fa-share"></i> Share</button>
                        <button class="text-blue-500"><i class="fa-solid fa-eye"></i> View Full Post</button>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-bold">Ric Charles Paquibot</h3>
                            <p class="text-gray-500">Web Developer · Oct 8, 8:36 pm</p>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mt-4">Welcome to Announcement Management System of CSUCC 🎉</h4>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                    <div class="flex items-center space-x-4 mt-4">
                        <button class="text-blue-500"><i class="fa-solid fa-thumbs-up"></i> React</button>
                        <button class="text-blue-500"><i class="fa-solid fa-comment"></i> Comment</button>
                        <button class="text-blue-500"><i class="fa-solid fa-share"></i> Share</button>
                        <button class="text-blue-500"><i class="fa-solid fa-eye"></i> View Full Post</button>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-bold">Ric Charles Paquibot</h3>
                            <p class="text-gray-500">Web Developer · Oct 8, 8:36 pm</p>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mt-4">Welcome to Announcement Management System of CSUCC 🎉</h4>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                    <div class="flex items-center space-x-4 mt-4">
                        <button class="text-blue-500"><i class="fa-solid fa-thumbs-up"></i> React</button>
                        <button class="text-blue-500"><i class="fa-solid fa-comment"></i> Comment</button>
                        <button class="text-blue-500"><i class="fa-solid fa-share"></i> Share</button>
                        <button class="text-blue-500"><i class="fa-solid fa-eye"></i> View Full Post</button>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-bold">Ric Charles Paquibot</h3>
                            <p class="text-gray-500">Web Developer · Oct 8, 8:36 pm</p>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mt-4">Welcome to Announcement Management System of CSUCC 🎉</h4>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                    <div class="flex items-center space-x-4 mt-4">
                        <button class="text-blue-500"><i class="fa-solid fa-thumbs-up"></i> React</button>
                        <button class="text-blue-500"><i class="fa-solid fa-comment"></i> Comment</button>
                        <button class="text-blue-500"><i class="fa-solid fa-share"></i> Share</button>
                        <button class="text-blue-500"><i class="fa-solid fa-eye"></i> View Full Post</button>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-bold">Ric Charles Paquibot</h3>
                            <p class="text-gray-500">Web Developer · Oct 8, 8:36 pm</p>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mt-4">Welcome to Announcement Management System of CSUCC 🎉</h4>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                    <div class="flex items-center space-x-4 mt-4">
                        <button class="text-blue-500"><i class="fa-solid fa-thumbs-up"></i> React</button>
                        <button class="text-blue-500"><i class="fa-solid fa-comment"></i> Comment</button>
                        <button class="text-blue-500"><i class="fa-solid fa-share"></i> Share</button>
                        <button class="text-blue-500"><i class="fa-solid fa-eye"></i> View Full Post</button>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <div class="flex items-center space-x-4">
                        <img src={ProfileImage} alt="Profile" class="w-10 h-10 rounded-full" />
                        <div>
                            <h3 class="font-bold">Ric Charles Paquibot</h3>
                            <p class="text-gray-500">Web Developer · Oct 8, 8:36 pm</p>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mt-4">Welcome to Announcement Management System of CSUCC 🎉</h4>
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet...</p>
                    <div class="flex items-center space-x-4 mt-4">
                        <button class="text-blue-500"><i class="fa-solid fa-thumbs-up"></i> React</button>
                        <button class="text-blue-500"><i class="fa-solid fa-comment"></i> Comment</button>
                        <button class="text-blue-500"><i class="fa-solid fa-share"></i> Share</button>
                        <button class="text-blue-500"><i class="fa-solid fa-eye"></i> View Full Post</button>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default AnnouncementFeedSection