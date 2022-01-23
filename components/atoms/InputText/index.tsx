import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

export const InputText = ({ type = 'text', ...props }: Props) => (
  <Wrap {...props} type={type} />
)
