import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = async (text: string, alertTitle: string | null = null) => {
  await navigator.clipboard.writeText(text)
  console.log(alertTitle)
  // try {
  //   // toast.success(alertTitle || 'Text copied to clipboard')
  //   // toast.success(alertTitle || 'Text copied to clipboard')
  // } catch (err) {
  //   // toast.error(`Failed to copy text: ${err} `)
  // }
}

export const isStringArray = (arr: any[]): boolean => Array.isArray(arr) && arr.every((item) => typeof item === 'string')

export const FORMATIONS = [
  {
    id: 'F001',
    title: 'Développer une culture d’apprentissage agile',
    category: { id: 'C01', name: 'Développement organisationnel' },
    tags: ['apprentissage', 'agilité', 'culture'],
    format: 'hybride',
    type: 'formation',
    description: 'Apprenez à instaurer une culture d’apprentissage continue et agile au sein de votre organisation.',
    price: 1200,
    isFree: false,
    niveau: 'stratégique',
    thumbnail: 'https://example.com/thumbnails/culture-apprentissage.jpg'
  },
  {
    id: 'F002',
    title: 'Former efficacement en milieu de travail',
    category: { id: 'C01', name: 'Développement organisationnel' },
    tags: ['formation', 'terrain', 'employés'],
    format: 'ensalle',
    type: 'formation',
    description: 'Techniques concrètes pour assurer un transfert immédiat des apprentissages en milieu de travail.',
    price: 900,
    isFree: false,
    niveau: 'opérationnel',
    thumbnail: 'https://example.com/thumbnails/formation-travail.jpg'
  },
  {
    id: 'F003',
    title: 'Capsule : Résistance au changement',
    category: { id: 'C02', name: 'Gestion du changement' },
    tags: ['changement', 'résistance', 'adaptation'],
    format: 'enligne',
    type: 'capsule',
    description: 'Une courte capsule pour comprendre les mécanismes de résistance au changement et comment y répondre.',
    price: 0,
    isFree: true,
    niveau: 'transversal',
    thumbnail: 'https://example.com/thumbnails/resistance-changement.jpg'
  },
  {
    id: 'F004',
    title: 'Leadership en contexte de transformation',
    category: { id: 'C03', name: 'Leadership' },
    tags: ['leadership', 'transformation', 'gestion'],
    format: 'hybride',
    type: 'conference',
    description: 'Conférence inspirante sur le rôle du leadership en période de changement organisationnel.',
    price: 500,
    isFree: false,
    niveau: 'stratégique',
    thumbnail: 'https://example.com/thumbnails/leadership-transfo.jpg'
  },
  {
    id: 'F005',
    title: 'Concevoir une stratégie de développement des compétences',
    category: { id: 'C01', name: 'Développement organisationnel' },
    tags: ['stratégie', 'RH', 'compétences'],
    format: 'enligne',
    type: 'formation',
    description: 'Étapes concrètes pour bâtir une stratégie efficace de développement des compétences à l’échelle de l’organisation.',
    price: 1500,
    isFree: false,
    niveau: 'stratégique',
    thumbnail: 'https://example.com/thumbnails/strategie-competences.jpg'
  },
  {
    id: 'F006',
    title: 'Initiation à l’approche agile pour formateurs',
    category: { id: 'C04', name: 'Méthodologie agile' },
    tags: ['agilité', 'formateurs', 'méthodes'],
    format: 'enligne',
    type: 'formation',
    description: 'Découvrez les principes de l’approche agile et comment les intégrer dans vos pratiques de formation.',
    price: 0,
    isFree: true,
    niveau: 'transversal',
    thumbnail: 'https://example.com/thumbnails/initiation-agile.jpg'
  }
]

export const DOT = '• '

export const OUR_SERVICES = [
  {
    title: 'TI & CYBERSECURITÉ',
    icon: 'S',
    description:
      'Nos spécialistes vous aident à prévenir les menaces, vulnérabilités et incidents dans vos infrastructures TI en infonuagique et sur site.',
    link: '/security',
    background: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)',
    extraClass: 'hover:border-[1px]l hover:border-pink-200',
    iconClass: 'shadow-pink-500'
  },
  {
    title: 'LOGISTIQUE ET TRANSPORT',
    icon: 'L',
    description:
      'Nos spécialistes vous offrent enfin, dans le respect des normes nationales et internationales en vigueur, des services de grande qualité en logistique et transport, d’une part, et en placement et recrutement à l’étranger, d’autre part.',
    link: '/logistics',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-green-200',
    iconClass: 'shadow-green-500'
  },
  {
    title: 'FORMATION',
    icon: 'F',
    description: 'Nos spécialistes vous aident par ailleurs à développer votre organisation dans une approche pragmatique de la formation.',
    link: '/formation',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000',
    extraClass: 'hover:border-[1px]l hover:border-amber-200',
    iconClass: 'shadow-amber-500'
  },
  {
    title: 'PLACEMENT ET RECRUTEMENT À L’ÉTRANGER',
    icon: 'P',
    description:
      'Nos spécialistes vous offrent enfin, dans le respect des normes nationales et internationales en vigueur, des services de grande qualité en logistique et transport, d’une part, et en placement et recrutement à l’étranger, d’autre part.',
    link: '/placement',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000',
    extraClass: ' hover:border-blue-200',
    iconClass: 'shadow-blue-500'
  }
]
