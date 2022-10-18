import "./style.css";

import { setupCounter } from "./counter.js";
import Header from "./src/components/Header";
import Aside from "./src/components/Aside";
Header;

document.querySelector("#app").innerHTML = `
  <div>
    ${Header}
    ${Aside}
  </div>
`;

// <img src="${}" class="logo vanilla" alt="JavaScript logo" />
setupCounter(document.querySelector("#counter"));
