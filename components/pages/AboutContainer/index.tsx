import styled from '@emotion/styled'
import media from '@/styles/media'
import {
  biographies,
  booksData,
  exhibitionsData,
  worksData,
  FeaturedInData,
} from './data'
import { Xlogo } from '@/components/atoms/Icon/Xlogo'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Note } from '@/components/atoms/Icon/Note'
import { IconList, IconListItem } from '@/components/molecules/IconList'
import { TagList } from '@/components/molecules/TagList'
import { Container } from '@/components/organisms/Container'
import { Heading } from '@/components/atoms/Heading'
import { Logo } from '@/components/atoms/Icon/Logo'
import { OpenInNew } from '@/components/atoms/Icon/OpenInNew'

const StyledContainer = styled(Container)``

const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

const StyledLogo = styled(Logo)`
  margin-right: 16px;
  font-size: 2rem;
`

const Section = styled.section`
  margin: 80px 0 0;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.small} {
    margin: 64px auto 0;

    &:first-of-type {
      margin: 64px auto 0;
    }
  }
`

const SectionInner = styled.div``

const SectionContent = styled.div`
  margin: 24px 0 0;
`

const Text = styled.p`
  max-width: 700px;
`

const StyledTagList = styled(TagList)`
  max-width: 700px;
  margin-top: 16px;
`

const Biographies = styled.ul`
  margin: 36px 0 0;
  padding: 0;
  list-style: none;
`

const BiographyItem = styled.li`
  position: relative;
  padding: 0 0 52px 52px;

  ${media.medium} {
    flex-direction: column;
    padding: 0 0 36px 36px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 0;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border-radius: 9999px;
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 7px;
    width: 1px;
    height: 100%;
    background-color: #000;
  }

  &:first-of-type {
    &::before {
      background-color: #000;
    }
  }

  &:last-of-type {
    &::after {
      border-right: 1px dashed #aaa;
      left: 6px;
      background-color: #fff;
    }
  }
`

const BiographyDate = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`

const BiographyProfession = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

const BiographyRole = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`

const BiographyDetail = styled.p`
  margin: 14px 0 0;
  max-width: 700px;
  font-size: 14px;
  white-space: pre-wrap;
`

const StyledIconList = styled(IconList)`
  margin: 32px 0 0;
`

const StyledIconListItem = styled(IconListItem)``

const ExternalLink = styled.a`
  display: block;
  color: #000;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  gap: 0 16px;
`

const ListItemText = styled.p`
  margin: 0;
  width: 100px;
`

const ListItemNote = styled.p`
  margin: 0;
  font-weight: bold;
`

const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0 8px;
  color: #000;

  &:hover {
    text-decoration: none;
  }
`

const StyledOpenInNew = styled(OpenInNew)`
  font-size: 16px;
