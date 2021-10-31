export function isToday(day: number, month: number, year: number): boolean {
  const now = new Date();

  return (
    now.getFullYear() === year &&
    now.getMonth() === month &&
    now.getDate() === day
  );
}
