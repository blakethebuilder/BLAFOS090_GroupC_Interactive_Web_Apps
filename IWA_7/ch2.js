const nickName = "Timmy";
const firstName = "Timothy";
const user = nickName || firstName;

if (!nickName && !firstName) {
  //added in a IF statement to check if the declared ,
  console.log("Good Morning"); //it will only say good morning,
} else {
  //else, it runs the below console.log
  console.log(`Good Morning ${user}!`); // i had to use backticks `what` - this is not only a new operator
}
