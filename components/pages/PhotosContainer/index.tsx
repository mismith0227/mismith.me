import {
  StyledContainer,
  Inner,
  StyledHeading,
  StyledLink,
  ThumbnailWrap,
  StyledThumbnail,
  Title,
  Content,
} from './styles'
import { Props } from './types'

export const PhotosContainer = ({ data }: Props) => {
  console.log(data)

  return (
    <StyledContainer size="lg">
      <StyledHeading>Photos</StyledHeading>
      <Inner>
        {data.map((item) => (
          <Content key={item.id}>
            <Title>{item.title}</Title>
            <StyledLink href={`/photos/${item.id}`}>
              <ThumbnailWrap>
                <StyledThumbnail
                  src={item.feature_image.url}
                  alt=""
                  width={item.feature_image.width}
                  height={item.feature_image.height}
                />
              </ThumbnailWrap>
            </StyledLink>
          </Content>
        ))}
      </Inner>
    </StyledContainer>
  )
}
