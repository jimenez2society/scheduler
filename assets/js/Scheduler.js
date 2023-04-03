import { hours } from "./date.js";

export class Scheduler {
  static timeBlock(time, position = null) {
    let timeBlockEl = $("#time-block-container");
    let date = new Date();
    // gets the current time
    let presentTime = hours[date.getHours()];
    // creating a proxy
    let timeBlockProxy = new Proxy(
      {},
      {
        get: (obj, prop, reciever) => {
          // creating a element that we can render with dynamic data
          let el = $(`<div id="hour-${time}" class="row time-block ${
            hours[position] === presentTime
              ? "present"
              : position < date.getHours()
              ? "past"
              : "future"
          }">
              <div class="col-2 col-md-1 hour text-center py-3">${time}</div>
              <textarea class="col-8 col-md-10 description" rows="3"></textarea>
              <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                <i class="fas fa-save" aria-hidden="true"></i>
              </button>
            </div>`);
          // creates a function to render el
          const render = () => {
            timeBlockEl.append(el);
          };
          // if there is a prop "render" then we will call render()
          if (prop === "render") {
            obj[prop] = () => {
              render();
            };
          }
          return Reflect.get(obj, prop);
        },
      }
    );
    return timeBlockProxy;
  }
}
