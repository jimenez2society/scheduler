// create the days of the week
// create the months
//  create the times in the form of '1AM'
export const hours = {
  0: "12AM",
  1: "1AM",
  2: "2AM",
  3: "4AM",
  4: "4AM",
  5: "5AM",
  6: "6AM",
  7: "7AM",
  8: "8AM",
  9: "9AM",
  10: "10AM",
  12: "12PM",
  13: "1PM",
  14: "2PM",
  15: "3PM",
  16: "4PM",
  17: "5PM",
  18: "6PM",
  19: "7PM",
  20: "8PM",
  21: "9PM",
  22: "10PM",
  23: "11PM",
};

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Janurary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemeber",
  "December",
];
let date = new Date();
let day = date.getDate();
let month = months[date.getMonth()];
let dayOfWeek = daysOfWeek[date.getDay()];
export const currentDate = `${dayOfWeek}, ${month} ${day}${
  // handles the ordinal numbers
  String(day).includes(String(1)) && String(day).length === 1
    ? "st"
    : String(day).includes(String(1)) && String(day).length === 2
    ? "st"
    : String(day).includes(String(2)) && String(day).length === 1
    ? "nd"
    : String(day).includes(String(2)) && String(day).length === 2
    ? "nd"
    : String(day).includes(String(3)) && String(day).length === 1
    ? "rd"
    : String(day).includes(String(3)) && String(day).length === 2
    ? "rd"
    : "th"
}`;