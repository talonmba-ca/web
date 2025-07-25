import { getCurrentLocale, getScopedI18n } from '@/locales/server'
import Header from './Header'
import Image from 'next/image'
import { Button } from '../ui/button'

const ShowCase = async () => {
  const t = await getScopedI18n('home.showcase')
  const locale = await getCurrentLocale()
  return (
    <div className='flex-1 relative'>
      <div id='showcase' className='showcase bg-gradient-to-r  relative from-blue-700  to-pink-700'>
        <Header gradient className='header-showcase ' />
        <div className='flex px-4 pb-8 sm:pb-12 sm:px-12  max-w-7xl mx-auto flex-col md:flex-row justify-between items-start md:items-center gap-20 showcase-container mw-container'>
          <div className='left flex w-full md:w-[400px] flex-col gap-8 items-center md:items-start  text-white  flex-1 bg-blue-400f mt-10 '>
            <h2 className='text-4xl  max-w-[450px] text-center md:text-left sm:text-5xl text-balance font-bold mt-8 sm:mt-4'>
              {t('title')}
            </h2>
            <p className='text-center md:w-[400px] md:text-left text-white text-lg text-balance w-full -mt-4'>{t('description')}</p>
            <div className='flex items-center gap-x-4'>
              <Button className='py-6'>{t('start')}</Button>
              <Button variant='secondary' className='py-6'>
                {t('findTalent')}
              </Button>
            </div>
          </div>
          <div className='relative flex-1  w-full flex items-center justify-center from-primary mt-6'>
            <Image
              src={`https://landingfoliocom.imgix.net/store/collection/niftyui/images/features/1/image.png`}
              alt='Onboarding'
              width={500}
              height={1}
              className='relative object-cover '
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowCase
