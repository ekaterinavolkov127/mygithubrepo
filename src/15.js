const generateRandomNodeJSCode = () => {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }

  return numbers.join('');
};
