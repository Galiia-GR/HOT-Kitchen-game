const petsCardImg = document.querySelectorAll(".main_img");
const petsNameCard = document.querySelectorAll(".main_name");

const prevButtonEl = document.querySelector(".Our-Friends-slider__prev");
const nextButtonEl = document.querySelector(".Our-Friends-slider__next");
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
    console.log(count);
  }

  nextButtonEl.addEventListener("click", () => {
    console.log("вперед", count);
    if (count < 7) {
      count = count + 1;
      petsNameCard[0].textContent = petsObj[petsArr[count - 2]].name;
      petsCardImg[0].src = petsObj[petsArr[count - 2]].img;
      petsNameCard[1].textContent = petsObj[petsArr[count - 1]].name;
      petsCardImg[1].src = petsObj[petsArr[count - 1]].img;
      petsNameCard[2].textContent = petsObj[petsArr[count]].name;
      petsCardImg[2].src = petsObj[petsArr[count]].img;
    } else {
      count = 1;
    }
  });

  prevButtonEl.addEventListener("click", () => {
    console.log("назад", count);
    if (count <= 7 && count > 2) {
      count = count - 1;
      petsNameCard[2].textContent = petsObj[petsArr[count]].name;
      petsCardImg[2].src = petsObj[petsArr[count]].img;
      petsNameCard[1].textContent = petsObj[petsArr[count - 1]].name;
      petsCardImg[1].src = petsObj[petsArr[count - 1]].img;
      petsNameCard[0].textContent = petsObj[petsArr[count - 2]].name;
      petsCardImg[0].src = petsObj[petsArr[count - 2]].img;
    } else {
      count = 7;
    }
  });
}
