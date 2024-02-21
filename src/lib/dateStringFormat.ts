const dateStringFormat = (date: Date) => {
  const dateToFormat = new Date(date);
  const month = dateToFormat.getMonth();
  const day = dateToFormat.getDate();
  const year = dateToFormat.getFullYear();
  const hour = dateToFormat.getHours();
  const minute = dateToFormat.getMinutes();
  const formattedString = `${year}/${month}/${day} - ${hour}:${minute}`;
  return formattedString;
};
export const extractDate = (date: Date) => {
  const dateToFormat = new Date(date);
  const month = dateToFormat.getMonth();
  const day = dateToFormat.getDate();
  const year = dateToFormat.getFullYear();
  const hour = dateToFormat.getHours();
  const minute = dateToFormat.getMinutes();
  const extractedDate = { year, month, day, hour, minute };
  return extractedDate;
};

export default dateStringFormat;
