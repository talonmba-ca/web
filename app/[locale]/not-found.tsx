import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-white'>
      <h2 className='text-3xl font-bold text-red-400'>Not Found</h2>
      <p>Impossible de trouver la ressource demandée</p>
      <Link href='/' className=' underline my-6 text-white'>
        {` Retour à l'accueil`}
      </Link>
    </div>
  )
}
