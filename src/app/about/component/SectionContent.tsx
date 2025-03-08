type Props = {
  children: React.ReactNode
}

export const SectionContent = (props: Props) => {
  const { children } = props
  return <section className="mt-6">{children}</section>
}
