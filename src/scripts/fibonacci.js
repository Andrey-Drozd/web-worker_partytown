function addDataToLocalStorage(name, data) {
  localStorage.setItem(name, data)
}

function fibonacciHandler(n) {
  if (n < 2) return n
  return fibonacciHandler(n - 1) + fibonacciHandler(n - 2)
}

function fibonacci(n) {
  console.log('processing')

  const data = fibonacciHandler(n)
  console.log('result: ', data)

  addDataToLocalStorage('fibonacci', data)
  window.dispatchEvent(new Event('storage'))
}

window.fibonacci = fibonacci
