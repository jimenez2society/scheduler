// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements

import { currentDate, hours, workHours } from "./date.js";
import { Scheduler } from "./Scheduler.js";
const { timeBlock } = Scheduler;
// in the html.

$(function () {
  // gets and adds the current date to the #currentDay element
  $("#currentDay").text(currentDate);
  // loops through the hours object and uses the timeBlock method on the Scheduler class to render each element
  for (let key in hours) {
    // limits the times from 9AM to 5PM
    if (key >= 9 && key <= 17) {
      timeBlock(hours[key], key).render();
    }
  }
  // gets the data from localStorage and maps though the array and uses the id to get the correct element to set the text
  let data = JSON.parse(localStorage.getItem("timeBlockData"));
  data?.map((d) => {
    let item = $(`#${d.id}`).children()[1];
    item.textContent = d.description;
  });
  // gets the save button
  let btn = $(".saveBtn");
  // on click it checks if there is data in the localStorage. If not, we create an array with a single timeBlockObj item. if there is data, we append it to the array and reset the localStorage
  btn.click((e) => {
    let timeBlockel = $(`#${e.target.parentNode.id}`);
    let text = timeBlockel.children()[1].value;
    let timeBlockObj = { id: e.target.parentNode.id, description: text };
    let data = JSON.parse(localStorage.getItem("timeBlockData"));
    if (!data) {
      localStorage.setItem("timeBlockData", JSON.stringify([timeBlockObj]));
    } else {
      data.push(timeBlockObj);
      localStorage.setItem("timeBlockData", JSON.stringify(data));
    }
  });
});
