import dayjs from 'dayjs'

export const isSameDate = (date1: Date, date2: Date) => {
  const value1 = dayjs(date1)
  const value2 = dayjs(date2)

  return value1.isSame(value2, 'day')
}
