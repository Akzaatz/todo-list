"use strict";

// DOM Sélection
const list = document.getElementById("list");
const input = document.getElementById("input");
const clear = document.getElementById("clear");
const url = document.getElementById("url");
const load = document.getElementById("load");

// Nouvelle instance pour la clé "Tasks" :
const storage = new ArrayStorage("tasks");
//récupation des taches déjà existantes ou d'un tableau vide
const tasks = storage.list;

//ajooute des tasks au DOM avec un bouton de suppresiion des events
function taskToDom(task) {
  //vérification de l'entrée
  if (typeof task === "string" && task) {
    const li = document.createElement("li");
    const remove = document.createElement("button");

    li.textContent = task;
    remove.textContent = "REMOVE";

    remove.addEventListener("click", () => {
      const value = remove.parentNode.firstChild.textContent;
      storage.remove(value);
      list.removeChild(remove.parentNode);
    });

    li.appendChild(remove);
    list.insertBefore(li, list.firstChild);
    return true;
  }
  return false;
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
  if (storage.list.indexOf(input.value) === -1 && taskToDom(input.value)) {
    storage.set(input.value);
    input.value = "";
  }
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
  storage.clear();
  list.innerHTML = "";
});

//Gestion de l'importatioon de tâches
load.addEventListener("click", () => {
  fetch(url.value).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText} (${response.status})`);
  });
  then((tasks) => {
    if (Array.isArray(tasks)) {
      tasks.forEach((task) => {
        if (storage.list.indexOf(input.task) === -1 && taskToDom(task)) {
          storage.set(task);
        }
      });
      return;
    }
    throw new typeError(
      `La réponse n'est pas un tableau JSON (type: ${typeof a})`
    );
  });
});
