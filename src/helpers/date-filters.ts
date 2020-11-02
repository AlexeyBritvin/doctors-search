import dayjs from 'dayjs'
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)

const dateFormat = 'M/D/YYYY'

export const isBetweenDays = (date: string, addedDays: number) => {
  const today = dayjs()

  // @ts-ignore
  return dayjs(date, dateFormat).isBetween(today, today.add(addedDays, 'day'))
}

export const isToday = (date: string) => dayjs().format(dateFormat) === date
