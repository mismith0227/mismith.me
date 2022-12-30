import { Wrap, List, Item, StyledImage } from './styles'
import { Props } from './types'

export const TopContent = ({ data }: Props) => {
  return (
    <Wrap>
      <List>
        {data.map((item) => (
          <Item key={item.id}>
            <StyledImage
              key={item.id}
              src={item.image.url}
              alt={item.title}
              width={item.image.width}
              height={item.image.height}
            />
          </Item>
        ))}
      </List>
    </Wrap>
  )
}
