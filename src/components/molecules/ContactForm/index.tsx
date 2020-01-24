import * as React from 'react'
import {
  Form,
  FormItem,
  Label,
  StyledTextInput,
  StyledTextAreaInput,
  StyledButton,
} from './styles'

const Navigation = React.memo(() => {
  return (
    <Form
      name="contact"
      method="POST"
      action="thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <StyledTextInput type="hidden" name="form-name" value="contact" />

      <FormItem>
        <Label>Name</Label>
        <StyledTextInput type="text" name="name" required />
      </FormItem>
      <FormItem>
        <Label>Email</Label>
        <StyledTextInput type="email" name="email" required />
      </FormItem>
      <FormItem>
        <Label>URL（任意）</Label>
        <StyledTextInput type="url" name="url" />
      </FormItem>
      <FormItem>
        <Label>Message</Label>
        <StyledTextAreaInput name="message" required></StyledTextAreaInput>
      </FormItem>
      <StyledButton type="submit">Submit</StyledButton>
    </Form>
  )
})

export default Navigation
