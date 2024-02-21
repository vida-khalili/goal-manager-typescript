const calculateDaysDifference = (
  startDateString: string,
  endDateString: string
): number | null => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return null; // Invalid date strings
  }

  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.round(differenceInDays);
};

export default calculateDaysDifference;
