export class Calendar {
  /**
   * The names of the weekdays
   */
  weekdays

  /**
   * Hash of the month names and their length
   */
  months

  /**
   * The weekday that the year starts on (0-indexed)
   */
  yearStartsOnDay

  /**
   * The number of days in the year for this calendar
   */
  get yearLength() {
    return Object.values(this.months).reduce(
      (count, current) => count + current,
      0
    )
  }

  /**
   * @param {number} year The current year (i.e. 1129)
   * @param {number} month The index of the month (i.e. 0)
   * @param {number} day The day of the month
   * @returns {number} the (0-indexed) day of the year
   */
  getDayOfYear(month, day) {
    if (month === 0) return day - 1
    return (
      Object.values(this.months)
        .slice(0, month - 1)
        .reduce((count, current) => count + current, 0) +
      day -
      1
    )
  }

  /**
   * Calculates what day of the week a given date falls on
   * @param {number} month The index of the month (i.e. 0)
   * @param {number} day The day of the month
   * @returns {number} the (0-indexed) day of the week
   */
  getWeekdayForDate(month, day) {
    return (
      (this.yearStartsOnDay + this.getDayOfYear(month, day)) %
      this.weekdays.length
    )
  }

  constructor(months = {}, weekdays = [], yearStartsOnDay = 0) {
    this.months = months
    this.weekdays = weekdays
    this.yearStartsOnDay = yearStartsOnDay
  }
}
