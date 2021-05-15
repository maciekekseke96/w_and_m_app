export const getTodayDate = () => {
  const dateObject = new Date();
  const day =
    dateObject.getDate() < 10
      ? `0${dateObject.getDate()}`
      : dateObject.getDate();
  const month =
    dateObject.getMonth() < 10
      ? `0${dateObject.getMonth() + 1}`
      : dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const todayDateString = `${year}-${month}-${day}`;

  return todayDateString;
};
