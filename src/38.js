function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2 || num == 3) return true;

  let i = Math.floor(Math.sqrt(num));

  for (; i >= 2; i--) {
    if (num % i === 0) return false;
  }

  return true;
}
