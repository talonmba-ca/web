// import AppLogo from '../global/AppLogo'
// import { getScopedI18n } from '@/locales/server'
// import LocaleSwitcher from '../global/LocaleSwitcher'
// import DonateButton from './DonateButton'
// import { Suspense } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// import ToggleNavMobile from './ToggleNavMobile'
import ToggleNavMobile from '../global/ToggleNavMobile'
import FadeInImage from '../global/FadeInImage'

const NabarItems = async ({ gradient = false, items }: { gradient: boolean; items: { title: string; link: string }[] }) => {
  // const t = await getScopedI18n('header')
  //   const donate = await getScopedI18n('donate')

  const menuItems = [
    {
      title: 'À propos',
      link: '/about'
    },
    ...items,
    {
      title: 'FAQ',
      link: '/faq'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]

  // const subMenu = [
  //   { name: t('nav.features'), path: '/features' },
  //   { name: tf('tutorials'), path: '/tutorials' },
  //   { name: t('nav.news'), path: '/news' }
  // ]

  return (
    <ul className='flex items-center justify-center flex-wrap gap-4'>
      {menuItems.map((item) => (
        <li
          key={item.link}
          className={cn('text-center flex items-center gap-x-1 text-xs sm:text-base  text-balance  hover:underline', {
            'text-white hover:text-slate-100': gradient,
            'text-slate-700 hover:text-slate-500': !gradient
          })}
        >
          <Link
            href={item.link}
            className={cn(' flex items-center gap-x-1 font-medium text-lg hover:bg-black/20 py-2 px-3 rounded-md', {
              'text-white hover:text-slate-100': gradient,
              'text-slate-700 hover:text-pink-500': !gradient
            })}
          >
            {item.title}
            {/* {item.external && <ExternalLinkIcon className='w-3' />} */}
          </Link>
        </li>
      ))}
    </ul>
  )
}

interface HomeHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
  items?: {
    title: string
    link: string
  }[]
}

const HomeHeader = ({ gradient = false, items = [], className, ...rest }: HomeHeaderProps) => {
  return (
    <>
      <div className={cn('h-[85px]d flex flex-col items-center justify-between  top-0 z-50 w-full  ', className)} {...rest}>
        <header className='px-6 md:px-12 lg:px-16 sm:px-[2rem] py-4 sm:py-6  flex items-center justify-between w-full'>
          <div className='flex items-center gap-x-3  '>
            <ToggleNavMobile gradient={gradient} />
            <Link href='/' className='flex items-center gap-x-2'>
              <FadeInImage path='/images/talonmba.jpeg' className='aspect-auto w-20 md:w-48' imageClassName='aspect-auto' />
            </Link>
          </div>
          <nav className='hidden lg:flex flex-1 items-center justify-center'>
            <NabarItems gradient={gradient} items={items} />
          </nav>
          <div className='flex items-center gap-x-0.5d w-fit '>
            {/* <div>
              <Suspense>
                <LocaleSwitcher />
              </Suspense>
            </div> */}
          </div>
        </header>
      </div>
      {/* responsive */}
      <nav
        id='nav-mobile'
        className={cn(
          'hidden lg:hidden backdrop-blur-md fixedd top-[75px] bg-black/20 backdrop-filter w-full py-8 px-4  border-white/20 z-40 items-center justify-center',
          {
            'bg-white': !gradient,
            'bg-black/50': gradient
          }
        )}
      >
        <NabarItems gradient={gradient} items={items} />
      </nav>
    </>
  )
}

export default HomeHeader
