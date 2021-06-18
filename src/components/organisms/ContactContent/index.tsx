import * as React from 'react'
import {
  Container,
  Title,
  Text,
  Content,
  Form,
  FormItem,
  Label,
  StyledTextInput,
  StyledTextAreaInput,
  StyledButton,
} from './styles'

export const ContactContent = () => (
  <Container>
    <Title>Contact</Title>

    <Content>
      <Text>
        お仕事の相談、ブログに関するご意見、趣味の写真に関するお誘い、美味しいご飯の情報などは、以下のフォームよりお問い合わせください
      </Text>
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
        <StyledButton type="submit">送信</StyledButton>
      </Form>
    </Content>
  </Container>
)
