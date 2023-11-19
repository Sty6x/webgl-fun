import { print } from "./print";
console.log("init entry");
print("from lol");

const body = document.querySelector("body");
const btn = document.createElement("button");
const display = document.createElement("h1");
body.appendChild(btn);
body.appendChild(display);
btn.textContent = "Click me!";

let count = 0;
btn.addEventListener("click", () => {
	count++;
	console.log("clicked: " + count);
	display.innerText = count;
});
