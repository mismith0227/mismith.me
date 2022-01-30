import { Wrap, Details, Summary, Title, List, Item, Link } from './styles'
import { Props } from './types'

export const Toc = ({ className, items }: Props) => {
  return (
    <Details className={className} open>
      <Summary>目次</Summary>
      <List className={className}>
        {items.map((item, index) => (
          <Item key={`${item.id}-${index}`} name={item.name}>
            <Link href={`#${item.id}`}>{item.text}</Link>
          </Item>
        ))}
      </List>
    </Details>
  )
}
