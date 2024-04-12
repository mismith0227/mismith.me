import Image from 'next/image'
import { StyledContainer, StyledThumbnail } from './styles'
import { Props } from './types'

export const SeriesContainer = ({ data }: Props) => {
  const renderImages = (
    images?: { url: string; width: number; height: number }[]
  ) => {
    if (!images) {
      return null
    }
    const filteredImages = images.slice(0, 2)

    return (
      <div>
        {filteredImages.map((image) => (
          <StyledThumbnail
            src={image.url}
            key={image.url}
            alt=""
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
    )
  }
  return (
    <StyledContainer size="lg">
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.category_name}</div>
          {renderImages(item.images)}
        </div>
      ))}
    </StyledContainer>
  )
}
