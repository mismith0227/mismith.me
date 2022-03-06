import { Details, Summary, List, Item, StyledLink } from './styles'
import { Props } from './types'

export const Toc = ({ className, items }: Props) => {
  return (
    <Details className={className} open>
      <Summary>目次</Summary>
      <List className={className}>
        {items.map((item, index) => (
          <Item key={`${item.id}-${index}`} name={item.name}>
            <StyledLink to={item.id} smooth duration={400}>
              {item.text}
            </StyledLink>
          </Item>
        ))}
      </List>
    </Details>
  )
}
