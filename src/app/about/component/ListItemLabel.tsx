type Props = {
  children: React.ReactNode
}

export const ListItemLabel = (props: Props) => {
  const { children } = props
  return <p className="w-[100px]">{children}</p>
}
