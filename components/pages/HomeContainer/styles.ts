import Image from 'next/image'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import media from '@/styles/media'
import Link from 'next/link'

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

type Props = {
  iscurrent: string
}

export const StyledMainImage = styled(Image)<Props>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${({ iscurrent }) => (iscurrent === 'true' ? 1 : 0)};
  transition: opacity 1.5s ease;
`

export const SlideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  gap: 0 16px;
  bottom: 40px;
  left: 0;
  right: 24px;
  margin: auto;
  z-index: 5;

  ${media.small} {
    gap: 0 8px;
    right: 8px;
    bottom: 16px;
  }
`

const barAnimation = keyframes`
0%{
  transform: scaleX(0);
}
100% {
  transform: scaleX(1);
}
`

export const SlideBarItem = styled.div<Props>`
  position: relative;
  width: 100px;
  height: 4px;
  background-color: #808080;

  ${media.small} {
    width: 50px;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform-origin: top left;
    background-color: #fff;
    transform: scaleX(0);

    ${({ iscurrent }) =>
      iscurrent === 'true' &&
      css`
        animation: ${barAnimation} 6s linear infinite;
      `}
  }
`

export const ViewMore = styled(Link)`
  position: absolute;
  right: 8px;
  bottom: 40px;
  z-index: 5;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  color: #fff;
  border: 1px solid #fff;
  text-decoration: none;

  ${media.small} {
    display: inline-flex;
  }
`
