import { Container } from '@/src/components/Container'
import { PageTitle } from '@/src/components/PageTitle'
import { Section } from './component/Section'
import { Heading } from '@/src/components/Heading'
import { SectionContent } from './component/SectionContent'
import { Xlogo } from '@/src/components/Icon/Xlogo'
import { Instagram } from '@/src/components/Icon/Instagram'
import { Note } from '@/src/components/Icon/Note'
import { GitHub } from '@/src/components/Icon/GitHub'
import {
  awardData,
  biographies,
  booksData,
  exhibitionsData,
  links,
  worksData,
} from './data'
import { List } from './component/List'
import { ListItem } from './component/ListItem'
import { ListItemLabel } from './component/ListItemLabel'
import { ListItemLink } from './component/ListItemLink'
import { ListItemNote } from './component/ListItemNote'
import { OpenInNew } from '@/src/components/Icon/OpenInNew'
import { Metadata } from 'next'

const title = 'About'
const description = 'このサイトについて'

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default async function About() {
  const getLinkIcon = (value: string) => {
    switch (value) {
      case 'x':
        return <Xlogo className='text-[24px]' />
      case 'instagram':
        return <Instagram className='text-[24px]' />
      case 'note':
        return <Note className='text-[44px]' />
      case 'github':
        return <GitHub className='text-[28px]' />
    }
  }
  return (
    <Container size="lg">
      <PageTitle text="About" />

      <Section>
        <Heading level={2}>Profile</Heading>
        <div>
          <p className="max-w-[700px]">
            大阪拠点のフリーランスのエンジニア。
            <br />
            2017年から写真を始め、ストリートフォトやポートレートなど様々なジャンルを撮影。
            <br />
            2023年7月頃からは全国のお祭りを中心に撮影しています。
          </p>
        </div>
        <SectionContent>
          <ul className="flex mt-6 gap-4 p-0 list-none">
            {links.map((l) => (
              <li
                key={l.id}
                className="transition duration-200 hover:opacity-60 flex items-center"
              >
                <a
                  href={l.href}
                  target="_blank"
                  aria-label={l.label}
                  rel="noopener"
                  className="block text-black dark:text-white"
                >
                  {getLinkIcon(l.id)}
                </a>
              </li>
            ))}
          </ul>
        </SectionContent>
      </Section>

      <Section>
        <Heading level={2}>Award</Heading>
        <div>
          {awardData.map((a) => {
            if (a.items.length === 0) {
              return null
            }
            return (
              <SectionContent key={a.id}>
                <Heading level={3}>{a.heading}</Heading>
                <List>
                  {a.items.map((data) => {
                    return (
                      <ListItem key={data.id}>
                        <ListItemLabel>{data.date}</ListItemLabel>
                        {data.link ? (
                          <ListItemLink href={data.link} external>
                            <ListItemNote>
                              {data.name} {data.rank} {('country' in data && data.country) ? `(${data.country})` : ''}
                            </ListItemNote>
                            <OpenInNew className="text-[16px]" />
                          </ListItemLink>
                        ) : (
                          <ListItemNote>
                            {data.name} {data.rank} {('country' in data && data.country) ? `(${data.country})` : ''}
                          </ListItemNote>
                        )}
                      </ListItem>
                    )
                  })}
                </List>
              </SectionContent>
            )
          })}
        </div>
      </Section>

      <Section>
        <Heading level={2}>Exhibitions</Heading>
        <div>
          {exhibitionsData.map((item) => {
            return (
              <SectionContent key={item.id}>
                <Heading level={3}>{item.heading}</Heading>
                <List>
                  {item.items.map((data) => {
                    return (
                      <ListItem key={data.id}>
                        <ListItemLabel>{data.date}</ListItemLabel>
                        {data.link ? (
                          <ListItemLink href={data.link} external>
                            <ListItemNote>{data.name}</ListItemNote>
                            <OpenInNew className="text-[16px]" />
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
        </div>
      </Section>

      <Section>
        <Heading level={2}>Books</Heading>
        <div>
          {booksData.map((b) => (
            <SectionContent key={b.id}>
              <Heading level={3}>{b.heading}</Heading>
              <List>
                {b.items.map((data) => (
                  <ListItem key={data.id}>
                    <ListItemLabel>{data.date}</ListItemLabel>
                    {data.link ? (
                      <ListItemLink href={data.link} external>
                        <ListItemNote>{data.name}</ListItemNote>
                        <OpenInNew className="text-[16px]" />
                      </ListItemLink>
                    ) : (
                      <ListItemNote>{data.name}</ListItemNote>
                    )}
                  </ListItem>
                ))}
              </List>
            </SectionContent>
          ))}
        </div>
      </Section>

      <Section>
        <Heading level={2}>Works</Heading>
        <div>
          <List>
            {worksData.map((w) => {
              return (
                <ListItem key={w.id}>
                  <ListItemLabel>{w.date}</ListItemLabel>
                  {w.link ? (
                    <ListItemLink href={w.link} external={w.isExternal}>
                      <ListItemNote>{w.name}</ListItemNote>
                      {w.isExternal && <OpenInNew className="text-[16px]" />}
                    </ListItemLink>
                  ) : (
                    <ListItemNote>{w.name}</ListItemNote>
                  )}
                </ListItem>
              )
            })}
          </List>
        </div>
      </Section>

      <Section>
        <Heading level={2}>Career</Heading>

        <ul className="mt-9 p-0 list-none">
          {biographies.map((b) => (
            <li
              key={b.id}
              className="relative pl-9 pb-9 md:pl-13 md:pb-13 first:before:bg-black dark:first:before:bg-white last:after:border-r last:after:border-dashed last:after:border-[#aaa] dark:last:after:border-[#555] last:after:left-[6px] last:after:bg-white dark:last:after:bg-[#0a0a0a] before:content-[''] before:block before:absolute before:top-2 before:left-0 before:bg-white dark:before:bg-[#0a0a0a] before:border before:border-black dark:before:border-white before:box-border before:w-[15px] before:h-[15px] before:rounded-full before:z-10 after:content-[''] after:block after:absolute after:top-2 after:left-[7px] after:w-px after:h-full after:bg-black dark:after:bg-white"
            >
              <div className="flex gap-x-4 font-bold items-center">
                <p className="text-[14px]">
                  {b.startDate} ~ {b.endDate && b.endDate}
                </p>
                <p className="text-[18px]">{b.belongs}</p>
              </div>
              <p className="text-[14px] font-bold mt-[16px]">{b.role}</p>

              {b.detail && (
                <p className="max-w-[700px] text-[14px] whitespace-pre-wrap mt-[8px]">
                  {b.detail}
                </p>
              )}

              {b.skills && (
                <ul className="flex flex-wrap gap-2 mt-[16px]">
                  {b.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[10px] inline-block px-4 py-1 bg-gray-400 dark:bg-gray-700 text-white md:text-[12px] font-bold"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  )
}
