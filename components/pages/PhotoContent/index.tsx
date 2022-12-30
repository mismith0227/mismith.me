import { Wrap, StyledMasonry, StyledImage } from './styles'
import { Props } from './types'

export const PhotoContent = ({ data, category }: Props) => {
  console.log(category)
  return (
    <Wrap>
      <StyledMasonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 3, md: 7 }}
      >
        {data.map((item) => (
          <StyledImage
            key={item.id}
            src={item.image.url}
            alt={item.title}
            width={item.image.width}
            height={item.image.height}
          />
        ))}
      </StyledMasonry>
    </Wrap>
  )
}
