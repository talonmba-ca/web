import { cn } from '@/lib/utils'
import { ArrowRight, ServerIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const items = [
  {
    title: 'TEST D’INTRUSION',
    icon: 'T',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)',
    extraClass: 'hover:border-[1px]l hover:border-pink-200',
    iconClass: 'shadow-pink-500',
    options: [
      'Identification des failles de sécurité',
      'Simulation d’attaques réelles',
      'Rapport détaillé des vulnérabilités',
      'Recommandations de remédiation',
      'Amélioration continue de la posture sécurité'
    ]
  },
  {
    title: 'ARCHITECTURE',
    icon: 'A',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-green-200',
    iconClass: 'shadow-green-500',
    options: [
      'Conception d’architectures sécurisées',
      'Choix des technologies adaptées',
      'Analyse des risques d’architecture',
      'Mise en conformité des systèmes',
      'Documentation et schémas techniques'
    ]
  },
  {
    title: 'GOUVERNANCE – RISQUE ET CONFORMITÉ',
    icon: 'GRC',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-amber-200',
    iconClass: 'shadow-amber-500',
    options: [
      'Évaluation de la conformité réglementaire',
      'Gestion des risques cybersécurité',
      'Mise en place de politiques de sécurité',
      'Audit et reporting de conformité',
      'Accompagnement à la certification (ISO 27001, etc.)'
    ]
  },
  {
    title: 'FORMATION / SENSIBILISATION',
    icon: 'FS',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-blue-200',
    iconClass: 'shadow-blue-500',
    options: [
      'Formations pour tous niveaux (débutant à expert)',
      'Sensibilisation aux risques humains',
      'Simulations d’attaques (phishing, ransomware...)',
      'Supports pédagogiques personnalisés',
      'Mesure de l’efficacité des formations'
    ]
  },
  {
    title: 'ACCOMPAGNEMENT PROJETS',
    icon: 'AP',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-blue-200',
    iconClass: 'shadow-blue-500',
    options: [
      'Support cybersécurité dans le cycle projet',
      'Analyse des impacts sécurité',
      'Revue de code et bonnes pratiques',
      'Accompagnement agile ou en V-cycle',
      'Validation des livrables sécurité'
    ]
  },
  {
    title: 'CONSEILS',
    icon: 'C',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-blue-200',
    iconClass: 'shadow-blue-500',
    options: [
      'Diagnostic cybersécurité personnalisé',
      'Stratégie de cybersécurité sur mesure',
      'Choix des outils et solutions techniques',
      'Conseil réglementaire et organisationnel',
      'Accompagnement CISO / RSSI'
    ]
  },
  {
    title: 'DEVELOPPEMENT',
    icon: 'D',
    description: 'Lorem ipsum...',
    link: '#',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-blue-200',
    iconClass: 'shadow-blue-500',
    options: [
      'Développement d’outils sécurité sur mesure',
      'Automatisation des tâches de cybersécurité',
      'Intégration DevSecOps',
      'Sécurisation du code source',
      'Maintenance et évolution des solutions'
    ]
  }
]

const Test = () => {
  return (
    <div className='relative'>
      <div className='flex px-6 pb-8 sm:pb-12   max-w-7xl mx-auto flex-col md:flex-row justify-between items-start md:items-center gap-20 showcase-container mw-container'>
        <div className='left flex w-full md:w-[400px] flex-col gap-8 items-center md:items-start  text-white  flex-1 bg-blue-400f mt-10 '>
          <h2 className='text-4xl  max-w-[490px] text-center md:text-left sm:text-5xl text-balance font-bold mt-8 sm:mt-4 bg-gradient-to-r from-emerald-400 via-white to-amber-300 bg-clip-text text-transparent'>
            Leader en matière
            <br />
            {`  d'opérations de sécurité`}
          </h2>
          <p className='text-center md:w-[400px] md:text-left text-white text-lg text-balance w-full -mt-4'>
            Nos spécialistes vous aident à prévenir les menaces, vulnérabilités et incidents dans vos infrastructures TI en infonuagique et
            sur site.
          </p>

          <Link
            href={`/security/partners`}
            className='text-white rounded-md p-2.5 border border-green-500/10 font-bold text-lg group flex items-center justify-center gap-x-2   bg-gradient-to-r from-emerald-800 to-green-400'
          >
            <span>Devenir Partenaire</span>
            <ArrowRight className='group-hover:translate-x-1 opacity-50 group-hover:opacity-100 transition-transform duration-200' />
          </Link>
        </div>
        <div className='relative flex-1  w-full flex items-center justify-center from-primary mt-6'>
          <Image src={`/images/security.png`} alt='Onboarding' width={500} height={1} className='relative object-cover ' />
        </div>
      </div>

      <div className=' w-full bg-[#020617] relative'>
        {/* Magenta Orb Grid Background */}
        <div
          className='inset-0 z-0'
          style={{
            background: '#020617',
            backgroundImage: `
        linear-gradient(to right, rgba(74, 105, 71, 0.15) 1px, transparent 1px), linear-gradient(rgba(80, 105, 71, 0.15) 1px, transparent 1px), radial-gradient(circle at 50% 60%, rgba(100, 236, 72, 0.15) 0%, rgba(85, 247, 126, 0.05) 40%, transparent 70%)
      `,
            backgroundSize: '40px 40px, 40px 40px, 100% 100%'
          }}
        >
          <div className='bg- p-6 md:p-12 lg:p-16 xl:p-20 text-center  relative'>
            <p className='text-3xl md:text-6xl lg:text-8xl font-semibold text-white'>
              <span className='bg-gradient-to-r from-emerald-400 via-white to-amber-300 bg-clip-text text-transparent'>Experts</span> en
              cybersécurité et{' '}
              <span className='bg-gradient-to-r from-emerald-400  to-amber-300 bg-clip-text text-transparent'>
                {`sécurité de l'information`}
              </span>{' '}
              pour des <span>solutions sur mesure</span>.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap  items-start justify-start  max-w-7xl m-auto p-6 gap-12 my-12'>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              `rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer max-w-2xld  hover:border-[1px] border-transparent relative bg-slate-900/50 hover:bg-slate-900 group flex-1 md:min-w-[390px]`,
              item.extraClass
            )}
            style={{ background: item.background }}
          >
            <div
              key={idx}
              className='p-12 pt-20 bg-gray-900/60'
              // className=' px-6 py-14 pb-6 flex flex-col gap-y-3 flex-auto min-w-[350px] max-w-[520px]d group relative  hover:scale-105 transition-all duration-300 cursor-pointer flex-1d'
            >
              <div
                className={cn(
                  `w-20 h-20 bg-black rounded-full flex items-center justify-center group-hover:shadow absolute -top-3 -left-2`,
                  item.iconClass
                )}
              >
                <div className='w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover: border border-slate-800'>
                  {/* <span className='text-white font-bold'>{item.icon}</span> */}
                  <ServerIcon className='text-white' />
                </div>
              </div>
              <p className='font-bold text-3xl text-white'>{item.title}</p>
              <ul className='list-disc pl-5 mt-4'>
                {item.options.map((option, index) => (
                  <li key={index} className='text-slate-200 text-lg'>
                    {option}
                  </li>
                ))}
              </ul>
              {/* <div className='text-slate-300 text-lg '>{item.description}</div> */}
            </div>
          </div>
        ))}
      </div>
      {/* Your Content/Components */}
    </div>
  )
}

export default Test
