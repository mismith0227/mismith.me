import Image from 'next/image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'
import { IconList, IconListItem } from '@/components/molecules/IconList'

export const Wrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

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