`

type Biography = {
  id: string
  startDate: string
  endDate?: string
  belongs: string
  role: string
  detail?: string
  skills?: string[]
}

export const AboutContainer = () => (
  <StyledContainer size="lg">
    <StyledHeading>About</StyledHeading>

    <Section>
      <Heading level={2}>Profile</Heading>
      <SectionInner>
        <Text>
          大阪拠点のフリーランスのエンジニア兼フォトグラファー。
          <br />
          2017年から写真を始め、ストリートフォトやポートレートなど様々なジャンルを撮影。
          <br />
          2023年7月頃からは全国のお祭りを中心に撮影しています。
        </Text>

        <SectionContent>
          <Heading level={3}>Links</Heading>
          <StyledIconList>
            <StyledIconListItem>
              <ExternalLink
                href="https://twitter.com/misumi_takuma/"
                target="_blank"
                aria-label="X"
                rel="noopener"
              >
                <Xlogo />
              </ExternalLink>
            </StyledIconListItem>
            <StyledIconListItem>
              <ExternalLink
                href="https://www.instagram.com/mismith0227/?hl=ja"
                target="_blank"
                aria-label="Instagram"
                rel="noopener"
              >
                <Instagram />
              </ExternalLink>
            </StyledIconListItem>
            <StyledIconListItem>
              <ExternalLink
                href="https://note.com/mismith"
                target="_blank"
                aria-label="Note"
                rel="noopener"
              >
                <Note />
              </ExternalLink>
            </StyledIconListItem>
            <StyledIconListItem>
              <ExternalLink
                href="https://github.com/mismith0227"
                target="_blank"
                aria-label="GitHub"
                rel="noopener"
              >
                <GitHub />
              </ExternalLink>
            </StyledIconListItem>
          </StyledIconList>
        </SectionContent>
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Books</Heading>
      <SectionInner>
        {booksData.map((item) => {
          return (
            <SectionContent key={item.id}>
              <Heading level={3}>{item.heading}</Heading>
              <List>
                {item.items.map((data) => {
                  return (
                    <ListItem key={data.id}>
                      <ListItemText>{data.date}</ListItemText>
                      {data.link ? (
                        <ListItemLink href={data.link} target="_blank">
                          <ListItemNote>{data.name}</ListItemNote>
                          <StyledOpenInNew />
                        </ListItemLink>
                      ) : (
                        <ListItemNote>{data.name}</ListItemNote>
                      )}
                    </ListItem>
                  )
                })}
              </List>
            </SectionContent>
          )
        })}
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Exhibitions</Heading>
      <SectionInner>
        {exhibitionsData.map((item) => {
          return (
            <SectionContent key={item.id}>
              <Heading level={3}>{item.heading}</Heading>
              <List>
                {item.items.map((data) => {
                  return (
                    <ListItem key={data.id}>
                      <ListItemText>{data.date}</ListItemText>
                      {data.link ? (
                        <ListItemLink href={data.link} target="_blank">
                          <ListItemNote>{data.name}</ListItemNote>
                          <StyledOpenInNew />
                        </ListItemLink>
                      ) : (
                        <ListItemNote>{data.name}</ListItemNote>
                      )}
                    </ListItem>
                  )
                })}
              </List>
            </SectionContent>
          )
        })}
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Works</Heading>
      <SectionInner>
        <List>
          {worksData.map((data) => {
            return (
              <ListItem key={data.id}>
                <ListItemText>{data.date}</ListItemText>
                {data.link ? (
                  <ListItemLink
                    href={data.link}
                    target={data.isExternal ? '_blank' : undefined}
                  >
                    <ListItemNote>{data.name}</ListItemNote>
                    {data.isExternal && <StyledOpenInNew />}
                  </ListItemLink>
                ) : (
                  <ListItemNote>{data.name}</ListItemNote>
                )}
              </ListItem>
            )
          })}
        </List>
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Featured in</Heading>
      <SectionInner>
        <List>
          {FeaturedInData.map((data) => {
            return (
              <ListItem key={data.id}>
                <ListItemText>{data.date}</ListItemText>
                {data.link ? (
                  <ListItemLink href={data.link} target="_blank">
                    <ListItemNote>{data.name}</ListItemNote>
                    <StyledOpenInNew />
                  </ListItemLink>
                ) : (
                  <ListItemNote>{data.name}</ListItemNote>
                )}
              </ListItem>
            )
          })}
        </List>
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Career</Heading>
      <SectionInner>
        <Biographies>
          {biographies.map((item: Biography) => (
            <BiographyItem key={item.id}>
              <BiographyProfession>{item.belongs}</BiographyProfession>
              <BiographyRole>{item.role}</BiographyRole>
              <BiographyDate>
                {item.startDate} ~ {item.endDate && item.endDate}
              </BiographyDate>

              {item.detail && <BiographyDetail>{item.detail}</BiographyDetail>}
              {item.skills && <StyledTagList items={item.skills} />}
            </BiographyItem>
          ))}
        </Biographies>
      </SectionInner>
    </Section>
  </StyledContainer>
)
