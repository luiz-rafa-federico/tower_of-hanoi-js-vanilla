const section = document.getElementById("section");
const tower1 = document.createElement("div");
const tower2 = document.createElement("div");
const tower3 = document.createElement("div");
section.appendChild(tower1);
section.appendChild(tower2);
section.appendChild(tower3);
//section.classList.add("box");
tower1.classList.add("box");
tower1.classList.add("box1");
tower2.classList.add("box");
tower2.classList.add("box2");
tower3.classList.add("box");
tower3.classList.add("box3");
tower1.id = "box1";
tower2.id = "box1";
tower3.id = "box1";

tower1.addEventListener("click", hide);
tower2.addEventListener("click", hide);
tower3.addEventListener("click", hide);

function hide(e) {
  console.log(e.currentTarget);
}

const bar1 = document.createElement("div");
const bar2 = document.createElement("div");
const bar3 = document.createElement("div");
const bar4 = document.createElement("div");
const bar5 = document.createElement("div");
bar1.id = "bar1";
bar2.id = "bar2";
bar3.id = "bar3";
bar4.id = "bar4";
bar5.id = "bar5";
bar1.classList.add("bar1");
bar2.classList.add("bar2");
bar3.classList.add("bar3");
bar4.classList.add("bar4");
bar5.classList.add("bar5");
tower1.appendChild(bar1);
tower1.appendChild(bar2);
tower1.appendChild(bar3);
tower1.appendChild(bar4);
tower1.appendChild(bar5);

section.addEventListener(click, listener);

//crear la funcion jugar que reconozca 2 cllicks
