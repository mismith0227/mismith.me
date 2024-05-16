import styled from '@emotion/styled'
import { Toc as TocTypes } from '@/types/Toc'

const Details = styled.details`
  padding: 8px;
  background-color: #f5f8fa;
`

const Summary = styled.summary`
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

const List = styled.ul`
  margin: 0;
  padding: 8px 16px 8px;
  list-style: none;
  font-size: 14px;
`

const Item = styled.li`
  padding-left: 16px;
  position: relative;
  font-weight: bold;
  margin-top: 8px;

  &:first-of-type {
    margin-top: 0;
  }

  &:before {
    content: '';
    display: before;
    height: 1px;
    width: 8px;
    background: #000;
    position: absolute;
    left: 0;
    top: 0.9em;
  }
`

const ChildList = styled.ul`
  margin: 0;
  padding: 8px 0 8px;
  list-style: none;
`

const Link = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

type Props = {
  className?: string
  items: TocTypes[]
}

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
