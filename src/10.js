// A simple Node.js script that returns a random number between 1 and 10
const getRandomNumber = () => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber());
