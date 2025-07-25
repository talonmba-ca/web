'use client'
import FadeInImage from '@/components/global/FadeInImage'
import { copyToClipboard, FORMATIONS } from '@/lib/utils'
import { ArrowLeft, Copy } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const FormationDetails = () => {
  // get the id and slug from the url
  const { slug } = useParams<{ slug: string }>()
  //   const b = useScopedI18n('buttons')

  //   const { data, error, isError, isPending, refetch } = useAPI<IBlog>({ endpoint: `/blogs/${id}`, getOne: true })
  //   useEffect(() => {
  //     if (!data) return
  //     document.title = data.title
  //   }, [data])

  const router = useRouter()
  //   if (isError) return <RequestError error={error} retry={refetch} />
  //   if (isPending) return <LoadingFetching className='relative' />

  const data = FORMATIONS[0]

  console.log({ slug })

  return (
    <div className='flex items-start flex-col lg:flex-row mx-auto max-w-4xl p-4 gap-6'>
      <div className=' blog flex-1'>
        <button
          className='flex items-center gap-x-1 hover:gap-x-0 mb-4 hover:text-primary cursor-pointer hover:translate-x-1 duration-100 transition-all text-white/80'
          onClick={() => router.back()}
        >
          <ArrowLeft />
          <span>{'Retour'}</span>
        </button>
        <h1 className='font-bold text-2xl text-white'>{data?.title}</h1>
        {/* author and date */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between my-6 w-full'>
            <div className='author-avatar flex items-center gap-x-2'>
              <Image
                src={'/images/formation.svg'}
                alt='author'
                width={50}
                height={50}
                className='w-[50px] h-[50px] object-cover rounded-full bg-slate-700'
              />
              <div className='flex flex-col '>
                <span className='text-sm font-medium text-white/80 '>{'Reine Victoire'}</span>
                {/* <span className='text-xs text-gray-400'>{dayjs(data?.date).format('MMM DD, YYYY')}</span> */}
              </div>
            </div>
            <div className='share-actions flex items-center gap-x-2'>
              <button
                onClick={() => copyToClipboard(window.location.href)}
                className='w-12 h-12 rounded-full  flex items-center justify-center bg-slate-700 hover:bg-gray-900  text-white'
              >
                <Copy />
              </button>
            </div>
          </div>
        </div>

        <FadeInImage path={'/images/school.jpg'} className='rounded-xl overflow-hidden' />
        <div className='tags flex items-center gap-1 mt-2'>
          {data?.tags?.map((tag) => (
            <button
              key={tag}
              className='text-xs bg-gray-100  hover:bg-white dark:bg-dark3 dark:hover:bg-dark2 cursor-pointer  px-1 py-0.5 rounded-sm line-clamp-1 truncate text-balance'
            >
              {tag}
            </button>
          ))}
        </div>
        {/* description */}
        <div
          className='mt-6 whitespace-pre-line text-slate-100'
          dangerouslySetInnerHTML={{
            __html:
              data?.description +
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem, officia, aliquam perferendis vero suscipit tempore voluptas quibusdam quisquam laboriosam, enim iusto modi excepturi rerum non iste tenetur reiciendis rem maiores velit voluptates natus obcaecati? Ea possimus aliquid labore doloribus, fuga consequuntur, laborum eius, minima perspiciatis voluptates rerum doloremque architecto. Est ducimus nam error, totam nostrum, dicta molestiae ipsum praesentium architecto quibusdam, facere iusto recusandae. Id consequatur mollitia impedit sit alias, architecto, ipsam dignissimos quibusdam earum neque totam vitae libero. Dolores corporis obcaecati eum possimus vel ratione voluptate iure dolore? Enim expedita pariatur hic in possimus ut aut nihil a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem, officia, aliquam perferendis vero suscipit tempore voluptas quibusdam quisquam laboriosam, enim iusto modi excepturi rerum non iste tenetur reiciendis rem maiores velit voluptates natus obcaecati? Ea possimus aliquid labore doloribus, fuga consequuntur, laborum eius, minima perspiciatis voluptates rerum doloremque architecto. Est ducimus nam error, totam nostrum, dicta molestiae ipsum praesentium architecto quibusdam, facere iusto recusandae. Id consequatur mollitia impedit sit alias, architecto, ipsam dignissimos quibusdam earum neque totam vitae libero. Dolores corporis obcaecati eum possimus vel ratione voluptate iure dolore? Enim expedita pariatur hic in possimus ut aut nihil a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem, officia, aliquam perferendis vero suscipit tempore voluptas quibusdam quisquam laboriosam, enim iusto modi excepturi rerum non iste tenetur reiciendis rem maiores velit voluptates natus obcaecati? Ea possimus aliquid labore doloribus, fuga consequuntur, laborum eius, minima perspiciatis voluptates rerum doloremque architecto. Est ducimus nam error, totam nostrum, dicta molestiae ipsum praesentium architecto quibusdam, facere iusto recusandae. Id consequatur mollitia impedit sit alias, architecto, ipsam dignissimos quibusdam earum neque totam vitae libero. Dolores corporis obcaecati eum possimus vel ratione voluptate iure dolore? Enim expedita pariatur hic in possimus ut aut nihil a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem, officia, aliquam perferendis vero suscipit tempore voluptas quibusdam quisquam laboriosam, enim iusto modi excepturi rerum non iste tenetur reiciendis rem maiores velit voluptates natus obcaecati? Ea possimus aliquid labore doloribus, fuga consequuntur, laborum eius, minima perspiciatis voluptates rerum doloremque architecto. Est ducimus nam error, totam nostrum, dicta molestiae ipsum praesentium architecto quibusdam, facere iusto recusandae. Id consequatur mollitia impedit sit alias, architecto, ipsam dignissimos quibusdam earum neque totam vitae libero. Dolores corporis obcaecati eum possimus vel ratione voluptate iure dolore? Enim expedita pariatur hic in possimus ut aut nihil a.'
          }}
        />
      </div>

      <div className='sticky bottom-4 lg:top-12 bg-slate-900/60 rounded-xl w-full lg:w-[250px] p-4'>
        <div className='text-white'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vel doloremque iure tempore voluptates expedita blanditiis culpa
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-3'>Inscription ${data.price}</button>
      </div>
    </div>
  )
}

export default FormationDetails
