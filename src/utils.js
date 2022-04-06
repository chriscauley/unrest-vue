import { debounce, sum } from 'lodash'

export const timeit = (func, name) => {
  const times = []
  const tick = debounce(() => {
    console.log( // eslint-disable-line
      'timeit:',
      name || func.name,
      'ave=' + parseInt(sum(times) / times.length),
      'count=' + times.length,
      'max=' + Math.max(...times),
      times,
    )
  }, 1000)
  return (...args) => {
    const start = new Date().valueOf()
    const result = func(...args)
    times.push(new Date().valueOf() - start)
    tick()
    return result
  }
}
