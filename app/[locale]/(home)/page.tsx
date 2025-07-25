import CTAEmployee from '@/components/global/CTAEmployee'
import { cn, OUR_SERVICES } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // const data = [
  //   {
  //     title: 'Travailler au Quebec',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officiis delectus, fugit in repellat numquam eos ab vitae aut',
  //     gradient: 'from-blue-200 to-blue-400',
  //     hoverTextColor: 'group-hover:text-blue-600'
  //   },
  //   {
  //     title: 'Travailler au Canada',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officiis delectus, fugit in repellat numquam eos ab vitae aut',
  //     gradient: 'from-pink-200 to-violet-300',
  //     hoverTextColor: 'group-hover:text-pink-600'
  //   },
  //   {
  //     title: "Recruiter a l'International",
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officiis delectus, fugit in repellat numquam eos ab vitae aut',
  //     gradient: 'from-amber-100 to-amber-200',
  //     hoverTextColor: 'group-hover:text-amber-600'
  //   }
  // ]
  return (
    <div>
      <div className='flex px-6 pb-8 sm:pb-12   max-w-7xl mx-auto flex-col md:flex-row justify-between items-start md:items-center gap-20 showcase-container mw-container'>
        <div className='left flex w-full   flex-col gap-8 items-center md:items-start  text-white  flex-1 bg-blue-400f mt-10 '>
          <h2 className='text-4xl  max-w-[450px]d  text-center md:text-left sm:text-5xl text-balance font-bold mt-8 sm:mt-4 tg-1 from-violet-500 via-red-500 to-pink-500'>
            BIENVENUE SUR T-GROUP
          </h2>
          <p className='text-center md:w-[400px]d md:text-left text-white text-lg text-balance w-full -mt-4'>
            Nos spécialistes vous aident à prévenir les menaces, vulnérabilités et incidents dans vos infrastructures TI en infonuagique et
            sur site.
          </p>
          <div className='flex items-center flex-wrap gap-4  w-full'>
            {/* Ocean Abyss Background with Top Glow */}
            <Link
              href={`/contact`}
              className='text-white bg-slate-900/50d rounded  bg-gradient-to-r from-emerald-500 to-amber-400 border-green-500/10d font-bold text-lg p-2.5 flex items-center justify-center gap-x-2 hover:opacity-80 group w-full sm:w-fit flex-1d'
            >
              <span>Contactez-nous</span>
              <ArrowRight className='group-hover:translate-x-1 transition-transform duration-200' />
            </Link>
            <Link
              href={`/contact`}
              className=' text-white border font-bold text-lg hover:no-underline flex items-center gap-x-2 hover:bg-emerald-600/20 border-emerald-400/30 w-fullf flex-1d p-2.5 rounded text-center w-full sm:w-fit group transition-all duration-700'
            >
              <span>Trouver un talent</span>
              <ArrowRight className='group-hover:translate-x-1 opacity-5 group-hover:opacity-100 transition-all duration-300' />
            </Link>
          </div>
        </div>
        <div className='relative flex-1  w-full flex items-center justify-center from-primary mt-6'>
          <Image src={`/images/hire.svg`} alt='Onboarding' width={500} height={1} className='relative object-cover ' />
        </div>
      </div>

      <div className='flex flex-wrap items-start max-w-7xl m-auto p-6 gap-6 my-12' id='services'>
        {OUR_SERVICES.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            target='_blank'
            className={cn(
              `inset-0 z-0 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer max-w-2xl flex-auto border-[1px] border-transparent md:w-[420px] lg:w-[520px]`,
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
      <CTAEmployee />
    </div>
  )
}
