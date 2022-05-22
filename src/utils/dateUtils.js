export const getToday = () => {
  return new Date();
};

export const isThisMonth = (month, year) => {
  const today = getToday();
  return today.getMonth() === month && today.getFullYear() === year;
};

export const isToday = (month, year, date) => {
  const today = getToday();
  return (
    today.getMonth() === month &&
    today.getFullYear() === year &&
    date === today.getDate()
  );
};

const getLastDayInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getNextDay = (today) => {
  const todayIndex = dayName.indexOf(today);
  return dayName[todayIndex !== 6 ? todayIndex + 1 : 0];
};

const dayName = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const generateDateArray = (month, year) => {
  const startDay = isThisMonth(month, year) ? getToday().getDate() : 1;
  const startDate = new Date(year, month, startDay);
  const lastDay = getLastDayInMonth(month, year);
  const today = startDate.getDate();
  const todayName = startDate.toString().split(" ")[0].toUpperCase();
  const dayArray = [{ date: todayName, day: today }];
  let dayName = todayName;
  for (let i = today + 1; i <= lastDay; i++) {
    dayName = getNextDay(dayName);
    dayArray.push({ date: dayName, day: i });
  }
  return dayArray;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = getToday();

export const thisMonth = monthNames[today.getMonth()];

export const thisYear = today.getFullYear();

export const getLastMonth = () => {
  return monthNames[11];
};

export const getFirstMonth = () => {
  return monthNames[0];
};

export const getNextMonth = (month) => {
  const index = monthNames.indexOf(month);
  return monthNames[index + 1];
};

export const getPrevMonth = (month) => {
  const index = monthNames.indexOf(month);
  return monthNames[index - 1];
};

export const isLastMonth = (month) => {
  const index = monthNames.indexOf(month);
  return index === 11;
};

export const isFirstMonth = (month) => {
  const index = monthNames.indexOf(month);
  return index === 0;
};

export const getMonthIndex = (month) => {
  return monthNames.indexOf(month);
};

export const getMonth = (index) => {
  return monthNames[index];
}

export const getRoundedTime = () => {
  const now = new Date();
  const minute = now.getMinutes();

  let decreaseMinutes = minute >= 30 ? minute - 30 : minute;

  const roundedDate = new Date(now.getTime() - decreaseMinutes * 60000);

  const withPmAm = roundedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return withPmAm;
};

export const getTimeIndex = (time) => {
  return times.indexOf(time);
};

export const times = [
  "12:00 AM",
  "12:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];
