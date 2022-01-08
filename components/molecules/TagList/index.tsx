import { Wrap, StyledTag } from './styles'

type Props = {
  className?: string
  items: string[]
}

export const TagList = ({ className, items }: Props) => {
  return (
    <Wrap className={className}>
      {items.map((item) => (
        <StyledTag key={item} isList>
          {item}
        </StyledTag>
      ))}
    </Wrap>
  )
}
