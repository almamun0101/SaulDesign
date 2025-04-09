import React from 'react'

export const Works = () => {
  return (
    <div>
        <div className="bg-[url(./BG.png)] py-50 text-thi">
        <div className="container">

            <h2 className='font-bold text-4xl py-5'>My recent <span className='text-sec'>works</span></h2>
            <ul className='flex gap-6 '>
                <li className=''><a href="" className='bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec'>All</a></li>
                <li className=''><a href="" className='bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec'>UI</a></li>
                <li className=''><a href="" className='bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec'>UX</a></li>
                <li className=''><a href="" className='bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec'>Web Design</a></li>
               
            </ul>
        </div>
        </div>
    </div>
  )
}
