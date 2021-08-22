export const getCurrentLocaleTimeString = () =>
  new Date(Date.now()).toLocaleTimeString()

export const getWeekDay = () => new Date().getDay()

export const getWeekDayAsShortString = () => {
  const weekDayNumber = getWeekDay()

  const TRANSLATE_MAP = {
    0: 'DOM',
    1: 'SEG',
    2: 'TER',
    3: 'QUA',
    4: 'QUI',
    5: 'SEX',
    6: 'SAB',
  }

  return TRANSLATE_MAP[weekDayNumber] || null
}

export const formatDate = date => date.split('-').reverse().join('/')
