import Input from '@/components/global/Input'

const ComponentName = () => {
  return (
    <section className='py-10 bg-emerald-900/20d sm:py-16 lg:py-24'>
      <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 gap-y-10'>
          <div className='flex flex-col lg:py-5 items-start md:items-center justify-start  '>
            <div className='md:p-12'>
              <ul className='space-y-12 flex flex-col md:space-y-16  w-full'>
                <li className='rounded-lg  w-full'>
                  <h3 className='text-lg font-semibold text-white'>Heures de Bureau</h3>
                  <p className='mt-3 text-lg font-normal text-gray-400'>
                    Lundi-Vendredi <br />
                    8:00 am à 17:45 pm
                  </p>
                </li>

                <li>
                  <h3 className='text-lg font-semibold text-white'>Notre Adresse</h3>
                  <p className='mt-3 text-lg font-normal text-gray-400'>
                    1929 Rue Victor L Laurin, <br />
                    Quebec, G2E 5Y6, Canada
                  </p>
                </li>

                <li>
                  <h3 className='text-lg font-semibold text-white'>Contactez-nous</h3>
                  <p className='mt-3 text-lg font-normal text-gray-400'>
                    infos@talonmba.ca <br />
                    (+1) 418 527 8842
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className=''>
            <div className='overflow-hidden bg-white rounded-md'>
              <div className='p-6 sm:p-10'>
                <h3 className='text-3xl font-semibold  bg-gradient-to-r from-emerald-300    via-amber-300 to-white bg-clip-text text-transparent'>
                  Contactez-nous
                </h3>
                <p className='mt-4 text-base text-gray-600'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                <form action='#' method='POST' className='mt-4'>
                  <div className='space-y-6'>
                    <Input label='Votre nom' name='name' placeholder='Entrez votre nom complet' required />
                    <div>
                      <label htmlFor='' className='text-base font-medium text-gray-900'>
                        Votre nom{' '}
                      </label>
                      <div className='mt-2.5 relative'>
                        <input
                          type='text'
                          name=''
                          id=''
                          placeholder='Enter your full name'
                          className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500'
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor='' className='text-base font-medium text-gray-900'>
                        Adresse e-mail
                      </label>
                      <div className='mt-2.5 relative'>
                        <input
                          type='text'
                          name=''
                          id=''
                          placeholder='Enter your full name'
                          className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500'
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor='' className='text-base font-medium text-gray-900'>
                        But
                      </label>
                      <div className='mt-2.5 relative'>
                        <select
                          name='purpose'
                          id=''
                          className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500'
                        >
                          <option value=''>Sélectionnez un but</option>
                          <option value='training'>Accompagnement</option>
                          <option value='consultation'>Conseil</option>
                          <option value='other'>Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor='' className='text-base font-medium text-gray-900'>
                        Message
                      </label>
                      <div className='mt-2.5 relative'>
                        <textarea
                          name=''
                          id=''
                          placeholder='Enter your project brief'
                          className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500'
                          rows={4}
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-800 border border-transparent rounded-md focus:outline-none hover:bg-emerald-600 focus:bg-emerald-600'
                      >
                        Envoyer le message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ComponentName
