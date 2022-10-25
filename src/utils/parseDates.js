export function parseDates(dates) {
  const goDate = dates[0].toString().split(' ').slice(1, 4).join(' ');
  const returnDate = dates[1].toString().split(' ').slice(1, 4).join(' ');
  return [goDate, returnDate];
}
