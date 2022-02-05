const div = document.createElement("div");
div.textContent = "Esto es un div insertado con JS.";

const app = document.createElement("div"); // <div></div>
app.id = "app";       // <div id="app"></div>
app.appendChild(div); // <div id="app"><div>Esto es un div insertado con JS</div></div>