import * as React from 'react'
import LoadingLogo from '../../molecules/LoadingLogo'
import { Wrap, Text } from './styles'

const WorkContent = () => {
  return (
    <Wrap>
      <LoadingLogo isloading={false} />
      <Text>お問い合わせありがとうございました。</Text>
      <Text>内容を確認の上、早めにご返信いたします。</Text>
    </Wrap>
  )
}

export default WorkContent
