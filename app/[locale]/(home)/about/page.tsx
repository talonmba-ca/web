import { DOT } from '@/lib/utils'
import React from 'react'

const About = async () => {
  return (
    <div className='p-4 sm:p-8 max-w-4xl mx-auto mt-12'>
      <div className='vision  hover:shadow-md bg-slate-800/40 rounded-xl p-6 mb-6 cursor-pointer'>
        <h1 className='text-3xl text-gradient font-bold text-white flex items-center gap-x-2'>
          <span>{DOT}</span>
          <span>Vision</span>
        </h1>
        <p className='text-lg text-slate-300  mt-2'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad nam corporis voluptatem quo iure dolorem dolore assumenda
          officia eius. Nisi expedita libero aspernatur in! Ullam earum quibusdam cupiditate veniam quasi atque minus illum reiciendis porro
          a, nisi facere quis assumenda error temporibus tempora voluptas. Possimus magnam eaque nihil fugiat!
        </p>
      </div>

      <div className='mission mb-6'>
        <div className='mb-6 hover:shadow-md bg-slate-900/50 rounded-xl p-4 sm:p-6 cursor-pointer'>
          <h1 className='text-3xl text-gradient font-bold text-white flex items-center gap-x-2'>
            <span>{DOT}</span>
            <span>Mission</span>
          </h1>
          <p className='text-lg text-slate-300 mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad nam corporis voluptatem quo iure dolorem dolore assumenda
            officia eius. Nisi expedita libero aspernatur in! Ullam earum quibusdam cupiditate veniam quasi atque minus illum reiciendis
            porro a, nisi facere quis assumenda error temporibus tempora voluptas. Possimus magnam eaque nihil fugiat!
          </p>
        </div>
        {/* <div className='flex flex-wrap gap-6 items-start justify-center p-2 sm:p-6'>
          {missionItems.map((item, index) => (
            <div key={index} className='hover:shadow-1 rounded-xl p-4 sm:p-6 cursor-pointer flex-auto bg-white shadow-2'>
              <h1 className='text-xl font-bold text-gray-600 flex items-center gap-x-2'>
                <span>{DOT}</span>
                <span>{item.title}</span>
              </h1>
              <p className='text-lg text-slate-700 mt-2 max-w-4xl text-balance whitespace-pre-line'>{item.description}</p>
            </div>
          ))}
        </div> */}
      </div>

      <div className='belief p-4 sm:p-6 bg-slate-900/50 rounded-xl'>
        <h1 className='text-3xl text-gradient font-bold text-white flex items-center gap-x-2 mb-6'>
          <span>{DOT}</span>
          <span>Values</span>
        </h1>
        <div className='flex flex-wrap gap-x-4 rounded-md overflow-hidden mt-2 divide-y-[1px] divide-slate-700'>
          {[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad nam corporis voluptatem quo iure dolorem dolore assumenda officia eius.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad nam corporis voluptatem quo iure dolorem dolore assumenda officia eius.'
          ].map((item, index) => (
            <div key={index} className='text-lg text-slate-300 hover:shadow-xl   p-4 sm:p-6 cursor-pointer bg-gray-800/60'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
