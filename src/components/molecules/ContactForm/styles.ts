import styled from 'styled-components'
import TextInput from '../../atoms/TextInput'
import TextAreaInput from '../../atoms/TextAreaInput'
import Button from '../../atoms/Button'

export const Form = styled.form`
  width: 100%;
`

export const FormItem = styled.label`
  display: block;
  margin: 1.6rem 0 0;

  &:first-child {
    margin: 0;
  }
`

export const Label = styled.div`
  font-weight: bold;
`

export const StyledTextInput = styled(TextInput)``

export const StyledTextAreaInput = styled(TextAreaInput)`
  min-height: 20rem;
`

export const StyledButton = styled(Button)`
  margin: 1.6rem 0 0;
`
