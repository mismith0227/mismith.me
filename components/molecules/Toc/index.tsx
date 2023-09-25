import { Details, Summary, List, Item, Link, ChildList } from './styles'
import { Props } from './types'

export const Toc = ({ className, items }: Props) => (
  <Details className={className} open>
    <Summary>目次</Summary>
    <List>
      {items.map((item, index) => (
        <Item key={`${item.id}-${index}`}>
          <Link href={`#${item.id}`}>{item.text}</Link>
          {item.childs.length > 0 && (
            <ChildList>
              {item.childs.map((item, index) => (
                <Item key={`${item.id}-${index}`}>
                  <Link href={`#${item.id}`}>{item.text}</Link>
                </Item>
              ))}
            </ChildList>
          )}
        </Item>
      ))}
    </List>
  </Details>
)
