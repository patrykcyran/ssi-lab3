import 'bootstrap/dist/css/bootstrap.min.css';

let licznik = 1;
let container = document.createElement("div");
container.classList.add("text-center", "p-3");
let msg = document.createElement("h1");
msg.classList.add("bg-primary", "text-white", "p-3");
msg.textContent = "Przycisk nie został kliknięty";
let button = document.createElement("button");
button.textContent = "Kliknij mnie";
button.classList.add("btn", "btn-secondary");
button.onclick = () => msg.textContent = `Przycisk kliknięty: ${licznik++}`;
container.appendChild(msg);
container.appendChild(button);
let app = document.getElementById("app");
app.parentElement.replaceChild(container, app);