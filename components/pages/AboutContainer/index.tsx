import {
  StyledContainer,
  Section,
  SectionInner,
  Text,
  Biographies,
  BiographyItem,
  BiographyDate,
  BiographyProfession,
  BiographyRole,
  BiographyDetail,
  ExternalLink,
  StyledTagList,
  StyledIconList,
  StyledIconListItem,
  StyledHeading,
  List,
  ListItem,
  ListItemText,
  ListItemNote,
  SectionContent,
  ListItemLink,
  StyledOpenInNew,
} from './styles'
import {
  biographies,
  booksData,
  exhibitionsData,
  worksData,
  FeaturedInData,
} from './data'
import { Heading } from '@/components/atoms/Heading'
import { Xlogo } from '@/components/atoms/Icon/Xlogo'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Biography } from './types'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Note } from '@/components/atoms/Icon/Note'

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
