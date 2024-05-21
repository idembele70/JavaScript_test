// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const addOneMinute = (time) => {
  const [hour, minute] = time.split(':');
  const oldTimeInMS = new Date().setHours(+hour, +minute);
  const oneMinuteInMS = 60000;
  let timeIncreased = new Date(oldTimeInMS + oneMinuteInMS);
  console.log(new Date(timeIncreased));
};
addOneMinute('14:59');
