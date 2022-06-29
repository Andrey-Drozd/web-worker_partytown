function fibonacci(n) {
  if (n < 2) return n

  // eslint-disable-next-line no-console
  console.log('fibonacci: ', fibonacci(n - 1) + fibonacci(n - 2))

  return fibonacci(n - 1) + fibonacci(n - 2)
}

window.fibonacci = fibonacci
