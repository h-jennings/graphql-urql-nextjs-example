export const prettyDate = (date) => {
  return Intl.DateTimeFormat('en-US').format(new Date(date));
};
