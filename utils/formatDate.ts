import dayjs from 'dayjs'

export const formatDate = (date: Date): string => {
  const value = dayjs(date).format('YYYY年M月D日')
  return value
}
