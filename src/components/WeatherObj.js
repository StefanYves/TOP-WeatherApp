import { cards } from "./UI";

class Weather {
  constructor(country, name, temp, wind, minTemp, maxTemp, imgSrc) {
    this.country = country;
    this.name = name;
    this.temp = temp;
    this.wind = wind;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.imgSrc = imgSrc;
  }
  createCardToday() {
    const wrapper = document.createElement("div");
    wrapper.classList.add(
      "bg-blue-300",
      "p-8",
      "rounded-md",
      "shadow-md",
      "w-1/4"
    );

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("flex", "flex-col", "items-center");

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("text-lg", "mb-2");

    const locationSpan = document.createElement("span");
    locationSpan.classList.add("font-semibold", "text-2xl");
    locationSpan.id = "location0";
    locationSpan.textContent = `Today in ${this.name}, ${this.country}`;

    locationDiv.appendChild(locationSpan);

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("text-4xl", "mb-4");

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("font-semibold");
    tempSpan.id = "temp0";
    tempSpan.textContent = `${this.temp} °C`;

    tempDiv.appendChild(tempSpan);

    const windDiv = document.createElement("div");
    windDiv.classList.add("mb-2");

    const windSpan = document.createElement("span");
    windSpan.classList.add("font-semibold");
    windSpan.id = "wind0";
    windSpan.textContent = `${this.wind} km/h`;

    windDiv.textContent = "Wind: ";
    windDiv.appendChild(windSpan);

    const minMaxDiv = document.createElement("div");
    minMaxDiv.classList.add("mb-2");
    minMaxDiv.id = "min/max0";
    minMaxDiv.textContent = "Min/Max Temp: ";

    const minMaxSpan = document.createElement("span");
    minMaxSpan.classList.add("font-semibold");
    minMaxSpan.textContent = `${this.minTemp} °C / ${this.maxTemp} °C`;

    minMaxDiv.appendChild(minMaxSpan);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("mb-4");
    imgDiv.id = "img0";

    const img = document.createElement("img");
    img.src = this.imgSrc;
    img.alt = "Weather Icon";
    img.classList.add("w-24", "h-24");

    imgDiv.appendChild(img);

    innerDiv.appendChild(locationDiv);
    innerDiv.appendChild(tempDiv);
    innerDiv.appendChild(windDiv);
    innerDiv.appendChild(minMaxDiv);
    innerDiv.appendChild(imgDiv);

    wrapper.appendChild(innerDiv);

    cards.appendChild(wrapper);
  }
  createCardNextDays() {
    const wrapper = document.createElement("div");
    wrapper.classList.add(
      "bg-blue-300",
      "p-8",
      "rounded-md",
      "shadow-md",
      "w-1/4"
    );

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("flex", "flex-col", "items-center");

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("text-lg", "mb-2");

    const locationSpan = document.createElement("span");
    locationSpan.classList.add("font-semibold", "text-2xl");
    locationSpan.id = "location0";
    locationSpan.textContent = `Next days in ${this.name}, ${this.country}`;

    locationDiv.appendChild(locationSpan);

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("text-4xl", "mb-4");

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("font-semibold");
    tempSpan.id = "temp0";
    tempSpan.textContent = `${this.temp} °C`;

    tempDiv.appendChild(tempSpan);

    const windDiv = document.createElement("div");
    windDiv.classList.add("mb-2");

    const windSpan = document.createElement("span");
    windSpan.classList.add("font-semibold");
    windSpan.id = "wind0";
    windSpan.textContent = `${this.wind} km/h`;

    windDiv.textContent = "Max Wind: ";
    windDiv.appendChild(windSpan);

    const minMaxDiv = document.createElement("div");
    minMaxDiv.classList.add("mb-2");
    minMaxDiv.id = "min/max0";
    minMaxDiv.textContent = "Min/Max Temp: ";

    const minMaxSpan = document.createElement("span");
    minMaxSpan.classList.add("font-semibold");
    minMaxSpan.textContent = `${this.minTemp} °C / ${this.maxTemp} °C`;

    minMaxDiv.appendChild(minMaxSpan);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("mb-4");
    imgDiv.id = "img0";

    const img = document.createElement("img");
    img.src = this.imgSrc;
    img.alt = "Weather Icon";
    img.classList.add("w-24", "h-24");

    imgDiv.appendChild(img);

    innerDiv.appendChild(locationDiv);
    innerDiv.appendChild(tempDiv);
    innerDiv.appendChild(windDiv);
    innerDiv.appendChild(minMaxDiv);
    innerDiv.appendChild(imgDiv);

    wrapper.appendChild(innerDiv);

    cards.appendChild(wrapper);
  }
}

export default Weather;
