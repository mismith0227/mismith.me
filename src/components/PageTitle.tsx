import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  text: string
}

export const PageTitle = ({ text, className }: Props) => {
  return (
    <h1 className={twMerge('text-[32px] md:hidden font-bold', className)}>
      {text}
    </h1>
  )
}
