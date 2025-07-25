import { cn, OUR_SERVICES } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='flex-wrap flex items-start   max-w-7xl m-auto p-6 gap-12'>
      {OUR_SERVICES.map((item, idx) => (
        <Link
          href={item.link}
          key={idx}
          target='_blank'
          className={cn(
            `inset-0 z-0 rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer dmax-w-3xl md:w-[420px] lg:w-[520px] flex-auto hover:border-[1px] `,
            item.extraClass
          )}
          style={{ background: item.background }}
        >
          <div className='bg-slate-900/50 p-6 flex flex-col gap-y-3 '>
            <div className={cn(`w-12 h-12 rounded-full flex items-center justify-center shadow`, item.iconClass)}>
              <span className='text-white font-bold'>{item.icon}</span>
            </div>
            <p className='font-bold text-2xl text-white'>{item.title}</p>
            <div className='text-white '>{item.description}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Services
