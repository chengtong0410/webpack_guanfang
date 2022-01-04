import _ from "lodash";
import printMe from "./print.js";
import { cube } from "./math.js";
import "./static/css/style.css";
// require("./static/css/style.css");
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], "");
  btn.innerHTML = "点击这里，然后查看 console hahha";
  btn.onclick = printMe;
  element.classList.add("hello");

  element.appendChild(btn);

  // var element2 = document.createElement("pre");
  // element2.classList.add("hello");
  // element2.innerHTML = [
  //   "Hello webpack!",
  //   "5 cubed is equal to " + cube(5),
  // ].join("\n\n");
  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component();
    element = component();
    document.body.appendChild(element);
  });
}
