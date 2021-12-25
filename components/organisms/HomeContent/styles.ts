import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import media from '@/styles/media'

export const Container = styled.div``

export const MainVisual = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

export const MainVisualText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-weight: bold;
  line-height: 1.4;
  font-size: 8.2vw;
  width: 90%;
  margin: 0;
`

export const Scroll = styled.div`
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 1px;
  height: 15vh;
  background-color: #d3d3d3;
  overflow: hidden;
`

const scrollAnimation = keyframes`
  0% {
    transform: translate3d(0, -8vh, 0);
  }

  60% {
    transform: translate3d(0, 10vh, 0);
  }

  100% {
    transform: translate3d(0, 16vh, 0);
  }
`

export const ScrollInner = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 4vh;
  background: #222;
  transform: translate3d(0, -8vh, 0);
  animation: ${scrollAnimation} 1.5s linear infinite;
`

export const Content = styled.div`
  display: block;
  max-width: 800px;
  width: 96%;
  margin: 180px auto 0;

  ${media.small} {
    margin: 80px auto 0;
  }
`

export const Section = styled.section`
  margin: 180px 0 0;

  ${media.small} {
    margin: 80px auto 0;
  }
`

export const SectionInner = styled.div`
  margin: 40px 0 0;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 42px;
`

export const SubTitle = styled.h3`
  margin: 32px 0 0;
  font-size: 24px;
`

export const Text = styled.p``

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
`

export const TagItem = styled.li`
  margin: 8px 8px 0 0;
  padding: 4px 8px;
  background-color: #000;
  color: #fff;
  font-size: 14px;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Biographies = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const BiographyItem = styled.li`
  display: flex;
  position: relative;
  padding: 0 0 36px 36px;

  ${media.medium} {
    flex-direction: column;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 0;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border-radius: 9999px;
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 7px;
    width: 1px;
    height: 100%;
    background-color: #000;
  }

  &:last-of-type {
    padding-bottom: 0;

    &::before {
      background-color: #000;
    }

    &::after {
      border-right: 1px dashed #aaa;
      left: 6px;
      background-color: #fff;
    }
  }
`

export const BiographyDate = styled.p`
  width: 128px;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

export const BiographyRight = styled.div`
  flex: 1;
`

export const BiographyTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

export const BiographyDetail = styled.p`
  margin: 16px 0 0;
  font-size: 14px;
`

export const BiographySkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0;
  padding: 0;
  list-style: none;
`

export const BiographySkillItem = styled.li`
  margin: 16px 8px 0 0;
  padding: 4px 8px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
`

export const Activity = styled.dl``

export const ActivityItem = styled.div`
  margin: 24px 0 0;
`

export const ActivityTerm = styled.dt`
  font-weight: bold;
`

export const ActivityDescription = styled.dd`
  margin: 4px 0 0;
  overflow-wrap: break-word;
`

export const SnsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SnsItem = styled.li`
  margin: 32px 16px 0 0;

  &:last-of-type {
    margin-right: 0;
  }
`

export const ExternalLink = styled.a`
  color: #000;
`
