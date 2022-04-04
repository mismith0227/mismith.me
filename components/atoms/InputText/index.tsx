import * as React from 'react'
import { Props } from './types'
import { Input } from './styles'

export const InputText = ({ type = 'text', ...props }: Props) => (
  <Input {...props} type={type} />
)
