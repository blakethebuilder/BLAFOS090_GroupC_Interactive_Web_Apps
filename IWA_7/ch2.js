const nickName = "Timmy";
const firstName = "Timothy";
const user = nickName || firstName;

if (nickName == null && firstName == null) {
  //added in a IF statement to check if the declared const are null,
  console.log("Good Morning"); //it will only say good morning,
} else {
  //else, it runs the below console.log
  console.log(`Good Morning ${user}!`);
}
