import styled from '@emotion/styled'

export const Container = styled.article`
  display: block;
  max-width: 1024px;
  margin: 180px auto 0;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 64px;
`

export const Text = styled.p``

export const Content = styled.div`
  margin: 180px 0 0;
`

export const Form = styled.form`
  width: 100%;
`

export const FormItem = styled.label`
  display: block;
  margin: 1.6rem 0 0;
  &:first-of-type {
    margin: 0;
  }
`

export const Label = styled.div`
  font-weight: bold;
`

export const StyledTextInput = styled.input`
  margin: 8px 0 0;
  padding: 0 8px;
  width: 100%;
  height: 40px;
`

export const StyledTextAreaInput = styled.textarea`
  margin: 8px 0 0;
  padding: 8px;
  width: 100%;
  min-height: 200px;
`

export const StyledButton = styled.button`
  width: 100%;
  margin: 64px 0 0;
  box-sizing: border-box;
  border: none;
  background: #000;
  color: #fff;
  padding: 12px 24px;
  transition: 0.2s;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #555;
  }
`
