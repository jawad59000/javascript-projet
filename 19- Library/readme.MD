1. Créer une classe Book

L'objet Book doit avoir les propriétés :

- title (string)
- author (string)
- pages (number)
- read (boolean)

L'objet Book doit avoir une méthode info qui retourne les informations du livre comme suit :

```
Le Hobbit de J.R.R. Tolkien, 287 pages, pas encore lu
```

2. Créer une classe Library

Tous les objets Book vont être stockés dans un tableau (myLibrary).

- ajouter une méthode addBookToLibrary qui prend livre Book et l'ajoute dans la bibliothèque
- écrire une méthode qui loop à travers le tableau et affiche tous les livres.

3. Créer un bouton "Nouveau Livre"

Le bouton fait apparaître un formulaire qui permet à l'utilisateur d'entrer les informations de son livre : auteur, titre, nombre de pages et s'il a été lu.

4. Ajouter un bouton pour chaque livre qui supprime le livre de la bibliothèque

- Vous aurez besoin d'associser l'élément DOM avec l'objet Book actuel. Une solution simple est d'utiliser un dataset qui correspond à l'index du livre dans le tableau

5. Ajouter un bouton sur chaque livre qui change le statut "read" du livre s'il a été lu ou non

- Pour faciliter ça, il faut créer une fonction qui toggle le statut "read" dans la class Book

// let vu = e.currentTarget
// .closest(".book")
// .querySelector("h5:nth-child(2)"); // let vu = e.currentTarget
// .closest(".book")
// .querySelector("h5:nth-child(2)");
