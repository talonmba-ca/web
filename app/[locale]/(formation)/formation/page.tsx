import { cn } from '@/lib/utils'
import { ArrowRight, ChevronRight, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import FadeInImage from '@/components/global/FadeInImage'

const items = [
  {
    title: 'Développement des compétences',
    icon: 'S',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque alias ex porro dolor consectetur numquam vero odit aliquid?',
    link: '/formation/contact',
    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)',
    extraClass: '',
    iconClass: 'shadow-pink-500',
    buttonClass: 'border-slate-600 hover:border-violet-300/90 border text-violet-300/90',
    options: [
      'Diagnostic des compétences à développer',
      'Planification et développement de programmes de formation (individuel et d’équipe)',
      'Évaluation des programmes et des services de formation',
      'Conception et mise en œuvre de programmes',
      'Conception, amélioration et mise en œuvre de plans de formation',
      'Développement d’outils de formation',
      'Développer d’outils d’évaluation des compétences',
      'Animation de formations',
      'Services en Mesure et évaluation',
      'Recherche et demande de subvention'
    ]
  },
  {
    title: 'Conduite de changement signifiant',
    icon: 'M',
    description:
      'Accompagnement stratégique pour piloter des changements significatifs, de l’analyse des besoins à l’évaluation et la révision du changement.',
    link: '/formation/contact',
    background: 'radial-gradient(125% 125% at 50% 100%, #134e4a 40%, #10b981 100%)',
    extraClass: '',
    iconClass: 'shadow-green-500',
    buttonClass: 'border-emerald-700/40 hover:border-green-500/90 border text-green-300/90',
    options: [
      'Énoncé et analyse des besoins de changement - Analyse de la situation de départ',
      'Construction/Définition du sens du changement avec les parties prenantes',
      'Alternatives/Options de solution avec identification des indicateurs de réalisation et de performance du changement',
      'Prise de décision/Mise à l’agenda',
      'Formulation du changement',
      'Planification du changement',
      'Implantation du changement - Projet pilote, au besoin',
      'Suivi de mise en œuvre du changement',
      'Évaluation et révision du changement'
    ]
  }
]

