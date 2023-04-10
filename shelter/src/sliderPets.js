const petsNamePets = document.querySelectorAll(".pets-card__name");
const petsImgPets = document.querySelectorAll(".pets__img");
const petsContainer = document.querySelector(".pets-card__conteiner");
let coutnPets;

export async function sliderPets() {
  const responsePets = await fetch("./src/pets.json");
  const petsObj = await responsePets.json();

  console.log(petsObj);

  //////////pets slider arr////////

  const petsArr1 = [];
  const petsArr2 = [];
  const petsArr3 = [];
  const petsArr4 = [];
  const petsArr5 = [];
  const petsArr6 = [];

  function setRundomPetsArr1() {
    while (petsArr1.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr1.includes(numberRundom)) {
        continue;
      }
      petsArr1.push(numberRundom);
    }
  }

  function setRundomPetsArr2() {
    while (petsArr2.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr2.includes(numberRundom)) {
        continue;
      }
      petsArr2.push(numberRundom);
    }
  }

  function setRundomPetsArr3() {
    while (petsArr3.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr3.includes(numberRundom)) {
        continue;
      }
      petsArr3.push(numberRundom);
    }
  }

  function setRundomPetsArr4() {
    while (petsArr4.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr4.includes(numberRundom)) {
        continue;
      }
      petsArr4.push(numberRundom);
    }
  }

  function setRundomPetsArr5() {
    while (petsArr5.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr5.includes(numberRundom)) {
        continue;
      }
      petsArr5.push(numberRundom);
    }
  }

  function setRundomPetsArr6() {
    while (petsArr6.length != 8) {
      let numberRundom = Math.floor(Math.random() * 8) + 0;
      if (petsArr6.includes(numberRundom)) {
        continue;
      }
      petsArr6.push(numberRundom);
    }
  }

  setRundomPetsArr1();
  setRundomPetsArr2();
  setRundomPetsArr3();
  setRundomPetsArr4();
  setRundomPetsArr5();
  setRundomPetsArr6();

  const arrToShowAll = [
    ...petsArr1,
    ...petsArr2,
    ...petsArr3,
    ...petsArr4,
    ...petsArr5,
    ...petsArr6,
  ];

  console.log(arrToShowAll);

  for (let i = 0; i < 8; i++) {
    petsNamePets[i].textContent = petsObj[arrToShowAll[i]].name;
    petsImgPets[i].src = petsObj[arrToShowAll[i]].img;
    coutnPets = i;

    console.log(coutnPets);
  }

  //////секция модальных окон////

  const popUp = document.querySelector(".pop-Up");
  const popUpClose = document.querySelector(".Our-Friends-slider__close");
  let clickPetNamePets;

  petsContainer.addEventListener("click", (e) => {
    e.preventDefault;
    if (e.target.classList.contains("pets-card")) {
      clickPetNamePets = e.target.querySelector(".pets-card__name").textContent;

      console.log(clickPetNamePets);

      const pet = petsObj.find((el) => el.name === clickPetNamePets);

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
      popUp.classList.contains("pop-Up-active")
    ) {
      popUp.classList.remove("pop-Up-active");
      document.body.classList.remove("modal-open");
    }
  });

  /////секция попробую карточки потыкать ////

  const nextButtonEl1 = document.querySelector(".pets-next1");
  const nextButtonEl2 = document.querySelector(".pets-next2");

  const prevButtonEl1 = document.querySelector(".pets-prev1");
  const prevButtonEl2 = document.querySelector(".pets-prev2");

  nextButtonEl1.addEventListener("click", () => {
    console.log("вперед ребятушки", coutnPets);

    if (coutnPets < 16 && window.innerWidth < 768) {
      coutnPets = coutnPets + 1;
      petsNamePets[0].textContent = petsObj[arrToShowAll[coutnPets]].name;
      petsImgPets[0].src = petsObj[arrToShowAll[coutnPets]].img;
      petsNamePets[1].textContent = petsObj[arrToShowAll[coutnPets + 1]].name;
      petsImgPets[1].src = petsObj[arrToShowAll[coutnPets + 1]].img;
      petsNamePets[2].textContent = petsObj[arrToShowAll[coutnPets + 2]].name;
      petsImgPets[2].src = petsObj[arrToShowAll[coutnPets + 2]].img;
    } else if (coutnPets < 8 && window.innerWidth < 1080) {
      coutnPets = coutnPets + 1;
      petsNamePets[0].textContent = petsObj[arrToShowAll[coutnPets]].name;
      petsImgPets[0].src = petsObj[arrToShowAll[coutnPets]].img;
      petsNamePets[1].textContent = petsObj[arrToShowAll[coutnPets + 1]].name;
      petsImgPets[1].src = petsObj[arrToShowAll[coutnPets + 1]].img;
      petsNamePets[2].textContent = petsObj[arrToShowAll[coutnPets + 2]].name;
      petsImgPets[2].src = petsObj[arrToShowAll[coutnPets + 2]].img;
      petsNamePets[3].textContent = petsObj[arrToShowAll[coutnPets + 3]].name;
      petsImgPets[3].src = petsObj[arrToShowAll[coutnPets + 3]].img;
      petsNamePets[4].textContent = petsObj[arrToShowAll[coutnPets + 4]].name;
      petsImgPets[4].src = petsObj[arrToShowAll[coutnPets + 4]].img;
      petsNamePets[5].textContent = petsObj[arrToShowAll[coutnPets + 5]].name;
      petsImgPets[5].src = petsObj[arrToShowAll[coutnPets + 5]].img;
    } else if (coutnPets <= 8 && window.innerWidth > 1080) {
      coutnPets = coutnPets + 1;
      petsNamePets[0].textContent = petsObj[arrToShowAll[coutnPets]].name;
      petsImgPets[0].src = petsObj[arrToShowAll[coutnPets]].img;
      petsNamePets[1].textContent = petsObj[arrToShowAll[coutnPets + 1]].name;
      petsImgPets[1].src = petsObj[arrToShowAll[coutnPets + 1]].img;
      petsNamePets[2].textContent = petsObj[arrToShowAll[coutnPets + 2]].name;
      petsImgPets[2].src = petsObj[arrToShowAll[coutnPets + 2]].img;
      petsNamePets[3].textContent = petsObj[arrToShowAll[coutnPets + 3]].name;
      petsImgPets[3].src = petsObj[arrToShowAll[coutnPets + 3]].img;
      petsNamePets[4].textContent = petsObj[arrToShowAll[coutnPets + 4]].name;
      petsImgPets[4].src = petsObj[arrToShowAll[coutnPets + 4]].img;
      petsNamePets[5].textContent = petsObj[arrToShowAll[coutnPets + 5]].name;
      petsImgPets[5].src = petsObj[arrToShowAll[coutnPets + 5]].img;
      petsNamePets[6].textContent = petsObj[arrToShowAll[coutnPets + 6]].name;
      petsImgPets[6].src = petsObj[arrToShowAll[coutnPets + 6]].img;
      petsNamePets[7].textContent = petsObj[arrToShowAll[coutnPets + 7]].name;
      petsImgPets[7].src = petsObj[arrToShowAll[coutnPets + 7]].img;
    }
  });

  prevButtonEl1.addEventListener("click", () => {
    console.log("назад ребятушки", coutnPets);

    if (coutnPets <= 16 && coutnPets > 2 && window.innerWidth < 768) {
      coutnPets = coutnPets - 1;
      petsNamePets[0].textContent = petsObj[arrToShowAll[coutnPets]].name;
      petsImgPets[0].src = petsObj[arrToShowAll[coutnPets]].img;
      petsNamePets[1].textContent = petsObj[arrToShowAll[coutnPets - 1]].name;
      petsImgPets[1].src = petsObj[arrToShowAll[coutnPets - 1]].img;
      petsNamePets[2].textContent = petsObj[arrToShowAll[coutnPets - 2]].name;
      petsImgPets[2].src = petsObj[arrToShowAll[coutnPets - 2]].img;
    } else if (coutnPets <= 8 && coutnPets > 4 && window.innerWidth < 1080) {
      coutnPets = coutnPets - 1;
      petsNamePets[0].textContent = petsObj[arrToShowAll[coutnPets]].name;
      petsImgPets[0].src = petsObj[arrToShowAll[coutnPets]].img;
      petsNamePets[1].textContent = petsObj[arrToShowAll[coutnPets - 1]].name;
      petsImgPets[1].src = petsObj[arrToShowAll[coutnPets - 1]].img;
      petsNamePets[2].textContent = petsObj[arrToShowAll[coutnPets - 2]].name;
      petsImgPets[2].src = petsObj[arrToShowAll[coutnPets - 2]].img;
      petsNamePets[3].textContent = petsObj[arrToShowAll[coutnPets - 3]].name;
      petsImgPets[3].src = petsObj[arrToShowAll[coutnPets - 3]].img;
      petsNamePets[4].textContent = petsObj[arrToShowAll[coutnPets - 4]].name;
      petsImgPets[4].src = petsObj[arrToShowAll[coutnPets - 4]].img;
      petsNamePets[5].textContent = petsObj[arrToShowAll[coutnPets - 5]].name;
      petsImgPets[5].src = petsObj[arrToShowAll[coutnPets - 5]].img;
    } else if (coutnPets <= 9 && coutnPets > 4 && window.innerWidth > 1080) {
      coutnPets = coutnPets - 1;
      petsNamePets[0].textContent = petsObj[arrToShowAll[coutnPets]].name;
      petsImgPets[0].src = petsObj[arrToShowAll[coutnPets]].img;
      petsNamePets[1].textContent = petsObj[arrToShowAll[coutnPets - 1]].name;
      petsImgPets[1].src = petsObj[arrToShowAll[coutnPets - 1]].img;
      petsNamePets[2].textContent = petsObj[arrToShowAll[coutnPets - 2]].name;
      petsImgPets[2].src = petsObj[arrToShowAll[coutnPets - 2]].img;
      petsNamePets[3].textContent = petsObj[arrToShowAll[coutnPets - 3]].name;
      petsImgPets[3].src = petsObj[arrToShowAll[coutnPets - 3]].img;
      petsNamePets[4].textContent = petsObj[arrToShowAll[coutnPets - 4]].name;
      petsImgPets[4].src = petsObj[arrToShowAll[coutnPets - 4]].img;
      petsNamePets[5].textContent = petsObj[arrToShowAll[coutnPets - 5]].name;
      petsImgPets[5].src = petsObj[arrToShowAll[coutnPets - 5]].img;
      petsNamePets[6].textContent = petsObj[arrToShowAll[coutnPets - 6]].name;
      petsImgPets[6].src = petsObj[arrToShowAll[coutnPets - 6]].img;
      petsNamePets[7].textContent = petsObj[arrToShowAll[coutnPets - 7]].name;
      petsImgPets[7].src = petsObj[arrToShowAll[coutnPets - 7]].img;
    }
  });
}
