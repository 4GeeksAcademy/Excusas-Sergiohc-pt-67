/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Lista de excusas de diferentes variables
let who = ["El perro", "La abuela", "El coche", "Mi hermano"];
let action = ["se comió", "se puso", "dejó", "perdió"];
let what = ["mis deberes", "enferma", "de funcionar", "las llaves de casa"];
let when = ["antes de salir", "anoche", "de camino", "ayer"];

window.onload = function ExcuseGenerator() {
  //write your code here
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuse =
    "¡¡¡" +
    randomWho +
    " " +
    randomAction +
    " " +
    randomWhat +
    " " +
    randomWhen +
    "!!!";

  document.getElementById("excuse").innerHTML = excuse;
};
