import { useEffect, useState } from 'react'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import main1Img from '@/public/img/main-1.webp'
import main2Img from '@/public/img/main-2.webp'
import main3Img from '@/public/img/main-3.webp'
import media from '@/styles/media'

const Wrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;

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

type StyleProps = {
  iscurrent: string
}

const StyledMainImage = styled(Image)<StyleProps>`
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

const SlideBar = styled.div`
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

const SlideBarItem = styled.div<StyleProps>`
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

const ViewMore = styled(Link)`
  position: absolute;
  right: 24px;
  bottom: 64px;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  color: #fff;
  border: 1px solid #fff;
  text-decoration: none;
  transition: 0.2s;
  font-size: 14px;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  ${media.small} {
    right: 8px;
    bottom: 40px;

    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }
`

const images = [main1Img, main2Img, main3Img]

export const HomeContainer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Wrap>
      {images.map((image, index) => (
        <StyledMainImage
          key={`image-${index}`}
          src={image}
          width={3000}
          height={2000}
          alt=""
          iscurrent={`${index === currentImageIndex}`}
        />
      ))}
      <ViewMore href="series">View More →</ViewMore>
      <SlideBar>
        {[...Array(images.length).keys()].map((index) => {
          return (
            <SlideBarItem
              key={index}
              iscurrent={`${index === currentImageIndex}`}
            />
          )
        })}
      </SlideBar>
    </Wrap>
  )
}
