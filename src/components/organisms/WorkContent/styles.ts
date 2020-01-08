import styled from 'styled-components'
import media from '../../../styles/media'

export const Wrap = styled.div`
  display: block;
  width: 100%;
  max-width: 102.4rem;
  margin: 12rem auto;
`

export const Title = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 8rem;
  margin: 0;
  text-align: center;
`

export const LeadText = styled.p`
  font-size: 1.6rem;
  margin: 2.4rem 0 0;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
`

export const Item = styled.li`
  display: block;
  padding: 0;
  list-style: none;
  width: 48%;
  width: ${props => (props.display === 'grid' ? '48%' : '100%')};
  margin: 0 0 5.6rem 0;

  ${media.small} {
    width: 100%;
    margin: 0 0 4.8rem 0;
  }
`

export const DisplayList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 8rem 0 0;
  padding: 0;
`

export const DisplayItem = styled.li`
  list-style: none;
  width: 34px;
  height: 34px;
  margin: 0 0 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: ${props => (props.display ? '0.1rem solid #000' : 'none%')};

  &:hover {
    cursor: pointer;
  }
`
