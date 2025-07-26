import CTAEmployee from '@/components/global/CTAEmployee'
import FadeInImage from '@/components/global/FadeInImage'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const items = [
  {
    title: 'Travailler au Canada',
    icon: 'S',
    description: 'Trouvez les opportunités pour immigrer et travailler légalement au Canada.',
    link: '/p/travailler-au-canada',
    image: '/images/placement.svg',

    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)',
    extraClass: 'hover:border-[1px]l hover:border-pink-200',
    iconClass: 'shadow-pink-500',
    titleClass: 'bg-gradient-to-r from-pink-300 to-violet-400 bg-clip-text text-transparent'
  },
  {
    title: 'Travailler au Québec',
    icon: 'L',
    description: 'Découvrez les opportunités professionnelles au Québec et ses programmes dédiés aux travailleurs étrangers.',
    image: '/images/education.svg',

    link: '/p/travailler-au-quebec',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-green-200',
    iconClass: 'shadow-green-500',
    titleClass: 'bg-gradient-to-r from-emerald-300 via-amber-300 to-white bg-clip-text text-transparent'
  },
  {
    title: "Recruteur à l'International",
    icon: 'F',
    description: 'Nous aidons les employeurs à recruter efficacement des talents qualifiés à l’étranger.',
    image: '/images/formation.svg',
    link: '/p/recruteur-international',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-amber-200',
    iconClass: 'shadow-amber-500',
    titleClass: 'bg-gradient-to-r from-amber-100 to-amber-200 bg-clip-text text-transparent'
  }
]

const Test = () => {
  return (
    <div className='relative'>
      <div className='flex px-6 pb-8 sm:pb-12   max-w-7xl mx-auto flex-col md:flex-row justify-between items-start md:items-center gap-20 showcase-container mw-container'>
        <div className='left flex w-full md:w-[400px] flex-col gap-8 items-center md:items-start  text-white  flex-1 bg-blue-400f mt-10 '>
          <h2 className='text-4xl  max-w-[490px] text-center md:text-left sm:text-5xl text-balance font-bold mt-8 sm:mt-4'>
            T-GROUP PLACEMENT
          </h2>
          <p className='text-center md:w-[400px] md:text-left text-white text-lg text-balance w-full -mt-4'>
            Agence de recrutement international de travailleurs qualifiés pour le Québec et le Canada
          </p>
          <div className='flex items-center flex-wrap gap-4  w-full'>
            {/* Ocean Abyss Background with Top Glow */}
            <Link
              href={`/placement/contact`}
              className='text-white bg-slate-900/50d rounded  bg-gradient-to-r from-emerald-500 to-amber-400 border-green-500/10d font-bold text-lg p-2.5 flex items-center justify-center gap-x-2 hover:opacity-80 group w-full sm:w-fit flex-1d'
            >
              <span>Contactez-nous</span>
              <ArrowRight className='group-hover:translate-x-1 transition-transform duration-200' />
            </Link>
            <Link
              href={`/placement/hiring`}
              className=' text-white border font-bold text-lg hover:no-underline flex items-center gap-x-2 hover:bg-emerald-600/20 border-emerald-400/30 w-fullf flex-1d p-2.5 rounded text-center w-full sm:w-fit group transition-all duration-700'
            >
              <span>Trouver un talent</span>
              <ArrowRight className='group-hover:translate-x-1 opacity-5 group-hover:opacity-100 transition-all duration-300' />
            </Link>
          </div>
        </div>
        <div className='relative flex-1  w-full flex items-center justify-center from-primary mt-6'>
          <Image src={`/images/placement.svg`} alt='Onboarding' width={500} height={1} className='relative object-cover ' />
        </div>
      </div>

      <div className='flex-wrap grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3  max-w-7xl m-auto p-6 gap-6'>
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className={cn(
              `inset-0 z-0 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer max-w-xl flex-auto border-[1px] border-transparent`,
              item.extraClass
            )}
            style={{ background: item.background }}
          >
            <div className='bg-slate-900/50 p-6 flex flex-col gap-y-3 '>
              <FadeInImage path={item.image} alt='Cibles' className='rounded-t-sm' imageClassName='rounded-t-sm shadow' />
              <p className={cn('font-bold text-2xl text-white', item.titleClass)}>{item.title}</p>
              <div className='text-white '>{item.description}</div>
            </div>
          </Link>
        ))}
      </div>

      <CTAEmployee />

      {/* Your Content/Components */}
    </div>
  )
}

export default Test
