import { Wrap, StyledMasonry, StyledImage } from './styles'
import { Props } from './types'

export const PhotoContent = ({ data }: Props) => {
  return (
    <Wrap>
      <StyledMasonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
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
