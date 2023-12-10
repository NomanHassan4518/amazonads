import React from 'react'

const Sales = () => {
  return (
    <div className='border border-gray-400 py-2 px-4  bg-[#f5f9fa]'>
      <div className="flex items-center justify-between">
        <p className='text-[20px] font-bold'>Compare Sales</p>

        <div className="flex items-center">
            <button className='px-4 py-1.5 border border-[#008296] text-white bg-[#008296]'>Graph view</button>
            <button className='px-4 py-1.5  border border-gray-400 hover:bg-gray-300'>Table view</button>
        </div>
      </div>

      <div className="mt-4 bg-white border gap-3 border-gray-400 grid grid-cols-2">
<div className='pl-4 border-r border-gray-400'>Hassan</div>
<div>Hassan</div>
      </div>
    </div>
  )
}

export default Sales
