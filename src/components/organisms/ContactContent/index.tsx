import * as React from 'react'
import ContactForm from '../../molecules/ContactForm'
import LoadingLogo from '../../molecules/LoadingLogo'
import { Wrap, Text } from './styles'

const ContactContent = () => {
  return (
    <Wrap>
      <LoadingLogo isloading={false} />
      <Text>
        お仕事の相談、ブログに関するご意見、趣味の写真に関するお誘い、美味しいご飯の情報などは、以下のフォームよりお問い合わせください
      </Text>
      <ContactForm />
    </Wrap>
  )
}

export default ContactContent
