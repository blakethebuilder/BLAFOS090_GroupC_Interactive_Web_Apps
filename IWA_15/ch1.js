// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const first = data.lists[0];
const second = data.lists[1];
const third = data.lists[2];

const result = [];

// const extractBiggest = () => {
//   if (first[data.lists.length - 1] > second[data.lists.length - 1]) {
//     return first;
//   }

//   if (third[data.lists.length - 1] < 1) {
//     return second;
//   }

//   return third;
// };

const extractBiggest = () => {
  if (first[1][first[1].length - 1] > second[1][second[1].length - 1]) {
    return first;
  }

  if (third[1].length < 1) {
    return second;
  }

  return third;
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
