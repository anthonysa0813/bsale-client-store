import "./style.css";

import { setupCounter } from "./counter.js";
import Header from "./src/components/Header";
Header;

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    ${Header}
  </div>
`;

// <img src="${}" class="logo vanilla" alt="JavaScript logo" />
setupCounter(document.querySelector("#counter"));
