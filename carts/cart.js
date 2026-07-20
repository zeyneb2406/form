const xhr = new XMLHttpRequest();

const BASE_URL = "https://rickandmortyapi.com/api";

xhr.open("GET", `${BASE_URL}/character`);

xhr.addEventListener("load", function () {
  const character = JSON.parse(xhr.responseText).results;
  const container = document.querySelector("div");

  container.innerHTML = "";

  character.slice(0, 6).forEach((element) => {
    const card = document.createElement("div");
    card.className =
      "card bg-[#3c3e44] w-[550px] h-[220px] rounded-[10px] flex overflow-hidden shadow-lg  ";

    console.log("İlk 6 personaj:", character.slice(0, 6));

    const img = document.createElement("img");
    img.src = element.image;
    img.className = "card-img";

    const name = document.createElement("a");
    name.href = element.url;
    name.textContent = element.name;
    name.className = "card-name";

    // Sağ tərəfdəki məlumat konteyneri
    const infoContainer = document.createElement("div");
    infoContainer.className = "p-4 flex flex-col justify-start";

    const statusContainer = document.createElement("div");
    statusContainer.className =
      "flex font-medium text-white items-center gap-2 mt-1";
    const statusDot = document.createElement("span");
    let dotColor = "bg-gray-400";
    if (element.status === "Alive") dotColor = "bg-green-500";
    if (element.status === "Dead") dotColor = "bg-red-500";
    statusDot.className = `w-2.5 h-2.5 rounded-full ${dotColor}`;

    const statusText = document.createElement("span");
    statusText.textContent = `${element.status} - ${element.species}`;

    statusContainer.append(statusDot, statusText);

    //location
    const locationContainer = document.createElement("div");
    locationContainer.className = "flex font-medium flex-col mt-3 gap-2";

    const locationText = document.createElement("span");
    locationText.className = "text-gray-400 text-sm ";
    locationText.textContent = "Last known location:";

    const locationCart = document.createElement("a");
    locationCart.href = element.url;
    locationCart.className = "font-base text-white";
    locationCart.textContent = element.location.name;

    locationContainer.append(locationText, locationCart);

    infoContainer.append(name, statusContainer, locationContainer);
    card.append(img, infoContainer);
    container.appendChild(card);
  });
});

xhr.send();
