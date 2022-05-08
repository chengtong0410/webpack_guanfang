import _ from "lodash";
import "./static/css/style.css";
import "@/static/fonts/iconfont.css";
function component() {
  const element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], "");
  btn.innerHTML = "点击这里，然后查看 console hahha";
  element.classList.add("hello");
  btn.onclick = function () {
    console.log("我被点击了！2222222222233333333");
  };
  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

