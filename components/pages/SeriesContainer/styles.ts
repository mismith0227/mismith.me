import Image from 'next/image'
import styled from '@emotion/styled'
import { Container } from '@/components/organisms/Container'

export const StyledContainer = styled(Container)``

export const StyledMainImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`
