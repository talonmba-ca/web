import { cn } from '@/lib/utils'

const ChevronDownIcon = ({ className, ...rest }: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn('icon icon-tabler icon-tabler-chevron-down', className)}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M6 9l6 6l6 -6'></path>
    </svg>
  )
}

export default ChevronDownIcon
