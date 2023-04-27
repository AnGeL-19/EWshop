import React from 'react'

export const Loading = () => {
  return (
    <div className="flex items-center gap-2 text-gray-500 -z-10">
        <span className="h-6 w-6 block rounded-full border-4 border-t-red-500 animate-spin"></span>
        loading...
    </div>
  )
}
