type Props = {
  children: React.ReactNode
}

export const ListItemLabel = (props: Props) => {
  const { children } = props
  return <p className="whitespace-nowrap">{children}</p>
}
