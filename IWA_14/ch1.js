firstName = "John";
age = 35;
hobby = "Coding";

const logTwice = () => {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`);
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}; // consol.log was corrected and parameters parsed through here

const myHobby = () => {
  logTwice();
}; // hobby variable and function conflicted

myHobby();
