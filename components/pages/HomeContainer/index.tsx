import mainImg from '@/public/img/main.webp'
import { Wrap, StyledMainImage } from './styles'

export const HomeContainer = () => {
  return (
    <Wrap>
      <StyledMainImage src={mainImg} width={3000} height={2000} alt="" />
    </Wrap>
  )
}
