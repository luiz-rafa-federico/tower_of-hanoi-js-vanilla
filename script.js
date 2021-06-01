const section = document.getElementById("section");
const tower1 = document.createElement("div");
const tower2 = document.createElement("div");
const tower3 = document.createElement("div");
section.classList.add("coluna");
section.appendChild(tower1);
section.appendChild(tower2);
section.appendChild(tower3);
tower1.classList.add("box", "box1", "wrapper");
tower2.classList.add("box", "box2", "wrapper");
tower3.classList.add("box", "box3", "wrapper");
tower1.id = "box1";
tower2.id = "box2";
tower3.id = "box3";
const bar1 = document.createElement("div");
const bar2 = document.createElement("div");
const bar3 = document.createElement("div");
const bar4 = document.createElement("div");
bar1.id = "bar1";
bar2.id = "bar2";
bar3.id = "bar3";
bar4.id = "bar4";
bar1.classList.add("bar1", "shadow");
bar2.classList.add("bar2", "shadow");
bar3.classList.add("bar3", "shadow");
bar4.classList.add("bar4", "shadow");
tower1.appendChild(bar1);
tower1.appendChild(bar2);
tower1.appendChild(bar3);
tower1.appendChild(bar4);
/*tower1.addEventListener("click", hide);
tower2.addEventListener("click", hide);
tower3.addEventListener("click", hide);
*/

const towers = document.querySelectorAll(".coluna");

let isClick = false;

const game = (event) => {
  const tower = event.currentTarget;
  console.log(tower.lastElementChild);
  if (isClick) {
    isClick = false;
    console.log("click2");
  } else {
    isClick = true;
    console.log("click1");
  }
};

towers.forEach((tower) => tower.addEventListener("click", game));

/*
const towers = document.querySelectorAll(".box");
const isClick = false;

const game = (event) => {
  const tower = event.currentTarget;
  console.log(tower.lastElementChild);

    if (isClick) {
    isClick = false;
    console.log("click2");
  } else {
    isClick = true;
    console.log("click1");
  }*/
//};
//for (let i = 0; i < towers.length; i++) {
//towers.addEventListener("click", game);
//}
/*function hide(e) {
  element = e.lastElementChild;

  let remover = this.removeChild(this.lastElementChild);
  let barra = e.currentTarget;
  let ultimo = barra.childElementCount;
  if (ultimo > 0) {
    remover;
    //console.log(tower1);
    //  console.log(ultimo);
  }
}*/
/*if (e.childElementCount > 0) {
  console.log("estoy aqui");
}*/
/*let barCount = document.getElementById("e");
if (barCount.childElementCount > 0) {
  console.log("estoy aqui");
}
bar1.addEventListener("click", game);
bar2.addEventListener("click", game);
bar3.addEventListener("click", game);
bar4.addEventListener("click", game);

*/
//section.addEventListener(click, listener);

//crear la funcion jugar que reconozca 2 cllicks
