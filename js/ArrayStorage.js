"Use strict";

//Stockage des tasks
class ArrayStorage {
  // constructeur pour initialiser l'objet avec le nom de la clé et son contenu (sa valeur)
  constructor(name) {
    this.name = name;
    this.list = this.get();
  }
  //Méthode pour récupérer un tableau de valeur ou le créer si inexistant
  get() {
    if (!localStorage.getItem(this.name)) {
      localStorage.setItem(this.name, "[]");
    }
    return JSON.parse(localStorage.getItem(this.name));
  }
  //méthode pour pouvoir ajouter une valeur dans le tableau
  set(value) {
    this.list.push(value);
    localStorage.setItem(this.name, JSON.stringify(this.list));
  }
  //Méthode pour supprimer une valeur du tableau
  remove(value) {
    const index = this.list.indexOf(value);
    this.list.splice(index, 1);
    localStorage.setItem(this.name, JSON.stringify(this.list));
  }
  //Méthode pour vider tout le tableau
  clear() {
    localStorage.removeItem(this.name);
  }
}
