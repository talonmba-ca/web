// import AppLogo from '../global/AppLogo'
import { getScopedI18n } from '@/locales/server'
// import LocaleSwitcher from '../global/LocaleSwitcher'
// import DonateButton from './DonateButton'
// import { Suspense } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// import ToggleNavMobile from './ToggleNavMobile'
import ToggleNavMobile from '../global/ToggleNavMobile'

const NabarItems = async ({ gradient = false }: { gradient: boolean }) => {
  const t = await getScopedI18n('header')
  //   const donate = await getScopedI18n('donate')

  const menuItems = [
    {
      title: t('nav.about'),
      // link: process.env.NEXT_PUBLIC_STORE_URL!,
      link: '/about'
    },
    {
      title: t('nav.workInCanada'),
      link: '/work-in-canada'
    },
    {
      title: t('nav.workInQuebec'),
      link: '/work-in-quebec'
    },
    {
      title: t('nav.recruitInternational'),
      link: '/recruit-international'
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
            className={cn(' flex items-center gap-x-1', {
              'text-white hover:text-slate-100': gradient,
              'text-slate-700 hover:text-pink-500': !gradient
            })}
          >
            {item.title}
            {/* {item.external && <ExternalLinkIcon className='w-3' />} */}
          </Link>
        </li>
      ))}
      {/* <div className='group relative'>
        <div
          className={cn('text-center flex items-center gap-x-1 cursor-pointer   text-balance  hover:underline', {
            'text-white hover:text-slate-100': gradient,
            'text-slate-700 hover:text-slate-500': !gradient
          })}
        >
          <span className='font-medium text-lg'>{t('nav.more')}</span>
          <ChevronDownIcon className='w-5' />
        </div>
        <div className='hidden opacity-0 group-hover:opacity-100  right-0 group-hover:flex flex-col absolute duration-500 transition-all w-[170px]'>
          <div className='pt-4'></div>
          <div className='flex flex-col bg-white border border-gray-100 shadow-1  rounded-lg overflow-hidden z-10'>
            {subMenu.map((menu) => (
              <Link key={menu.name} className={`hover:text-primary hover:bg-primary/10 px-4 py-2 transition-all`} href={menu.path}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </ul>
  )
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
}

const Header = ({ gradient = false, className, ...rest }: HeaderProps) => {
  return (
    <>
      <div className={cn('h-[85px]d flex flex-col items-center justify-between stickyd top-0 z-50 w-full  ', className)} {...rest}>
        <header className='p-4 sm:px-[2rem] sm:py-6  flex items-center justify-between w-full'>
          <div className='flex items-center  '>
            <ToggleNavMobile gradient={gradient} />
            {/* <AppLogo /> */}
            <span className='text-white'>LOGO TALONMBA</span>
          </div>
          <nav className='hidden lg:flex flex-1 items-center justify-center'>
            <NabarItems gradient={gradient} />
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
          'hidden lg:hidden backdrop-blur-md fixed top-[75px] bg-black/20 backdrop-filter w-full py-8 px-4  border-white/20 z-40 items-center justify-center',
          {
            'bg-white': !gradient,
            'bg-black/50': gradient
          }
        )}
      >
        <NabarItems gradient={gradient} />
      </nav>
    </>
  )
}

export default Header
