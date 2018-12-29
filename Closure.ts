const log = (num: number) => console.log('Outer Arrow Function: ', num)
let i = 0
for (/*let */ i = 1; i < 5; i++) {
  log(i)
  function f() {
    console.log('Inner function: ', i)
  }
  f()
  setTimeout(() => console.log('SetTimeout Arrow function: ', i), 100)
  setTimeout(function() {
    console.log('SetTimeout function: ', i)
  }, 100)
}

export {}
