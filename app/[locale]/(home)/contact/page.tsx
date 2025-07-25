'use client'
import { handleContactSubmit, PrevState } from '@/actions/contact'
import FormError from '@/components/errors/FormError'
import ContactDetails from '@/components/global/ContactDetails'
import FormGroup from '@/components/global/FormGroup'
import Input from '@/components/global/Input'
import { SubmitButton } from '@/components/global/SubmitButton'
import { useActionState } from 'react'

const Contact = () => {
  // Initialize form state
  const initialState: PrevState = {
    message: null,
    errors: null,
    values: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      type: 'general'
    }
  }

  const [state, dispatch] = useActionState(handleContactSubmit, initialState)

  return (
    <section className='py-10 sm:py-16 lg:py-24'>
      <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12d gap-y-10'>
          <ContactDetails />
          <div className='overflow-hidden bg-white rounded-md'>
            <div className='p-6 sm:p-10'>
              <h3 className='text-2xl sm:text-4xl font-bold  bg-gradient-to-r from-emerald-600 via-amber-500 to-white bg-clip-text text-transparent'>
                Contactez-nous
              </h3>
              <p className='mt-4 text-base text-gray-600'>
                Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
              </p>
              <form action={dispatch} className='mt-4'>
                <div className=''>
                  <Input
                    label='Votre nom complet'
                    name='fullName'
                    placeholder='John Doe'
                    required
                    defaultValue={state.values?.fullName}
                    hasError={state.errors?.fullName}
                  />
                  <FormGroup>
                    <Input
                      label='Adresse e-mail'
                      id='email'
                      name='email'
                      inputMode='email'
                      placeholder='johndoe@example.com'
                      type='email'
                      required
                      defaultValue={state.values?.email}
                      hasError={state.errors?.email}
                    />
                    <Input
                      label='Téléphone'
                      type='tel'
                      inputMode='tel'
                      name='phone'
                      placeholder='+1234567890'
                      defaultValue={state.values?.phone}
                      hasError={state.errors?.phone}
                    />
                  </FormGroup>
                  <Input
                    label='Message'
                    name='message'
                    textArea
                    placeholder='Entrez votre message'
                    className='min-h-[90px]'
                    defaultValue={state?.values?.message}
                    hasError={state.errors?.message}
                  />
                  {state?.errors?.error && <FormError text={state.errors.error[0]} />}
                  {state?.message && <div className='mb-4 text-green-600'>{state.message}</div>}
                  <SubmitButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