const cibles = [
  {
    title: 'Organisations et organismes publiques',
    image: '/images/organisation.svg',
    options: [
      'Villes et municipalités',
      'Services de police, ambulanciers et urgence 911',
      'Ministères | MAPAQ + MEQ de l’éducation + MSSS M de la santé + MIFI/IRCC (immigration, francisation et intégration)',
      'Organismes | OQLF Office Québécois de la langue française + Élection Québec + Élection Canada (Service de formation)'
    ]
  },
  {
    title: 'Organisations parapubliques',
    image: '/images/school.jpg',
    options: [
      'Centres de recherche universitaire',
      'Fédération des centres de services scolaires',
      'CSPNÉA Conseil Scolaire des Premières nations en éducation aux adultes',
      'Commissions scolaires Autochtone',
      'Centres de services scolaires (employés et les employés des écoles, primaire à l’université – francophones)',
      'Santé (ex: CLSC, CIUSSS)',
      'Universités'
    ]
  }
]
const FormationHome = () => {
  return (
    <div className='min-h-screen w-full relative'>
      {/* Your Content/Components */}
      <div className='relative'>
        <div className='flex px-6 md:px-12 lg:px-16 pb-8 sm:pb-12 flex-col md:flex-row justify-between items-start md:items-center gap-20 showcase-container mw-container'>
          <div className='left flex w-full md:w-[760px] flex-col gap-8 items-center md:items-start  text-white  flex-1 bg-blue-400f mt-10 '>
            <h2 className='text-4xl text-gradient max-w-[890px] text-center md:text-left sm:text-5xl text-balance font-bold mt-8 sm:mt-4'>
              Rentabiliser vos formations
              <br />
              et donner du sens aux changements
            </h2>
            <p className='text-center md:w-[690px] md:text-left text-white text-lg text-balanced w-full -mt-4'>
              Concevez des formations pour relever des défis liés au contexte de travail <br />
              Transformer ensemble positivement vos rapports aux changements constants
              {/* Entraînez-vous ensemble à devenir agile face
              aux changements constants */}
              <br />
              Atteignez vos objectifs de réussite plus rapidement
            </p>
            <Link
              href='/formation/lists'
              className='text-white bg-slate-900/50 rounded-md p-2.5 border border-white/10 font-bold text-lg hover:bg-slate-900/20 group flex items-center justify-center gap-x-2 hover:text-emerald-300'
            >
              <span>Toutes nos formations</span>
              <ArrowRight className='group-hover:translate-x-1 opacity-5 group-hover:opacity-100 transition-all duration-300' />
            </Link>
          </div>
          <div className='relative flex-1  w-full flex items-center justify-center from-primary mt-6'>
            <Image src={`/images/formation.svg`} alt='Onboarding' width={600} height={1} className='relative object-cover ' />
          </div>
        </div>

        <div className=' max-w-7xl m-auto p-6 gap-6'>
          <div className='mb-6'>
            <h1 className='text-white text-center font-bold text-4xl max-w-2xld md:text-5xl text-whited from-red-400 via-amber-400 to-yellow-400'>
              Stratégie - Conseils - Amélioration des pratiques
            </h1>
            <div className='text-slate-300 text-lg max-w-2xl mx-auto text-center mt-1'>
              Nous vous proposons une approche pragmatique pour vous aider à atteindre immédiatement vos objectifs organisationnels grâce à
              deux blocs de services
            </div>
          </div>
          <div className='flex flex-wrap items-start flex-col md:flex-row gap-8'>
            {items.map((item, idx) => (
              <div
                // href={item.link}
                key={idx}
                className={cn(
                  `rounded-xl  hover:scale-[1.02] transition-all duration-700  border-transparent groupd overflow-hidden flex-1`,
                  item.extraClass
                )}
                style={{ background: item.background }}
              >
                <div className='bg-slate-900/50 p-6 flex flex-col gap-y-3 '>
                  <p className='font-bold text-4xl text-white'>{item.title}</p>
                  <ul className='list-disc pl-5'>
                    {item.options.map((option, index) => (
                      <li key={index} className='text-slate-200 text-lg'>
                        {option}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.link}
                    className={cn('flex w-fit items-center gap-x-2 rounded-md cursor-pointer   mt-4 p-3', item.buttonClass)}
                  >
                    <span className='font-bold'>Savoir plus</span>
                    <ChevronRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POURQUOI NOUS */}
        <div className='my-12 p-6 max-w-7xl m-auto' id='why-us'>
          <div className='mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-6 uppercase'>
              POURQUOI <span className=' text-gradient'>T-GROUP FORMATION</span>
            </h1>
            <div className='text-slate-300 font-medium text-lg max-w-2xl mt-1'>
              Vous n’avez pas une vue d’ensemble des compétences à développer chez vos employés en lien avec les objectifs stratégiques à
              atteindre?
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            {[1, 2, 4].map((item) => (
              <div
                className=' inset-0 z-0 rounded-lg overflow-hidden'
                key={item}
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000'
                }}
              >
                <div className='p-4 bg-slate-800/60'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/50 mb-2 border border-slate-700'>
                    <PlusIcon className='text-emerald-300' />
                  </div>
                  <div className=''>
                    <p className='text-white font-bold text-2xl mb-1'>Lorem, ipsum dolor.</p>
                    <p className='text-slate-300 text-lg'>
                      Nous offrons des formations pour les entreprises, les organisations et les individus qui cherchent à améliorer leurs
                      compétences et à se préparer aux défis du marché du travail.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-slate-900d px-6 py-20 -skew-y-1 bg-gradient-to-r from-emerald-800 to-amber-300'>
          <div className="bg-[url('/images/square.png')] bg-cover bg-no-repeat bg-center ">
            <div className='flex items-start flex-col justify-start max-w-3xl m-auto '>
              <div className='w-12 h-1 bg-white mb-4 skew-y-1'></div>
              <div className="skew-y-1 bg-[url('/svgs/dots-curve-bg.svg')]d ">
                <span className='text-white text-2xl md:text-3xl font-bold text-center text-balance'>
                  Rentabiliser les programmes de développement des compétences dans les grandes organisations en formant autrement les
                  employés et en transformant positivement leur rapport aux changements
                </span>
              </div>
              <Link
                href={`/formation/contact`}
                className='p-2.5 bg-black/40 rounded-sm font-semibold text-white text-center mt-6 skew-y-1 flex items-center justify-center group hover:bg-black/60 duration-500 transition-all gap-x-1.5 w-full sm:w-fit'
              >
                <span>Contactez-nous maintenant</span>
                <ArrowRight className='group-hover:translate-x-1 group-hover:rotate-[-20deg] transition-transform duration-200 group-hover:text-emerald-400' />
              </Link>
            </div>
          </div>
        </div>

        {/* Ce que vous gagnerez */}
        <div className='my-12 p-6 max-w-7xl m-auto' id='advantages'>
          <div className='mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-gradient mb-6 uppercase'>Ce que vous gagnerez</h1>
            <div className='text-slate-300 font-medium text-lg max-w-2xl mt-1'>
              Vous n’avez pas une vue d’ensemble des compétences à développer chez vos employés en lien avec les objectifs stratégiques à
              atteindre?
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            {[1, 2, 4].map((item) => (
              <div className='p-4 hover:bg-slate-800/60 rounded-md border border-slate-700 cursor-pointer' key={item}>
                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/50 mb-2 border border-slate-700'>
                  <PlusIcon className='text-emerald-300' />
                </div>
                <div className=''>
                  <p className='text-white font-bold text-2xl mb-1'>Lorem, ipsum dolor.</p>
                  <p className='text-slate-300 text-lg'>
                    Nous offrons des formations pour les entreprises, les organisations et les individus qui cherchent à améliorer leurs
                    compétences et à se préparer aux défis du marché du travail.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO AM I */}
        <div className='bg-gradient-to-r from-emerald-800 to-green-600 p-6 skew-y-2 my-20'>
          <div className='flex flex-col md:flex-row items-center max-w-7xl m-auto -skew-y-2'>
            <img src='/images/user.svg' alt='Who Am I' className='h-auto  w-[40%] ' />
            <div className='flex flex-col p-6 flex-1'>
              <h2 className='text-5xl font-bold text-left text-white mb-4'>QUI SUIS-JE?</h2>
              <div className='flex flex-col gap-y-6 '>
                <p className='text-slate-100 text-lg text-left'>
                  Je suis{' '}
                  <span className='text-slate-800 font-semibold'>stratège en développement agile et pragmatique des compétences</span>,
                  spécialisée dans la conception de formations concrètes, engageantes et directement applicables en milieu de travail. Mon
                  approche vise à transformer l’apprentissage en levier de performance et d’adaptation au changement.
                </p>
                <p className='text-white text-lg text-left bg-black/10 p-6 rounded-lg'>
                  {`J’aide les organisations à rentabiliser le développement des compétences de leurs équipes, en créant des parcours de
                  formation sur mesure, ancrés dans la réalité de leurs employés. Mon accompagnement permet d'obtenir des résultats
                  concrets, durables, et alignés avec vos objectifs stratégiques.`}
                </p>
                <p className='text-slate-100 text-lg text-left'>
                  Ma méthode repose sur plusieurs années d’expérience en formation et en recherche. Je me distingue par l’intégration de
                  données scientifiques et la prise en compte de l’environnement de travail réel pour générer un impact positif, mesurable
                  et motivant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CIBLES */}
        <div className='my-24 p-6 max-w-7xl m-auto'>
          <div className='mb-8'>
            <h2 className='text-5xl font-bold text-left text-white  text-gradient'>Vous êtes</h2>
            <p className='text-slate-300 text-lg text-left max-w-2xl mt-1'>
              Professionnelle ou professionnel Gestionnaire d’équipe Gestionnaire en ressources humaines Direction générale Membre de
              conseil d’administration Direction des communications Responsable d’événements et de programmation de congrès, conférences,
              formation et autres…
            </p>
          </div>
          <div className='flex gap-8 flex-col md:flex-row items-start'>
            {cibles.map((item, idx) => (
              <div className='bg-slate-700/70  p-3 rounded-lg flex flex-col group' key={idx}>
                <FadeInImage path={item.image} alt='Cibles' imageClassName='rounded-t-sm' />
                <div className='p-2'>
                  <h2 className='text-white font-bold text-2xl mb-2'>{item.title}</h2>
                  <div className='w-full'>
                    <ul className='list-disc pl-5 '>
                      {item.options.map((subitem, subIdx) => (
                        <li className='text-slate-300 text-lg' key={subIdx}>
                          {subitem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href='/formation/contact'
                    className='hover:text-emerald-500   py-1  rounded mt-6 cursor-pointer flex items-center gap-1  hover:border-emerald-400 hover:bg-slate-800/30 transition-all duration-200 text-emerald-400 w-fit'
                  >
                    <span>Contactez-nous</span>
                    <ArrowRight
                      className='text-slate-300 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200 text-sm'
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* // TODO REPLACE BY TESTIMONIES STATS */}
        {/* <Stats /> */}
      </div>
    </div>
  )
}

export default FormationHome
