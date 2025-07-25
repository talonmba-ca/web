import Link from 'next/link'
import React from 'react'

function Logistics() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-white bg-black'>
      <div className='flex items-center justify-center flex-col gap-y-6 p-4 rounded-md bg-slate-800 max-w-[450px] text-lg font-medium'>
        <span>{`cette page est en cours de développement. Veuillez revenir plus tard pour plus d'informations.`}</span>
        <Link href='/'>
          <span className='ml-2 text-blue-400 hover:underline'>{`Retour à l'accueil`}</span>
        </Link>
      </div>
    </div>
  )
}

export default Logistics
