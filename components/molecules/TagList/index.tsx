import styled from '@emotion/styled'
import { Tag } from '@/components/atoms/Tag'

const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledTag = styled(Tag)``

type Props = {
  className?: string
  items: string[]
}

export const TagList = ({ className, items }: Props) => (
  <Wrap className={className}>
    {items.map((item) => (
      <StyledTag key={item} isList>
        {item}
      </StyledTag>
    ))}
  </Wrap>
)
