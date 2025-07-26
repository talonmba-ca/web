import { DetailsSummaryFAQ } from '@/components/global/DetailsSummaryFAQ'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  openGraph: {
    type: 'website',
    url: 'https://dooke.app',
    title: 'FAQ',
    images: [
      {
        url: `https://dooke.app/assets/images/openGraph/faq.webp`
      }
    ]
  },
  twitter: {
    title: 'FAQ',
    card: 'summary_large_image',
    images: [
      {
        url: `https://dooke.app/assets/images/openGraph/faq.webp`
      }
    ]
  }
}

const faQuestions = [
  {
    question: 'What is Dooke?',
    answer: 'Dooke is a free app that helps Haitians learn English with fun, interactive lessons.'
  },
  {
    question: 'How much does Dooke cost?',
    answer: 'Dooke is completely free to use.'
  },
  {
    question: 'Can I use Dooke on any device?',
    answer: `Yes, Dooke is available on both <a class='text-primary hover:underline' target='_blank' href='${process.env.NEXT_PUBLIC_IOS_APP_URL}'>IOS</a> and <a class='text-primary hover:underline' target='_blank' href='${process.env.NEXT_PUBLIC_ANDROID_APP_URL}'>Android</a>.`
  },
  {
    question: 'How can I contact Dooke?',
    answer:
      "You can reach us by emailing <a class='text-primary hover:underline' target='_blank' href='mailto:support@dooke.app'>support@dooke.app</a> or visiting <a class='text-primary hover:underline' target='_blank' href='https://www.dooke.app/contact'>our contact page</a> for feature updates and more information."
  },
  {
    question: 'How can I support Dooke?',
    answer:
      "You can support by clicking on this <a class='text-primary hover:underline' target='_blank' href='https://www.dooke.app/donate'>link</a> or visiting <a class='text-primary hover:underline' target='_blank' href='https://www.dooke.app/donate'>our donation page</a>."
  },
  {
    question: 'How do you protect my information?',
    answer:
      "We take your privacy seriously. Your information is secured, and you can read more about our practices in our <a class='text-primary hover:underline' target='_blank' href='https://dooke.app/en/privacy-policy'>Privacy Policy</a>."
  }
]

const Contact = async () => {
  return (
    <>
      <div className='py-6 flex flex-col justify-center p-4 md:p-12 w-full md:max-w-4xl mx-auto my-10'>
        <div className='flex flex-col gap-y-4'>
          {faQuestions.map((faq, index) => (
            <DetailsSummaryFAQ
              name='faq'
              key={index}
              summary={faq.question}
              summaryCLassName='bg-white shadow-1d hover:bg-gray-100 shadow-emerald-400'
            >
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} className='p-4' />
            </DetailsSummaryFAQ>
          ))}
        </div>

        <div className='my-6 bg-emerald-800/20 text-white p-4 border border-emerald-700/50'>
          <span>
            Did not find the answer you were looking for?{' '}
            <Link className='text-white font-medium underline' href='/contact'>
              Contact us
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default Contact
