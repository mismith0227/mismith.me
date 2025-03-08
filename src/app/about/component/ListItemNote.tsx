type Props = {
  children: React.ReactNode
}

export const ListItemNote = (props: Props) => {
  const { children } = props
  return <p className="flex-1 font-bold">{children}</p>
}
