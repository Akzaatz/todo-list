// DOM Sélection
const list = document.getElementById("list");
const input = document.getElementById("input");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

//récupation des taches déjà existantes
const tasks = ["Coder une nouvelle Appli", "Démarrer leP6"];

//ajooute des tasks au DOM avec un bouton de suppresiion des events
function taskToDom(task) {
  //vérification de l'entrée
  if (typeof task === "string" && task) {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = tasks;
    remove.textContent = "REMOVE";

    remove.addEventListener("click", () => {
      list.removeChild(remove.parentNode);
    });

    li.appendChild(remove);
    list.insertBefore(li, list.firstChild);
  }
}

//Ajout de nouvelles taches à la liste à puces

tasks.forEach((task) => taskToDom(task));

//===========formule équivalente=========
// for (let i = 0; i < tasks.length; i++) {
//   taskToDom(tasks[i]);
// }
//=======================================

//Gestion de l'ajout de tâches avec le bouton add et la touche "Enter"
function newTask() {
  input.focus();
}

add.addEventListener("click", newTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTask();
  }
});

//Supression de la liste du DOM et du navigateur

clear.addEventListener("click", () => {
  list.innerHTML = "";
});

//Gestion de l'importatioon de tâches
load.addEventListener("click", () => {});
