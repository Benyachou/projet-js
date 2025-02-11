/*  
    1. On peut comparer plusieurs expressions dans une condition, cela peut mener à des comparaisons assez complexes, 
    mais parfois indispensables.
*/

const user1 = {
  name: "Victor",
  age: 35,
  admin: true,
  position: "CEO"
}
const user2 = {
  name: "Paul",
  age: 25,
  admin: false,
  position: "Employee"
}

/* function chekPermission(user) {
  
  if (user.age >= 30 && user.admin && user.position === "CEO" || user.position === "Director"){
    return "Acces autorisé";  
  }
  else {
    return "Acces refusé";
  }
}

console.log(chekPermission(user2)); */


function chekPermission(user) {
  if (!user.admin || user.age < 30){
    return "Acces refusé";
  }
  if (user.position === "CEO" || user.position === "Director")
    return "Acces autorisé";
}

console.log(chekPermission(user1));



