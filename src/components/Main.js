import React from 'react'

import './Main.css'
import profile from '../assets/profile.jpg'

function Main() {
  return (
    <>
    <section class="main">
                {/* <h1>Main Container</h1> */}
                <div class="main__posting-announcement-card p-5">
                    <div>
                      <img src={profile} className='rounded-full' width={50} />
                    </div>
                    <div>
                        <input type='text' placeholder='Post Announcement here' />
                        <div>
                            <span>
                              <i class="fa-solid fa-image"></i>
                              Photo
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Main