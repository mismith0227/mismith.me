import Link from 'next/link'
import { Xlogo } from './Icon/Xlogo'
import { BASE_URL } from '@/settings/siteSettings'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  category: string
  title: string
  contentId: string
}

export const ShareButton = (props: Props) => {
  const { category, contentId, title, className } = props

  const shareUrl = `${BASE_URL}/blog/${category}/${contentId}`
  const xLink = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`

  return (
    <Link
      aria-label="x share"
      href={xLink}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        'flex items-center justify-center h-12 w-12 text-lg no-underline bg-black text-white transition-all duration-400 hover:rounded-[50%] rounded-md',
        className
      )}
    >
      <Xlogo className="w-6 h-auto" />
    </Link>
  )
}
