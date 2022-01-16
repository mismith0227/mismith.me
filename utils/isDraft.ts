type Draft = {
  draftKey: string
}

export const isDraft = (arg: any): arg is Draft => {
  if (!arg?.draftKey) {
    return false
  }

  return typeof arg.draftKey === 'string'
}
