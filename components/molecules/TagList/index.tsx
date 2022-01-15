import { Wrap, StyledTag } from './styles'
import { Props } from './types'

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
