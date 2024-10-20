import React from 'react'

function CategorySection() {
  return (
    // <!-- Announcement Category Section (Sticky) -->
    <div class="w-1/4">
        <div class="bg-white p-6 rounded-lg shadow sticky top-24">
            <h2 class="text-xl font-bold mb-4">Announcement</h2>
            <div class="flex justify-between items-center mb-4">
                <span>Category</span>
                <button class="text-blue-500">+ Add new</button>
            </div>
            <div class="space-y-2">
                <p class="bg-gray-100 p-4 rounded-lg flex justify-between">
                    All Announcement <span>6</span>
                </p>
                <p class="p-2">General</p>
                <p class="p-2">Lorem Ipsum</p>
                <p class="p-2">Lorem Ipsum</p>
                <p class="p-2">Lorem Ipsum</p>
            </div>
        </div>
    </div>
  )
}

export default CategorySection