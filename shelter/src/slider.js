const petsCardImg = document.querySelectorAll(".main_img");
const petsNameCard = document.querySelectorAll(".main_name");

const prevButtonEl = document.querySelector(".Our-Friends-slider__prev");
const nextButtonEl = document.querySelector(".Our-Friends-slider__next");
const petsContainer = document.querySelector(".pets-card__conteiner");
const petsLearnMoreBut = document.querySelectorAll(".slide-select-pets");
const petsImg = document.querySelectorAll(".pets__img");

let petsArr = [];
let count;

export async function getFetchPets() {
  const responsePets = await fetch("./src/pets.json");
  const petsObj = await responsePets.json();

  function setRundomPetsArr() {
    while (petsArr.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr.includes(numberRundom)) {
        continue;
      }
      petsArr.push(numberRundom);
    }
  }
  setRundomPetsArr();
  console.log(petsCardImg, petsNameCard);

  console.log(petsObj);

  console.log(petsArr);

  for (let i = 0; i < 3; i++) {
    petsNameCard[i].textContent = petsObj[petsArr[i]].name;
    petsCardImg[i].src = petsObj[petsArr[i]].img;
    count = i;
  }

  nextButtonEl.addEventListener("click", () => {
    console.log(count);
    if (count < 7 && window.innerWidth < 768) {
      count = count + 1;
      petsNameCard[0].textContent = petsObj[petsArr[count]].name;
      petsCardImg[0].src = petsObj[petsArr[count]].img;
    } else if (count < 6 && window.innerWidth < 1080) {
      count = count + 1;
      petsNameCard[0].textContent = petsObj[petsArr[count]].name;
      petsCardImg[0].src = petsObj[petsArr[count]].img;
      petsNameCard[1].textContent = petsObj[petsArr[count + 1]].name;
      petsCardImg[1].src = petsObj[petsArr[count + 1]].img;
    } else if (count < 5 && window.innerWidth > 1081) {
      petsNameCard[0].textContent = petsObj[petsArr[count + 1]].name;
      petsCardImg[0].src = petsObj[petsArr[count + 1]].img;
      petsNameCard[1].textContent = petsObj[petsArr[count + 2]].name;
      petsCardImg[1].src = petsObj[petsArr[count + 2]].img;
      petsNameCard[2].textContent = petsObj[petsArr[count + 3]].name;
      petsCardImg[2].src = petsObj[petsArr[count + 3]].img;
      count = count + 1;
    } else {
      count = 0;
    }
  });

  prevButtonEl.addEventListener("click", () => {
    console.log(count);
    if (count <= 7 && count > 1 && window.innerWidth < 768) {
      count = count - 1;
      petsNameCard[0].textContent = petsObj[petsArr[count]].name;
      petsCardImg[0].src = petsObj[petsArr[count]].img;
    } else if (count <= 7 && count > 2 && window.innerWidth < 1080) {
      count = count - 1;
      petsNameCard[0].textContent = petsObj[petsArr[count]].name;
      petsCardImg[0].src = petsObj[petsArr[count]].img;
      petsNameCard[1].textContent = petsObj[petsArr[count - 1]].name;
      petsCardImg[1].src = petsObj[petsArr[count - 1]].img;
    } else if (count <= 7 && count > 3 && window.innerWidth > 1081) {
      count = count - 1;
      petsNameCard[0].textContent = petsObj[petsArr[count]].name;
      petsCardImg[0].src = petsObj[petsArr[count]].img;
      petsNameCard[1].textContent = petsObj[petsArr[count - 2]].name;
      petsCardImg[1].src = petsObj[petsArr[count - 2]].img;
      petsNameCard[2].textContent = petsObj[petsArr[count - 3]].name;
      petsCardImg[2].src = petsObj[petsArr[count - 3]].img;
    } else {
      count = 7;
    }
  });

  const popUp = document.querySelector(".pop-Up");
  const popUpClose = document.querySelector(".Our-Friends-slider__close");
  let clickPetName;

  petsImg.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault;

      console.log(e.target);
      if (e.target.classList.contains("pets__img")) {
        clickPetName =
          e.target.parentNode.parentNode.querySelector(
            ".main_name"
          ).textContent;

        console.log(clickPetName);

        const pet = petsObj.find((item) => item.name === clickPetName);

        console.log(pet);

        popUp.classList.add("pop-Up-active");

        console.log(popUp);

        popUp.querySelector(".pop-Up__img").setAttribute("src", pet.img);
        popUp.querySelector(".pop-Up__name").textContent = pet.name;
        popUp.querySelector(
          ".pop-Up__type"
        ).textContent = `${pet.type} - ${pet.breed}`;
        popUp.querySelector(".pop-Up__info").textContent = pet.description;
        popUp.querySelector(".pop-Up__age").textContent = pet.age;
        popUp.querySelector(".pop-Up__inoculations").textContent =
          pet.inoculations;
        popUp.querySelector(".pop-Up__diseases").textContent = pet.diseases;
        popUp.querySelector(".pop-Up__parasites").textContent = pet.parasites;
        document.body.classList.add("modal-open");
      }
    });
  });

  petsLearnMoreBut.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault;
      if (e.target.parentNode.parentNode.classList.contains("pets-card")) {
        clickPetName =
          e.target.parentNode.parentNode.querySelector(
            ".main_name"
          ).textContent;

        console.log(clickPetName);

        const pet = petsObj.find((item) => item.name === clickPetName);

        console.log(pet);

        popUp.classList.add("pop-Up-active");

        console.log(popUp);

        popUp.querySelector(".pop-Up__img").setAttribute("src", pet.img);
        popUp.querySelector(".pop-Up__name").textContent = pet.name;
        popUp.querySelector(
          ".pop-Up__type"
        ).textContent = `${pet.type} - ${pet.breed}`;
        popUp.querySelector(".pop-Up__info").textContent = pet.description;
        popUp.querySelector(".pop-Up__age").textContent = pet.age;
        popUp.querySelector(".pop-Up__inoculations").textContent =
          pet.inoculations;
        popUp.querySelector(".pop-Up__diseases").textContent = pet.diseases;
        popUp.querySelector(".pop-Up__parasites").textContent = pet.parasites;
        document.body.classList.add("modal-open");
      }
    });
  });

  petsContainer.addEventListener("click", (e) => {
    e.preventDefault;
    if (e.target.classList.contains("pets-card")) {
      clickPetName = e.target.querySelector(".main_name").textContent;

      console.log(clickPetName);

      const pet = petsObj.find((el) => el.name === clickPetName);

      console.log(pet);

      popUp.classList.add("pop-Up-active");

      console.log(popUp);

      popUp.querySelector(".pop-Up__img").setAttribute("src", pet.img);
      popUp.querySelector(".pop-Up__name").textContent = pet.name;
      popUp.querySelector(
        ".pop-Up__type"
      ).textContent = `${pet.type} - ${pet.breed}`;
      popUp.querySelector(".pop-Up__info").textContent = pet.description;
      popUp.querySelector(".pop-Up__age").textContent = pet.age;
      popUp.querySelector(".pop-Up__inoculations").textContent =
        pet.inoculations;
      popUp.querySelector(".pop-Up__diseases").textContent = pet.diseases;
      popUp.querySelector(".pop-Up__parasites").textContent = pet.parasites;
      document.body.classList.add("modal-open");
    }
  });

  popUpClose.addEventListener("click", () => {
    popUp.classList.remove("pop-Up-active");
    document.body.classList.remove("modal-open");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault;
      if (popUp.classList.contains("pop-Up-active")) {
        popUp.classList.remove("pop-Up-active");
        document.body.classList.remove("modal-open");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (popUp.classList.contains("pop-Up-active")) {
      popUp.classList.remove("pop-Up-active");
      document.body.classList.remove("modal-open");
    }
  });

  window.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("pets-card__conteiner") &&
      !e.target.classList.contains("pets-card") &&
      !e.target.classList.contains("pop-Up") &&
      !e.target.classList.contains("slide-select-pets") &&
      !e.target.classList.contains("pets-card__button") &&
      !e.target.classList.contains("pets__img") &&
      popUp.classList.contains("pop-Up-active")
    ) {
      popUp.classList.remove("pop-Up-active");
      document.body.classList.remove("modal-open");
    }
  });
}
