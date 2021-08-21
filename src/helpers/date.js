export const getWeekDay = () => new Date().getDay()

export const getWeekDayAsShortString = () => {
  const weekDayNumber = getWeekDay()

  const TRANSLATE_MAP = {
    1: 'SEG',
    2: 'TER',
    3: 'QUA',
    4: 'QUI',
    5: 'SEX',
    6: 'SAB',
    7: 'DOM',
  }

  return TRANSLATE_MAP[weekDayNumber]
}
