type Props = {
  children: React.ReactNode
}

export const Section = (props: Props) => {
  const { children } = props
  return (
    <section className="mt-16 mx-auto md:mt-[80px] md:first:mt-0">
      {children}
    </section>
  )
}
