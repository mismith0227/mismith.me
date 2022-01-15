import { Heading } from '@/components/atoms/Heading'
import { StyledContainer, Content, Section, Text } from './styles'

export const PolicyContent = () => (
  <StyledContainer>
    <Heading>Policy</Heading>

    <Content>
      <Section>
        <Heading level={2}>免責事項</Heading>

        <Text>
          当サイトに掲載されている情報の正確さについて可能な限り努力をしていますが、
          その正確性や適切性に問題がある場合、告知無しに情報を変更・削除する事があります。
          <br />
          当ブログの情報を用いて行う一切の行為、被った損害・損失に対しては、一切の責任を負いかねます。ご了承ください。
          <br />
          必ず各リンク先、オフィシャルサイトなどをご参照頂き、ご自身の判断、責任にてご利用頂きますようお願い申し上げます。
          <br />
          本免責事項及び、当サイトに記載されている情報は予告なしに変更、または削除されることがあります。予めご了承下さい。
        </Text>
      </Section>
    </Content>
  </StyledContainer>
)
