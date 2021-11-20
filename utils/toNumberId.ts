export const toNumberId = (value: string | string[]): number => {
  if (Array.isArray(value)) {
    return Number(value[0])
  }

  return Number(value)
}
