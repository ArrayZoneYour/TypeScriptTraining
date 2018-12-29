type Get<O, K extends keyof O> = O[K]

const s = {
  a: 1,
  b: '3'
}

type S = keyof typeof s
const getS = <P extends S>(key: P): typeof s[P] => s[key]
// const a = getS('b') // Right
// const a = getS<'a' | 'b'>('b') // Wrong

const get = <P extends keyof St, St>(key: P, o: St): St[P] => o[key]

// const a = get('a', s) // Works well

const register = <M>(model: M) => <P extends keyof M>(p: P): M[P] =>
  get(p, model)
const Mo = register(s)
const res = Mo('a')
