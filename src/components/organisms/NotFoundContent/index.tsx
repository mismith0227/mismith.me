import * as React from 'react'
import LoadingLogo from '../../molecules/LoadingLogo'
import { Wrap, Text } from './styles'

const NotFoundContent = () => {
  return (
    <Wrap>
      <LoadingLogo isloading={false} />
      <Text>Not Found</Text>
    </Wrap>
  )
}

export default NotFoundContent
