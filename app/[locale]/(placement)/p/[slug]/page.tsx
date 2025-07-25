'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'

const items = [
  {
    title: 'Travailler au Canada',
    slug: 'travailler-au-canada',
    description: 'Trouvez les opportunités pour immigrer et travailler légalement au Canada.',
    steps: [
      {
        title: 'Évaluation de votre profil',
        description:
          'Nous analysons vos compétences, diplômes et expériences pour identifier les programmes d’immigration les mieux adaptés (Entrée Express, permis de travail fermé, etc.).'
      },
      {
        title: 'Offres d’emploi disponibles',
        description:
          'Accédez à des postes vacants dans les secteurs en demande : technologie, santé, construction, agriculture, et plus encore.'
      },
      {
        title: 'Processus d’immigration',
        description:
          'Obtenez les documents nécessaires pour travailler légalement : EIMT, visa, permis de travail, etc. Notre équipe vous guide à chaque étape.'
      },
      {
        title: 'Installation et intégration',
        description: 'Nous vous accompagnons après votre arrivée : logement, compte bancaire, sécurité sociale, vie quotidienne.'
      }
    ],
    link: '/placement/contact'
  },
  {
    title: 'Travailler au Québec',
    slug: 'travailler-au-quebec',
    description: 'Découvrez les opportunités professionnelles au Québec et ses programmes dédiés aux travailleurs étrangers.',
    steps: [
      {
        title: 'Programmes spécifiques',
        description:
          'Découvrez les options comme le Programme de l’expérience québécoise (PEQ) ou les programmes de sélection des travailleurs qualifiés.'
      },
      {
        title: 'Contrats de travail',
        description: 'Nous vous mettons en relation avec des entreprises québécoises qui cherchent des talents étrangers.'
      },
      {
        title: 'Aide à la francisation',
        description: 'Des ressources et formations pour améliorer votre français si nécessaire.'
      },
      {
        title: 'Démarches administratives',
        description:
          'Support complet pour obtenir le Certificat d’acceptation du Québec (CAQ), les permis de travail et pour préparer votre arrivée.'
      }
    ],
    link: '/placement/contact'
  },
  {
    title: "Recruteur à l'International",
    slug: 'recruteur-international',
    description: 'Nous aidons les employeurs à recruter efficacement des talents qualifiés à l’étranger.',
    steps: [
      {
        title: 'Analyse de besoins RH',
        description: 'Évaluation de vos besoins pour cibler les bons profils à l’étranger.'
      },
      {
        title: 'Recherche de candidats',
        description: 'Accès à un réseau mondial de talents dans plusieurs domaines (TI, santé, transport, etc.).'
      },
      {
        title: 'Gestion administrative',
        description: 'Accompagnement dans les demandes d’EIMT, CAQ, permis de travail et autres démarches officielles.'
      },
      {
        title: 'Suivi post-recrutement',
        description: 'Nous assurons une bonne intégration des candidats et un suivi pour garantir leur succès en entreprise.'
      }
    ],
    link: '/placement/hiring'
  }
]

export default function PlacementCategory() {
  const { slug } = useParams<{ slug: string }>()
  const item = items.find((item) => item.slug === slug)
  if (!item) return notFound()

  return (
    <main className=' text-white px-6 py-10 lg:px-24'>
      <section className='max-w-3xl mx-auto flex flex-col'>
        <Link
          href={item.link}
          className='flex items-center group justify-center gap-x-1 w-fit self-center border-[1px] border-amber-300/30 text-white font-semibold py-2 px-4 rounded-full transition hover:bg-amber-500/20 hover:border-amber-500/50'
        >
          <span>Commencer maintenant</span>
          <ArrowRight className='group-hover:translate-x-1 transition-transform duration-200' size={15} />
        </Link>

        {/* Hero Section */}
        <div className='my-12 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gradient mb-4'>{item.title}</h1>
          <p className='text-gray-300 text-lg'>{item.description}</p>
        </div>

        {/* Section: Étapes */}
        <div className='space-y-10'>
          {item.steps?.map((step, index) => (
            <div key={index} className='hover:bg-gray-800/40 transition-colors duration-500  p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-semibold text-amber-300 mb-2'>{step.title}</h2>
              <p className='text-gray-400'>{step.description}</p>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className='mt-12 text-center'>
          <Link
            href={item.link}
            className='flex items-center group justify-center gap-x-1 w-fit self-center border-[1px] border-amber-300/30 text-white font-semibold py-3.5 px-6 rounded-full transition hover:bg-amber-500/20 hover:border-amber-500/50'
          >
            <span>Commencer maintenant</span>
            <ArrowRight className='group-hover:translate-x-1 transition-transform duration-200' size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
