import { cn, DOT } from '@/lib/utils'
import { ArrowRight, ChevronRight, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import FadeInImage from '@/components/global/FadeInImage'

const items = [
  {
    title: 'Développement des compétences',
    description:
      'Nos spécialistes et stratèges vous soutiennent dans tout le cycle des formations et du développement des compétences ou dans une ou des étapes de ce cycle, selon vos besoins.',
    link: '/formation/contact',
    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)',
    extraClass: '',
    iconClass: 'shadow-pink-500',
    buttonClass: 'border-slate-600 hover:border-violet-300/90 border text-violet-300/90',
    options: [
      {
        title: 'Diagnostic des compétences à développer',
        description:
          'Dans une démarche adaptée à votre environnement et son évolution, nos spécialistes vous accompagnent pour mesurer l’écart entre les compétences des employés et les attentes de votre organisation. Les besoins en formation rattachés aux dossiers et mandats organisationnels sont identifiés localement, avec votre monde, grâce à des outils appropriés et dans le but de gagner continuellement en performance. '
      },
      {
        title: 'Planification et développement de programmes de formation (individuel et d’équipe)',
        description:
          'Nos stratèges vous capacitent dans la priorisation des besoins et la définition des objectifs organisationnels de formation, en fonction de la disponibilité des parties prenantes, des enjeux, des bénéfices et des coûts pour votre organisation. Dans une cohérence stratégique, un programme de formations adapté à votre organisation est développé, avec une planification des sessions, du suivi et du pilotage de ces sessions. Après approbation institutionnelle, notre équipe vous accompagne dans la mise en œuvre de votre programme de formation, au besoin.'
      },
      {
        title: 'Élaboration des outils et animation des sessions de formation',
        description:
          'Dans une approche pragmatique et actionnelle, nos spécialistes vous soutiennent dans la transformation ou l’élaboration d’outils appropriés pour développer les compétences associées à un contenu de formation existant, pour des résultats immédiats de formation. Ils sont disponibles pour former autrement votre personnel et animer autrement vos sessions de formation.'
      },
      {
        title: 'Services en mesure et évaluation',
        description:
          'Nos spécialistes en mesure et évaluation vous accompagnent dans la mesure et l’évaluation des retombées des sessions et de votre programme de formation. Des indicateurs de performance, élaborés et adaptés à votre réalité, portent non seulement sur l’atteinte des objectifs organisationnels, mais aussi sur la motivation de votre personnel.Nos spécialistes vous offrent par ailleurs des services en mesure et évaluation pour répondre aux besoins organisationnels de développement de compétences en recrutement du personnel, en recherche de subventions ou autre. '
      }
      // {
      //   title: 'Conception, amélioration et mise en œuvre de plans de formation',
      //   description:
      //     'Nous vous aidons à concevoir, améliorer et mettre en œuvre des plans de formation alignés sur les besoins de votre organisation.'
      // },
      // {
      //   title: 'Développement d’outils de formation',
      //   description: 'Nous développons des outils de formation sur mesure pour répondre aux besoins spécifiques de votre organisation.'
      // },
      // {
      //   title: 'Développer d’outils d’évaluation des compétences',
      //   description: 'Nous vous aidons à développer des outils d’évaluation des compétences pour mesurer l’impact de vos formations.'
      // },
      // {
      //   title: 'Animation de formations',
      //   description: 'Nous vous accompagnons dans l’animation de formations interactives et engageantes pour vos employés.'
      // },
      // {
      //   title: 'Services en Mesure et évaluation',
      //   description: 'Nous offrons des services de mesure et d’évaluation pour garantir l’efficacité de vos programmes de formation.'
      // },
      // {
      //   title: 'Recherche et demande de subvention',
      //   description: 'Nous vous aidons à identifier et à demander des subventions pour financer vos projets de formation.'
      // }
    ]
  },
  {
    title: 'Conduite de changement signifiant',
    description:
      'Dans un environnement complexe et changeant, nos spécialistes et stratèges vous accompagnent dans la co-construction du sens des changements endogènes ou exogènes et dans la réalisation de tout le cycle du processus de votre transformation organisationnelle ou de certaines de ses étapes. ',
    link: '/formation/contact',
    background: 'radial-gradient(125% 125% at 50% 100%, #134e4a 40%, #10b981 100%)',
    extraClass: '',
    iconClass: 'shadow-green-500',
    buttonClass: 'border-emerald-700/40 hover:border-green-500/90 border text-green-300/90',
    options: [
      {
        title: 'Analyse des besoins et de la pertinence de changement',
        description:
          'Dans une démarche signifiante avec vos parties prenantes, nos stratèges vous accompagnent dans le diagnostic des sphères et des besoins de changement organisationnel, en lien avec vos objectifs organisationnels et votre environnement. Le sens construit ensemble oriente l’identification des nouvelles pratiques, les légitimise et facilite leur implantation, en réduisant les résistances et en encourageant l’engagement du personnel. '
      },
      {
        title: 'Définition des objectifs et planification de changement',
        description:
          'En fonction des variables contextuelles, individuelles et relationnelles de votre organisation, nos spécialistes vous soutiennent dans l’identification des facteurs de protection et de risque existants et des options de changement possibles. Les options et la portée de transformation de votre organisation sont analysées, de même que les coûts associés, et des objectifs et indicateurs de leur atteinte sont définis. Selon l’origine interne ou externe de l’exigence de changement, vous êtes soutenu dans l’élaboration agile de l’échéancier de chaque réalisation du projet de changement.'
      },
      {
        title: 'Mise en œuvre du changement ',
        description:
          'Nos spécialistes vous accompagnent dans une approche s’appuyant sur l’expérience et la collaboration (agile) et une approche de résolution de problèmes (LEAN). Ils intègrent l’offre de services en développement des compétences pour soutenir vos équipes stratégiques et opérationnelles dans l’implantation, le suivi du plan d’action et le pilotage du changement. Ils vous accompagnent aussi dans l’élaboration d’une stratégie et des outils de communication favorisant la mobilisation, la transparence et l’écoute, pour une mise en œuvre efficace et productive du changement.'
      },
      {
        title: 'Évaluation de l’impact et révision du changement',
        description:
          'Nos spécialistes en mesure et évaluation vous accompagnent dans la mesure et l’évaluation de l’impact de chaque réalisation de changement sur votre culture organisationnelle et sur les pratiques de travail de votre personnel. Des indicateurs de performance, élaborés et adaptés à votre réalité, portent non seulement sur l’atteinte des objectifs organisationnels, mais aussi sur la motivation de votre personnel et sur leur accueil positif des changements.Nos spécialistes vous soutiennent dans les boucles de rétroaction entre les anciennes et les nouvelles pratiques, et même dans un nouveau cycle de changement, au besoin.'
      }
      // { title: 'Formulation du changement', description: '' },
      // { title: 'Planification du changement', description: '' },
      // { title: 'Implantation du changement - Projet pilote, au besoin', description: '' },
      // { title: 'Suivi de mise en œuvre du changement', description: '' },
      // { title: 'Évaluation et révision du changement', description: '' }
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
    image: '/images/education.svg',
    options: [
      'Centres de recherche universitaire',
      'Fédération des centres de services scolaires',
      'CSPNÉA Conseil Scolaire des Premières nations en éducation aux adultes',
      'Commissions scolaires Autochtone',
      'Centres de services scolaires ',
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
            <div className='text-slate-300 text-lg max-w-2xl mx-auto text-center my-3'>
              Nous vous proposons une approche pragmatique, agile et contextualisée pour vous aider à atteindre immédiatement vos objectifs
              organisationnels grâce à deux blocs de services complémentaires
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
                        {option.title}
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
              <div className='skew-y-1'>
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
          <div className='columns-3 gap-6 space-y-6'>
            {[
              'Votre organisation améliore sa performance, renforce sa compétitivité et atteint plus rapidement ses objectifs stratégiques',
              "Votre organisation est outillée pour s'adapter aisément aux constants changements de structure, du marché, de la technologie ou de la réglementation, tout en améliorant l’engagement du personnel.",
              'Votre personnel utilise le temps de formation pour développer des compétences spécifiques, faire avancer les dossiers et pour répondre à des besoins organisationnels réels, les sessions de formation étant des espaces de travail.',
              'Les coûts de vos formations sont optimisés et même réduits, en raison de l’amélioration de la productivité.',
              'En développant les compétences nécessaires pour assumer ses fonctions, votre personnel est plus motivé au travail.',
              'Dans votre organisation, l’alignement des formations et des projets de changement avec les cibles stratégiques se démontre par des indicateurs de performance organisationnelle et par la satisfaction de votre personnel.'
            ].map((item) => (
              <div
                className='p-4 hover:bg-slate-800/60 rounded-md border md:min-w-[300px] flex-1 border-slate-700 cursor-pointer'
                key={item}
              >
                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/50 mb-2 border border-slate-700'>
                  <PlusIcon className='text-emerald-300' />
                </div>
                <div className=''>
                  {/* <p className='text-white font-bold text-2xl mb-1'>{item}</p> */}
                  <p className='text-slate-300 font-medium text-lg'>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO AM I */}
        <div className='bg-gradient-to-r from-emerald-800 to-green-600 p-6 skew-y-2 my-20'>
          <div className='flex flex-col md:flex-row items-center max-w-7xl m-auto -skew-y-2'>
            {/* <img src='/images/user.svg' alt='Who Am I' className='h-auto  w-[40%] ' /> */}
            <FadeInImage
              path='/images/who-am-i.svg'
              alt='Who Am I'
              imageClassName='h-auto w-[40%] aspect-auto bg-transparent'
              className='aspect-auto h-auto w-[40%]'
            />
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
            <h2 className='text-5xl font-bold text-left text-white mb-6 text-gradient'>Vous êtes</h2>
            {[
              'Professionnelle ou professionnel',
              'Gestionnaire d’équipe',
              'Gestionnaire en ressources humaines',
              'Direction générale',
              'Membre de conseil d’administration',
              'Direction des communications',
              'Responsable d’événements et de programmation de congrès, conférences, formation et autres…'
            ].map((role, idx) => (
              <p className='text-slate-300 text-lg text-left  mt-1' key={idx}>
                {DOT} {role}
              </p>
            ))}
          </div>
          <div className='flex gap-8 flex-col md:flex-row items-start'>
            {cibles.map((item, idx) => (
              <div className='bg-slate-700/70 flex-1 p-3 rounded-lg flex flex-col group' key={idx}>
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
