import Link from 'next/link'
import FadeInImage from '../global/FadeInImage'
import ContactDetailAddress from '../global/ContactDetailAddress'
import ContactDetailHour from '../global/ContactDetailHour'
import ContactDetailPhone from '../global/ContactDetailPhone'
import FacebookIcon from '../icons/FacebookIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import InstagramIcon from '../icons/InstagramIcon'

const Footer = async () => {
  const menuItems = [
    {
      title: 'À propos',
      link: '/about'
    },
    {
      title: 'Sécurité et cybersécurité',
      link: '/security'
    },
    {
      title: 'Formations',
      link: '/formation'
    },
    {
      title: 'Placement',
      link: '/placement'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]
  return (
    <footer className='py-12 bg-gradient-to-b from-black via-[#11151e] to-[#11151e]  sm:pt-16 lg:pt-20 mt-auto '>
      <div className='px-6 md:px-12 lg:px-16  sm:px-6'>
        <div className='flex flex-col lg:justify-between md:flex-row gap-6 flex-wrap'>
          <div className='shrink-0'>
            <Link href='/' className='flex items-center gap-x-2'>
              <FadeInImage path='/images/talonmba.jpeg' className='aspect-auto w-20 md:w-48' imageClassName='aspect-auto' />
            </Link>
          </div>

          <nav className='flex items-start flex-col space-y-3'>
            {menuItems.map((menu) => (
              <Link
                key={menu.link}
                href={menu.link}
                className='font-bold text-lg text-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:text-emerald-500'
              >
                {menu.title}
              </Link>
            ))}
          </nav>

          <ul className='flex flex-col  space-y-6'>
            <ContactDetailAddress />
            <ContactDetailHour />
          </ul>

          <div className='flex flex-col gap-y-4'>
            <ContactDetailPhone />
            <ul className='flex items-center  space-x-3'>
              <div className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-400">
                <FacebookIcon />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-sky-600">

                <LinkedinIcon />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-amber-600">
                <InstagramIcon />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
