import React from 'react'
import AnnouncementFeedSection from './AnnouncementFeedSection'
import CategorySection from './CategorySection'
import PinnedAnnouncement from './PinnedAnnouncement'

function Content() {
  return (
    <>
    <section class="flex-1 p-8 flex space-x-8">
        <CategorySection />
        <AnnouncementFeedSection />
        <PinnedAnnouncement />
    </section>
    
    </>
  )
}

export default Content