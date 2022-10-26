export function parseDates(dates) {
  if (dates[0] && dates[1]) {
    const goDate = dates[0].toString().split(' ').slice(1, 4).join(' ');
    const returnDate = dates[1].toString().split(' ').slice(1, 4).join(' ');
    return [goDate, returnDate];
  } else if (dates[0] && !dates[1]) {
    const goDate = dates[0].toString().split(' ').slice(1, 4).join(' ');
    return [goDate, null];
  }
}
