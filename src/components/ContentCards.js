import React from 'react'
import AnnouncementCatergory from './AnnouncementCatergory'
import Main from './Main'
import PinnedPost from './PinnedPost'

import './ContentCards.css'

function ContentCards() {
  return (
    <>
    <section class="post-container">
            <AnnouncementCatergory />
            <Main />
            <PinnedPost />
    </section>
    
    </>
  )
}

export default ContentCards