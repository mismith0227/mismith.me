type Props = {
  children: React.ReactNode
}

export const ListItem = (props: Props) => {
  const { children } = props
  return <li className="flex gap-x-4 mt-2">{children}</li>
}
