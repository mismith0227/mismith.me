import Image from 'next/image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'
import { IconList, IconListItem } from '@/components/molecules/IconList'

export const Wrap = styled.div`
  width: calc(100% - 80px);
  margin: 0 auto;

  ${media.medium} {
    width: 100%;
  }
`

export const SlideWrap = styled.div`
  position: relative;
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ArrowCommonStyle = () => {
  return css`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      display: block;
      position: relative;
      width: 16px;
      height: 16px;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
    }

    ${media.medium} {
      width: 36px;
      height: 36px;
      background-color: rgba(0, 0, 0, 0.3);

      &::before {
        width: 12px;
        height: 12px;
        border-color: #fff;
      }
    }

    ${media.small} {
      &::before {
        width: 8px;
        height: 8px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  `
}

export const ArrowLeft = styled.button`
  ${ArrowCommonStyle}

  left: -40px;

  &::before {
    transform: rotate(-135deg);
  }

  ${media.medium} {
    left: 0;

    &::before {
      right: -3px;
    }
  }
`

export const ArrowRight = styled.button`
  ${ArrowCommonStyle}

  right: -40px;

  &::before {
    transform: rotate(45deg);
  }

  ${media.medium} {
    right: 0;

    &::before {
      left: -3px;
    }
  }
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 0;
  gap: 0 8px;

  ${media.medium} {
    margin: 12px 0 0;
  }
`

type DotProps = {
  isCurrent: boolean
}

export const Dot = styled.button<DotProps>`
  width: 60px;
  height: 6px;
  border: none;
  background-color: ${({ isCurrent }) => (isCurrent ? '#000' : '#ddd')};

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    width: 40px;
    height: 4px;
  }
`

export const Profile = styled.div`
  width: 96%;
  margin: 64px auto 0;
  text-align: center;
`

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p``

export const StyledIconList = styled(IconList)`
  justify-content: center;
  margin: 32px 0 0;
`

export const StyledIconListItem = styled(IconListItem)``

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`
