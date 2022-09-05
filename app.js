// Create a new h1 element
const h1 = document.createElement("h1");

// Give it some textContent
h1.textContent = "This is an imperative way to program";

// Give it a class name of "header"
h1.className("header");
console.log(h1);

// Append it as a child of the div#root
const root = document.getElementById("root");
root.appendChild(h1);
