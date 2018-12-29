// From: https://github.com/foxbunny/transform/blob/master/transform.js

import * as R from 'ramda'

const ARRAY_SIZE = 100000
const RESULT_LENGTH = Math.floor(ARRAY_SIZE / 2)

const counter = {
  next: 0,
  step: () => {
    return ++counter.next
  },
  reset: () => {
    counter.next = 0
  }
}

const bigArray = new Array(100000).fill(0)

const getNum = () => counter.step()
const halve = x => x / 2
const isInt = x => Math.floor(x) === x

const run = (title, createTest) => {
  counter.reset()
  const testFn = createTest()
  console.time(title)
  const result = testFn()
  console.log(result.slice(-3, -1))
  console.timeEnd(title)
  console.assert(
    result.length === RESULT_LENGTH,
    `${title} should have ${RESULT_LENGTH} items but has ${result.length}`
  )
}

run('Simple', () => {
  return () =>
    bigArray
      .map(getNum)
      .map(halve)
      .filter(isInt)
})

run('Fast fix', () => {
  return () =>
    bigArray.reduce(newArr => {
      const num = getNum()
      const hlv = halve(num)
      if (isInt(hlv)) {
        newArr.push(hlv)
      }
      return newArr
    }, [])
})

run('Purely imperative', () => {
  return () => {
    const newArr = []
    const l = bigArray.length
    for (let i = 0; i < l; i++) {
      const num = getNum()
      const hlv = halve(num)
      if (isInt(hlv)) {
        newArr.push(hlv)
      }
    }
    return newArr
  }
})

run('Transform 1 (using push)', () => {
  const transform = (arr, transformer) =>
    arr.reduce((newArr, member) => {
      const t = transformer([member])
      if (t.length) {
        newArr.push(t[0])
      }
      return newArr
    }, [])

  return () =>
    transform(bigArray, arr =>
      arr
        .map(getNum)
        .map(halve)
        .filter(isInt)
    )
})

run('Generators', () => {
  const map = function*(arr, fn) {
    for (let member of arr) {
      yield fn(member)
    }
  }

  const filter = function*(arr, fn) {
    for (let member of arr) {
      if (fn(member)) {
        yield member
      }
    }
  }

  return () => {
    const nums = map(bigArray, getNum)
    const hlv = map(nums, halve)
    return [...filter(hlv, isInt)]
  }
})

run('Ramda simple', () => {
  const transform = R.pipe(
    R.map(getNum),
    R.map(halve),
    R.filter(isInt)
  )

  return () => transform(bigArray)
})

run('Ramda compose', () => {
  const transform = R.pipe(
    R.map(
      R.compose(
        halve,
        getNum
      )
    ),
    R.filter(isInt)
  )

  return () => transform(bigArray)
})
