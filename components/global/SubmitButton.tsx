'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type='submit' className='py-6 bg-emerald-800 hover:bg-emerald-600 w-full font-semibold text-base'>
      {pending ? 'Envoi en cours...' : 'Envoyer votre message'}
    </Button>
  )
}
