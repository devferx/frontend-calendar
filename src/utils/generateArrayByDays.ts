import { isLeapYear } from "./isLeapYear";

export function generateArrayByDays(month: number, year: number) {
  const res = [];
  const firstDay = new Date(year, month, 1);
  const februaryDays = isLeapYear(year) ? 29 : 28;
  const daysPerMonth = [
    31,
    februaryDays,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (let i = 1; i <= firstDay.getDay(); i++) {
    res.push(-1);
  }
  for (let i = 1; i <= daysPerMonth[month]; i++) {
    res.push(i);
  }
  return res;
}
