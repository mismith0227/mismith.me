import { Heading1, Heading2, Heading3, Heading4 } from './styles'

type Props = {
  className?: string
  readonly children: React.ReactNode
  level?: 1 | 2 | 3 | 4
}

export const Heading = ({ className, children, level = 1 }: Props) => {
  switch (level) {
    case 1:
      return <Heading1 className={className}>{children}</Heading1>
    case 2:
      return <Heading2 className={className}>{children}</Heading2>
    case 3:
      return <Heading3 className={className}>{children}</Heading3>
    case 4:
      return <Heading4 className={className}>{children}</Heading4>
  }
}
