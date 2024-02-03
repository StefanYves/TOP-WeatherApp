const content = document.getElementById("content");
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");

const cards = document.getElementById("cards");

button.innerHTML = "Search";
button.classList.add(
  "inline-flex",
  "items-center",
  "justify-center",
  "px-4",
  "py-2",
  "text-base",
  "font-medium",
  "leading-6",
  "text-white",
  "whitespace-no-wrap",
  "bg-blue-600",
  "border",
  "border-blue-700",
  "rounded-md",
  "shadow-sm",
  "hover:bg-blue-700",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",
  "focus:ring-blue-500",
  "mt-20",
  "ml-5"
);

input.setAttribute("id", "name");
input.classList.add(
  "bg-gray-50",
  "border",
  "border-gray-300",
  "text-gray-900",
  "text-sm",
  "rounded-lg",
  "focus:ring-blue-500",
  "focus:border-blue-500",
  "block",
  "w-full",
  "p-2.5",
  "mt-20"
);

form.appendChild(input);
content.appendChild(form);
content.appendChild(button);

export { input, button, cards };
