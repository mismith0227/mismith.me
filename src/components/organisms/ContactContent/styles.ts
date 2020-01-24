import styled from 'styled-components'
import ContactForm from '../../molecules/ContactForm'

export const Wrap = styled.div`
  display: block;
  width: 90%;
  max-width: 70rem;
  margin: 12rem auto;
`

export const Title = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 8rem;
  margin: 0;
  text-align: center;
`

export const Text = styled.p`
  font-size: 1.6rem;
  margin: 2.4rem 0 0;
`

export const StyledContactForm = styled(ContactForm)`
  margin: 4.8rem 0 0;
`
