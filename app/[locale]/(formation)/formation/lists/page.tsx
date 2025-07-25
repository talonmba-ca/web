import { FORMATIONS } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FormationLists = () => {
  return (
    <div>
      <div className='flex gap-6 flex-wrap max-w-7xl mx-auto p-6 items-start justify-center'>
        {FORMATIONS.map((fmt) => (
          <Link
            href={`/formation/${fmt.title.toLowerCase().replace(/ /g, '-')}`}
            className='bg-slate-700/30 hover:bg-slate-800/70 w-[370px] p-3 rounded-lg flex flex-col cursor-pointer'
            key={fmt.id}
          >
            <Image src={'/images/school.jpg'} alt='Cibles' className=' aspect-video object-cover rounded-t-sm' width={10000} height={300} />
            <div className='p-2'>
              <span className='text-emerald-400'>
                {fmt.category.name} | {fmt.niveau}{' '}
              </span>
              <h2 className='text-white font-bold text-2xl mb-2'>{fmt.title}</h2>
              <div className='w-full'>
                <p className='text-slate-300 line-clamp-2 truncated'>{fmt.description}</p>
              </div>
              <div className='flex justify-between items-center text-sm mt-2'>
                <span className='text-slate-400 rounded-sm py-1 px-2 bg-emerald-800/20'>{fmt.format}</span>
                <span className='text-slate-400 ml-2 text-lg font-bold'>{fmt.price == 0 ? 'Gratuit' : fmt.price + ' €'}</span>
              </div>
              <button className=' hover:text-emerald-500 text-slate-300 py-1 px-2 rounded mt-6 cursor-pointer flex items-center gap-2 border border-slate-700 hover:border-emerald-400 hover:bg-slate-800/30 transition-all duration-200 group'>
                <span>Acheter maintenant</span>
                <ArrowRight className='group-hover:translate-x-1 transition-all duration-200' />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FormationLists
