## Simple handling of input from user

### Alert

An alert is a simple dialog (modal) that displays a message to the user. It is often used to provide information or to get the user's attention. Alert pauses the executing of the current javascript file, which means we need to dismiss it before the program continues.

```js
alert("This is an alert message! Dismiss me before the program continues.");

console.log("Alert is dismissed");
```

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

### Confirm

A confirm dialog is used to ask the user for confirmatin. Usually a question or something that can be answered with yes and no. The confirm uses the options `Ok` and `Cancel` in order represent these answers. It returns a boolean, `true` if the user press `Ok` or `false` if the user press `Cancel`. Like the other methods it pauses the script until it's completed.

```js
// Ask if user is older than 20 years old
const isOver20 = confirm("Are you over the age of 20?");

// Alert the answer.
alert(`Were you older then 20? ${isOver20}`);
```

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
