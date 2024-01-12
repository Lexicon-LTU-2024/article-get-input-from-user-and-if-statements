# Handling input for user and If-statements

<details>
<summary>Table of contents</summary>

- [Simple handling of input from user](#simple-handling-of-input-from-user)

  - [Alert](#alert)
  - [Prompt](#prompt)
  - [Confirm](#confirm)
  - [Good to know](#good-to-know-about-these-methods)

- [If statements](#if-statements)
  - [Comparison Operators](#comparison-operators)
  - [Else](#else)
  - [Else-if](#else-if)
  - [Logical Operators](#logical-operators)
  - [Truthy & Falsey](#truthy-and-falsey-values)
  </details>

## Simple handling of input from user

### Alert

An alert is a simple dialog (modal) that displays a message to the user. It is often used to provide information or to get the user's attention. Alert pauses the executing of the current javascript file, which means we need to dismiss it before the program continues.

```js
alert("This is an alert message! Dismiss me before the program continues.");

console.log("Alert is dismissed");
```

[Back to top](#handling-input-for-user-and-if-statements)

### Prompt

The prompt dialog (modal) allows you to ask the user for input by dsiplaying a message and an included input field. It returns the text entered by the user as a string. Prompts are also blocking which means the script is paused until the prompt is completed.

```js
// Prompt the user for the name. The answer that is returnd can be saved in a variable

const nameOfUser = prompt("Please enter your name:");

// Let's display the answer with an alert, with the help of sting concatenation.
alert("Thank you " + nameOfUser + "!");
```

You can also use string literals inside the alert for smoother string creations.

But what happens if we don't give the prompt an answer?

```js
const nameOfUser = prompt("Please enter your name:");

// Let's say we cancel the prompt before writing an answer, what happens then?

console.log(nameOfUser); // null
```

The prompt always returns a value to us, either a string if we actually types something or presses ok without typing anything or null if we cancel the prompt.

FYI, everything you type as a response in a prompt will be converted to a string before it's returned.

[Back to top](#handling-input-for-user-and-if-statements)

### Confirm

A confirm dialog is used to ask the user for confirmatin. Usually a question or something that can be answered with yes and no. The confirm uses the options `Ok` and `Cancel` in order represent these answers. It returns a boolean, `true` if the user press `Ok` or `false` if the user press `Cancel`. Like the other methods it pauses the script until it's completed.

```js
// Ask if user is older than 20 years old
const isOver20 = confirm("Are you over the age of 20?");

// Alert the answer.
alert(`Were you older then 20? ${isOver20}`);
```

[Back to top](#handling-input-for-user-and-if-statements)

### Good to know about these methods.

These methods are not hovering on their own in JavaScript, they are actually connected to something. And this something is the `BOM`. BOM stands for **Browser Object Model**. It is an object the represents the Browser and its functionality and it is utilized with the windows keyword. Like this:

```js
alert("Some string");

// is really like this:

window.alert("...some string");

// Same with the others:

window.promt("...some prompt");
window.confirm("...some confirmation text");
```

[Back to top](#handling-input-for-user-and-if-statements)

## If-statements

A statment is a lone of code that performs a certain action or task. It's like giving a command to a computer to do something specific.

#### Declaring a variable

```js
let greeting;
```

Here we tell the computer to declare a variable with the name `greeting`. It's simply a container where you can store some data.

##### Assigning a value to the variable

```js
greeting = "Hello there!";
```

Now we ask the computer to assign a specific value to that variable. We are putting actual data inside the container.

##### Displaying the result

```js
console.log(greeting);
```

Lastly we instruct the computer to display this greeting in the console of the browser. When you run this code, you'll see `Hello there!` in the console. This is a proper statement!

[Back to top](#handling-input-for-user-and-if-statements)

### Back to if-statements

Here is the basic syntax of an if-statement.

```js
if (condition) {
  // ... do something
}
```

What is a condition then? A condition is something that the computer can evaluate, but the caveat here is that it's only allowed to evaluate something to either `true` or `false`. How do we do this? We need some other tools. Say hi to `comparison operators`.

#### Comparison Operators

This operators are used by the computer to compare two or more values with eachother.

##### `==` -> _equal to (with coercion)_

Comparison between to operands, but JavaScript may try to convert one or both operands in order to make the comparison possible.

```js
const numbersAreEqual = 5 == 5; // true, and it will be assign to the variable.

const numbersAreEqualAgain = 5 == "5"; // true, it's because JS converts the "5" to a number in order to make the comparison work.

const isEqual = 5 == 7; // false. This is obvious of course.
```

##### `===` -> _equal to (strict)_

Comparison between two operands, but this time it's strict. Both need to be of the same data type, otherwise it will automatically be `false`. Value AND type must be the same.

```js
const numbersAreEqual = 5 === "5"; // false, since the data types are different.

const x = 10;
const y = 7;

const areTheyEqual = x === y; // false, the values or not equal but the data types are.
```

##### `!=` -> _Not equal (with coercion)_

Basically the opposite of _equal to_ but it's when we want to check if some operands are not equal.

##### `!==` -> _Not equal (strict)_

```js
const name = "Niklas";
const lastName = "Fahnrich";

const isNotEqual = name !== lastName; // true.
```

##### `>`, `<` -> _Greater than, Less than_

Sometimes we want to compare if variables (typically numbers) are greate than or less than each other. Age restriction is a good example, password lenght is another.

```js
let myAge = 18;
const ageLimit = 20;

let isOldEnough = myAge > ageLimit; // false
isOldEnough = 16 < ageLimit; // true
```

##### `>=` , `<=` -> _Greater than or equal, less than or equal_

Works the same as above but we can check for equality as well.

### Back to if-statements (again)

Now we now about the comparison operators that we can use, now we can actually write a proper if-statment.

Systembolaget example;

```js
alert("Welcome to the digital Ssytembolaget!");

// Set age restriction
const ageRestriction = 20;

// Ask for the age of the customer
const age = prompt("How old are you?");

const ageAsNumber = window.parseInt(age);

if (ageAsNumber >= ageRestriction) {
  // In here is the code that runs if the condition is true
  alert("Very good, you are most welcome to browse our wares.");
}
```

If-statements works by checking a certain condition if it should run the code inside the codeblock or not. Remember that it **ONLY** runs the code if the condition is true. Otherwise the code block will be completely ignored.

[Back to top](#handling-input-for-user-and-if-statements)

### Else

Else is nothing that can be used on its own, it must alwaus be used in conjunction with an if-statment. But it gives you the opportunity to something else the first condition is false.

```js
if (condition) {
  // if the condition is true, we end up in here.
  // ...code to run
} else {
  // We end up here if the condition is false, it's like a fallback statement
  // ...do something else
}
```

Let's take the previous example and extend it with an else statement.

```js
alert("Welcome to the digital Sytembolaget!");

// Set age restriction
const ageRestriction = 20;

// Ask for the age of the customer
const age = prompt("How old are you?");

const ageAsNumber = window.parseInt(age);

if (ageAsNumber >= ageRestriction) {
  // In here is the code that runs if the condition is true
  alert("Very good, you are most welcome to browse our wares.");
} else {
  alert("I am sorry, you shall not pass!");
}
```

[Back to top](#handling-input-for-user-and-if-statements)

### Else-if

Else-if is another member of the if-statement family. It's quite similar to en else but with the added functionality that it can check some other condition for us if the first condition was false. It give more opportunites to steer our program in different directions depending on the outcome.

```js
if (condition) {
  // ...code to run
} else if (anotherCondition) {
  // ...code to run
} else if (thirdCondition) {
  // ...code to run
} else {
  // ...code to run if all conditions fails
}
```

Remember, that **only one** of these codeblocks can ever run. If one condition is evaluated to true, all of the rest will be ignored.

Let's do a good example of this with colors.

```js
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
```

This is a good example if we want to check multiple conditions one by one, but what if we want to check serveral conditions at the same time? Then we have logical operators.

[Back to top](#handling-input-for-user-and-if-statements)

### Logical Operators

#### `&&` = `AND`

Both conditions that we check must be true, in order for the entire if statmenet to be evaluated to `true`.

```js
const hasCertificate = true;
let isAvailable = true;

if (hasCertificate && isAvailable) {
  console.log("Nice! We will hire you!"); // This will run since both are true.
} else {
  console.log("To bad, but what if we give you 100k?");
}

isAvailable = false;

if (hasCertificate && isAvailable) {
  console.log("Nice! We will hire you!");
} else {
  console.log("To bad, but what if we give you 100k?"); // This will run since one of them are false.
}
```

In this case we just looked at two conditions, but what if we have more of them?

```js
const hasCertificate = true;
let isAvailable = true;
let hasFSkatt = false;
let isOldEnough = false;

if (hasCertificate && isAvailable && hasFSkatt) {
  // ...code to run if all of them are true
}
```

What if we have parentheses around a couple of them? They will be seen as one entity, and will be evaluated as such.

```js
if (hasCertificate && isAvailable && hasFSkatt && isOldEnough) {
  // ...code to run if all of them are true
}
```

#### `||` = `OR`

When we are using this operator, only one of the conditions must be true, in order for the total condition to be evaluated to true. It doesn't matter which one obviously.

```js
const dollar = "dollar";
const euro = "euro";
let customerCurrency = dollar;

console.log("We accept both dollars and euros");

if (customerCurrency === dollar || customerCurrency === euro) {
  console.log("Nice! Those bills looks delicious!");

  // This will run since cusomterCurrency was either dollar or euro.
}

customerCurrency = "drachme";

if (customerCurrency === dollar || customerCurrency === euro) {
  console.log("Nice! Those bills looks delicious!");
} else {
  console.log("Oh, sorry. Are you from Ancient Greece? Drachme doesn't even exists anymore!");

  // This will run since drachme is not accepted.
}
```

We can also combine `&&` and `||` in our if statements. In those ases we usually need parentheses.

```js
const hasCertificate = true;
let isAvailable = true;
let hasFSkatt = false;
let isOldEnough = false;

if (hasCertificate && (isAvailable || hasFSkatt)) {
  // ...code to run if "hasCertificate" is true AND either "isAvailable" or "hasFSkatt".
}
```

If you have a very complex condition, don't write it in directly in the if statement, create a boolean with a good name instead that contains these conditions.

```js
if (hasCertificate || (isAvailable && hasFSkatt) || isOldEnough) {
  // ...code to run
}
```

The above can be quite complicated to read, create a variable instead.

```js
const goodWorker = hasCertificate || (isAvailable && hasFSkatt) || isOldEnough;

if (goodWorker) {
  // This is easier to read, and hopefully the nameing of the variable explains what it contains in some way.
}
```

In order to make the code more readable you could also nest your if statements.

#### `!` = `NOT (negation)`

This one can be little tricky because it is similar to the comparison operator `!=`. But to explain it in an easy way, when we are using this with a condition, we are inverting that said condition. So if something i `true`, this operator will make it `false` and vice versa. We can use this specifically when we are looking for a conditions that is suppose to be false.

```js
const somethingTrue = true;
const somethingFalse = false;

if (!somethingTrue) {
  // This codeblock wil in fact NOT run since the NOT operator inverts the value of "somethingTrue", therefor the condition is evaluated to false.
}

if (!somethingFalse) {
  // This codeblock will run however. The NOT operator is inverting the "somethingFalse" and makes it true. The conditon passed and this codeblock runs.
}
```

[Back to top](#handling-input-for-user-and-if-statements)

### Truthy and Falsey values

A value is considered `truthy` if it coerces to `true` when evaluated in a boolean context, like an if check for instance.

- `Non-empty strings`: Any string with at least one character is truthy

- `Numbers (except 0)`: Any number excepts 0 is truthy.

- `Objects`: All objects are truthy, even empty ones.

- `Arrays`: All arrays are truthy, even empty ones.

- `Function`: Defined functions are truhty.

```js
// TS syntax, just go with it. This means that user can have to types of value, IUser or null.
let user: IUser | undefined;

if (user) {
  // ...do something with the user if the user is considerd truthy, or in this case of the type IUser.
}

if ("Niklas") {
  // ...This codeblock will run since any string with atleast one character is consederd truthy.
}

if (155) {
  // ..also truthy, since all numbers except 0 is truthy.
}
```

### Falsey

A value is considered `falsey` if it coerces to `false` when evaluated in a boolean context, like an if check for instance.

- `Empty string`: An empty string (""), or (''), or (``) is falsey.

- `The number 0`: The number 0 is falsey.

- `null`: The `null` value is falsey.

- `undefined`: The `undefined is also falsy.

- `NaN`: Not-a-number is also falsy.

```js
if ("") {
  // Will not run since it's falsy.
}

let user;

if (user) {
  // Is falsy since we haven't assigned a value to the user variable.
}
```

[Back to top](#handling-input-for-user-and-if-statements)
