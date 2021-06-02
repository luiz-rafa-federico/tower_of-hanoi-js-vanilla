const content = document.querySelector(".content-wrapper");
// TOWERS
const tower1 = document.createElement("div");
tower1.id = "stack1";
tower1.classList.add("wrapper", "tower");
content.appendChild(tower1);

const tower2 = document.createElement("div");
tower2.id = "stack2";
tower2.classList.add("wrapper", "tower");
content.appendChild(tower2);

const tower3 = document.createElement("div");
tower3.id = "stack3";
tower3.classList.add("wrapper", "tower");
content.appendChild(tower3);

const disc1 = document.createElement("div");
disc1.id = "box-1";
disc1.classList.add("box", "box1");
tower1.appendChild(disc1);

const disc2 = document.createElement("div");
disc2.id = "box-2";
disc2.classList.add("box", "box2");
tower1.appendChild(disc2);

const disc3 = document.createElement("div");
disc3.id = "box-3";
disc3.classList.add("box", "box3");
tower1.appendChild(disc3);

// DISCOS
const disc4 = document.createElement("div");
disc4.id = "box-4";
disc4.classList.add("box", "box4");
tower1.appendChild(disc4);

const disc5 = document.createElement("div");
disc5.id = "box-5";
disc5.classList.add("box", "box5");
tower1.appendChild(disc5);

//GAME
const towers = document.querySelectorAll(".tower");

let isClick = false;
let storedElm = undefined;
let countMoves = 0;
let medida = 0;

//victoria
/*if (countMoves == 31 && towersInDestiny == 5) {
  aletr("Parabens Voce acertou com 31 movimentps ");
} else if (countMoves > 31 && towersInDestiny == 5) {
  alert("ok! Vc Certou com " + countMoves + "movimentos!");
}

if (medida > lastElm.clientWidth) {
  alert("movimento errado!!!!");
}*/

const game = (e) => {
  const tow = e.currentTarget;
  const lastElm = tow.lastElementChild;
  //  const elem = e.lastElementChild;

  if (isClick) {
    isClick = false;
    console.log("Clique 2");
    tow.appendChild(storedElm);
    countMoves++;
    /*    if (lastElm == "") {
      return tow;
    }*/
    console.log(lastElm.clientWidth);
    //console.log(tow.clientWidth);
    console.log(countMoves + " movimientos");
  } else {
    isClick = true;
    console.log("Clique 1");

    let medida = lastElm.clientWidth;
    console.log(medida);
    storedElm = lastElm;
  }
};

towers.forEach((tower) => tower.addEventListener("click", game));
