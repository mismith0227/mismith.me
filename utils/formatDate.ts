import dayjs from 'dayjs'

export const formatDate = (date: Date, format?: string): string => {
  const formatValue = format || 'YYYY年M月D日'

  const value = dayjs(date).format(formatValue)
  return value
}
