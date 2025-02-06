/* 
    1. Naming. 
    
    Sans décommenter les variables ci-dessous, devinez celles qui ont un nom non-réglementaire, c'est à dire celles qui vont provoquer une erreur lors de l'exécution de votre code par le navigateur.
    Rajoutez un commentaire à côté de chaque variable //correct ou //faux.

*/

    // LET UsErNaMe = "John";                                                        //Faux
    // const _id = 99;                                                               //Vrai
    // let class = true;                                                             //Faux
    // const isAdult = true;                                                         //Vrai
    // const $card = {name: "card", content: "Lorem ipsum"};                         //Vrai
    // let 1452 = 1452;                                                              //Faux
    // const sum41 = "music";                                                        //Vrai



/* 
    2. Trouver un bon nom; 

    Essayez de trouver un bon nom à ces variables, puis déclarez-les avec ce nom et la valeur correspondante.

    A. Une let qui retourne un booléen en fonction de la présence d'un joueur en ligne.

    B. Une let qui retourne un booléen en fonction des droits d'un rôle "modérateur".
 
    C. Une const qui contient un tableau de nombres représentants des salaires.
    
    D. Une let contenant des informations sur la météo du jour.
    
    E. Une let qui contient la hauteur d'une page web.

    F. Une const qui contient un message d'alerte.

    Même chose pour des fonctions.

    G. Une fonction qui retourne les données d'un utilisateur
    H. Une fonction qui retourne un booléen si l'utilisateur est adulte.
    I. Une fonction qui crée un bouton
    J. Une fonction qui ajoute une animation 
*/

//A.
// let isOnlie = true;
//B. 
// let isModerator = false;
//C.
// const salaries = [2450,1850,4712,3254,2000,1578]
//D. 
/*
 let currentWeather = {
    temperature : 27,
    humidity: 45,
    wind: 14
}
*/
// E
// let scrollHeight = 4251
// F
// cont alerteMessage = "Vous ne pouvez pas faire ça"

// G
/* function getUserData(userId) {
    // Simuler une base de données d'utilisateurs
    const users = {
        1: { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
        2: { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
        3: { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" }
    };

    // Retourner les données de l'utilisateur si l'identifiant existe
    if (users[userId]) {
        return users[userId];
    } else {
        return null; // Retourner null si l'utilisateur n'existe pas
    }
}

// Exemple d'utilisation
const userData = getUserData(1);
console.log(userData); */

// H
/* function isAdult(user) {
    // Vérifier si l'utilisateur existe et si son âge est défini
    if (user && typeof user.age === 'number') {
        return user.age >= 18; // Retourne true si l'âge est >= 18, sinon false
    } else {
        return false; // Retourne false si l'utilisateur ou l'âge n'est pas valide
    }
}

// Exemples d'utilisation
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob", age: 17 };
const user3 = { name: "Charlie" }; // Âge non défini

console.log(isAdult(user1)); // true (25 >= 18)
console.log(isAdult(user2)); // false (17 < 18)
console.log(isAdult(user3)); // false (âge non défini)
 */

// I
/* function createButton(text, onClickHandler) {
    // Créer un nouvel élément bouton
    const button = document.createElement('button');

    // Ajouter du texte au bouton
    button.textContent = text;

    // Ajouter un gestionnaire d'événement pour le clic
    button.addEventListener('click', onClickHandler);

    // Ajouter le bouton au corps du document (ou à un autre élément)
    document.body.appendChild(button);

    // Retourner le bouton créé (optionnel)
    return button;
}

// Exemple d'utilisation
createButton('Cliquez-moi', () => {
    alert('Vous avez cliqué sur le bouton !');
});
 */

// J
/* function addAnimation(){} */


