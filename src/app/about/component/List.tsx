type Props = {
  children: React.ReactNode
}

export const List = (props: Props) => {
  const { children } = props
  return <ul className="mt-4">{children}</ul>
}
