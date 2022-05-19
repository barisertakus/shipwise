export const getToday = () => {
  return new Date();
}

const getLastDayInMonth = () => {
  const today = getToday();
  const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  console.log()
  return lastDate.getDate();
};

const getNextDay = (today) => {
  const todayIndex = dayName.indexOf(today);
  return dayName[todayIndex !== 6 ? todayIndex + 1 : 0];
};

const dayName = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const generateDateArray = () => {
  const todayDate = getToday();
  const lastDay = getLastDayInMonth();
  const today = todayDate.getDate();
  const todayName = todayDate.toString().split(" ")[0].toUpperCase();
  const dayArray = [{ date: todayName, day: today }];
  let dayName = todayName;
  for (let i = today + 1; i <= lastDay; i++) {
    dayName = getNextDay(dayName);
    dayArray.push({ date: dayName, day: i });
  }
  return dayArray;
};