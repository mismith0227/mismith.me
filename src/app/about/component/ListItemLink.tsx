type Props = {
  children: React.ReactNode
  href: string
  external?: boolean
}

export const ListItemLink = (props: Props) => {
  const { children, href, external } = props
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      className="flex items-center gap-x-2 text-black underline hover:no-underline"
    >
      {children}
    </a>
  )
}
