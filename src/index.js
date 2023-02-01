import "./styles.css";

const today = new Date();
console.log("DATE & TIME");

const dayName = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday"
];
const day = today.getDay();
console.log("Today is:" + dayName[day]);

let hours = today.getHours();
const minutes = today.getMinutes();
const second = today.getSeconds();
let adjustTime = hours >= 12 ? "PM" : "AM";
hours = hours >= 12 ? hours - 12 : hours;

if (hours === 0 && adjustTime === "PM") {
  if (minutes === 0 && second === 0) {
    hours = 12;
    adjustTime = " Noon";
  } else {
    hours = 12;
    adjustTime = "PM";
  }
}
if (hours === 0 && adjustTime === "AM") {
  if (minutes === 0 && second === 0) {
    hours = 12;
    adjustTime = " Midnight";
  } else {
    hours = 12;
    adjustTime = "AM";
  }
}
console.log(
  "Current Time : " + hours + ":" + minutes + ":" + second + " " + adjustTime
);
