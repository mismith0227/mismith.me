import mainImg from '@/public/img/main.webp'
import { Wrap, StyledMainImage } from './styles'
import { Props } from './types'
import Image from 'next/image'

export const HomeContainer = ({ data }: Props) => {
  return (
    <Wrap>
      <StyledMainImage src={mainImg} width={3000} height={2000} alt="" />
    </Wrap>
  )
}
