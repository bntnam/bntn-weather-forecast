export const round = (number) => Math.round(number);

export const getDay = (date) => {
  const day = new Date(date);

  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day);
};
