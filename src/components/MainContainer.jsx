import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

function MainContainer() {
  return (
    <>
        <main class="flex">
            <Sidebar />
            <Content />
        </main>
    </>
  )
}

export default MainContainer