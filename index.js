const age = prompt("How old are you?");

const ageAsNumber = parseInt(age);

if (age >= 80) {
  alert("You are blue");
} else if (age >= 50) {
  alert("You are red");
} else if (age >= 30) {
  alert("You are yellow");
} else if (age >= 10) {
  alert("You are green");
} else if (age >= 0) {
  alert("You are brown");
} else {
  alert("You don't exists, you deserve no color");
}
