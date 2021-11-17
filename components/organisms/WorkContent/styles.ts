import styled from '@emotion/styled'
import Link from 'next/link'

export const Container = styled.div`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 64px;
`

export const ThumbnailWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 0;
  width: 100%;
  height: 400px;
  background: #eee;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s;
  }

  &::after {
    content: 'View More';
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }
`

export const Thumbnail = styled.img`
  max-height: 80%;
  max-width: 90%;
`

export const Works = styled.ul`
  margin: 180px 0 0;
  padding: 0;
  list-style: none;
`

export const WorkItem = styled.li`
  margin: 120px 0 0;

  &:first-of-type {
    margin: 0;
  }
`

export const Date = styled.p`
  margin: 0;
  font-size: 14px;
`

export const WorkTitle = styled.h3`
  margin: 0;
  font-size: 36px;
`

export const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`

export const Description = styled.p`
  margin: 16px 0 0;
`

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`

export const TagItem = styled.li`
  margin: 0 8px 0 0;
  padding: 8px 16px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`
