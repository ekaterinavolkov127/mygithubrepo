function fibonacci(n) {
  if (n <= 1) return n;
  let first = 0;
  let second = 1;
  for (let i = 2; i < n; i++) {
    [first, second] = [second, first + second];
  }
  return second;
}
