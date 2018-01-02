import nodeModuleAssert from 'assert'
import {
  debounce,
  throttle,
  repeat,
  createInsideOutPromise,
  promiseQueue
} from './function'
import { setTimeoutAsync } from './time'

const { describe, it } = global

describe('Common.Function', () => {
  it('debounce()', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()

    let debouncedValue = null
    const debouncedFunc = debounce((value) => {
      value !== 'Good' && reject(new Error(`expect value === 'Good' but get: ${value}`))
      debouncedValue = value
    }, 50)

    const test = async () => {
      debouncedValue = null
      debouncedFunc('Not 1')
      debouncedValue !== null && reject(new Error(`debouncedFunc should not be called yet`))
      debouncedFunc('Not 2')
      debouncedValue !== null && reject(new Error(`debouncedFunc should not be called yet`))
      await setTimeoutAsync(10)
      debouncedValue !== null && reject(new Error(`debouncedFunc should not be called yet`))
      debouncedFunc('Not 3')
      debouncedValue !== null && reject(new Error(`debouncedFunc should not be called yet`))
      debouncedFunc('Good')
      await setTimeoutAsync(100)
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should get called in time`))
    }

    await test() // 1st try
    await test() // 2nd try
    resolve() // done
    return promise
  })

  it('debounce() isLeadingEdge', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()

    let debouncedValue = null
    const debouncedFunc = debounce((value) => {
      value !== 'Good' && reject(new Error(`expect value === 'Good' but get: ${value}`))
      debouncedValue = value
    }, 50, true)

    const test = async () => {
      debouncedValue = null
      debouncedFunc('Good')
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should get called in time`))
      debouncedFunc('Not 1')
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should not be called during waiting`))
      debouncedFunc('Not 2')
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should not be called during waiting`))
      await setTimeoutAsync(10)
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should not be called during waiting`))
      debouncedFunc('Not 3')
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should not be called during waiting`))
      await setTimeoutAsync(100)
      debouncedValue !== 'Good' && reject(new Error(`debouncedFunc should not be called during waiting`))
    }

    await test() // 1st try
    await test() // 2nd try
    resolve() // done
    return promise
  })

  it('throttle()', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()

    let throttledValue = null
    const throttledFunc = throttle((value) => {
      value !== 'Good' && reject(new Error(`expect value === 'Good' but get: ${value}`))
      throttledValue = value
    }, 50)

    const test = async () => {
      throttledValue = null
      throttledFunc('Good')
      throttledValue !== null && reject(new Error(`throttledFunc should not be called yet`))
      throttledFunc('Not 1')
      throttledValue !== null && reject(new Error(`throttledFunc should not be called yet`))
      throttledFunc('Not 2')
      throttledValue !== null && reject(new Error(`throttledFunc should not be called yet`))
      await setTimeoutAsync(10)
      throttledValue !== null && reject(new Error(`throttledFunc should not be called yet`))
      throttledFunc('Not 3')
      throttledValue !== null && reject(new Error(`throttledFunc should not be called yet`))
      await setTimeoutAsync(100)
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should get called in time`))
    }

    await test() // 1st try
    await test() // 2nd try
    resolve() // done
    return promise
  })

  it('throttle() isLeadingEdge', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()

    let throttledValue = null
    const throttledFunc = throttle((value) => {
      value !== 'Good' && reject(new Error(`expect value === 'Good' but get: ${value}`))
      throttledValue = value
    }, 50, true)

    const test = async () => {
      throttledValue = null
      throttledFunc('Good')
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should get called in time`))
      throttledFunc('Not 1')
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should not be called during waiting`))
      throttledFunc('Not 2')
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should not be called during waiting`))
      await setTimeoutAsync(10)
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should not be called during waiting`))
      throttledFunc('Not 3')
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should not be called during waiting`))
      await setTimeoutAsync(100)
      throttledValue !== 'Good' && reject(new Error(`throttledFunc should not be called during waiting`))
    }

    await test() // 1st try
    await test() // 2nd try
    resolve() // done
    return promise
  })

  it('repeat()', () => {
    let repeatSum = 0
    let repeatCount = 0
    repeat(5, (looped, count) => {
      nodeModuleAssert.strictEqual(repeatCount, looped)
      nodeModuleAssert.strictEqual(5, count)
      repeatCount++
      repeatSum += looped
    })
    nodeModuleAssert.strictEqual(repeatSum, 0 + 1 + 2 + 3 + 4)
    nodeModuleAssert.strictEqual(repeatCount, 5)
  })

  it('createInsideOutPromise() resolve', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()
    resolve('Good')
    resolve('Bad')
    reject(new Error('should not reject after resolve'))
    reject(new Error('should not reject after reject'))
    nodeModuleAssert.strictEqual(await promise, 'Good')
  })

  it('createInsideOutPromise() reject', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()
    reject(new Error('Good Error'))
    resolve('Bad')
    resolve('Bad Bad')
    reject(new Error('should not reject after reject'))
    await promise.then(
      (value) => new Error(`should not resolve with value: ${value}`),
      (error) => nodeModuleAssert.strictEqual(error.message, 'Good Error')
    )
  })

  // shouldContinueOnError
  it('promiseQueue()', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()
    const expectedError = new Error('Expected Error')
    let state = ''

    const asyncTaskList = [
      async () => 0,
      async () => {
        nodeModuleAssert.strictEqual(state, 'Queue started')
        state = 'AsyncTask 1 started'
        await setTimeoutAsync(50)
        return 1
      },
      async () => { throw expectedError },
      async () => {
        reject()
        return 3
      },
      async () => {
        reject()
        return 4
      }
    ]

    const promiseQueuePromise = promiseQueue({ asyncTaskList })

    nodeModuleAssert.strictEqual(state, '')
    state = 'Queue started'

    setTimeoutAsync(100).then(() => reject(new Error(`promiseQueue should finish in time`)))

    const { resultList, errorList, endList, pendingList } = await promiseQueuePromise

    resolve()
    await promise // time check

    nodeModuleAssert.deepEqual([ ...resultList ], [ 0, 1 ])
    nodeModuleAssert.deepEqual([ ...errorList ], [ undefined, undefined, expectedError ])
    nodeModuleAssert.deepEqual(endList, asyncTaskList.slice(0, 3))
    nodeModuleAssert.deepEqual(pendingList, asyncTaskList.slice(3))
  })

  it('promiseQueue() shouldContinueOnError', async () => {
    const { promise, resolve, reject } = createInsideOutPromise()
    const expectedError = new Error('Expected Error')
    let state = ''

    const asyncTaskList = [
      async () => 0,
      async () => {
        nodeModuleAssert.strictEqual(state, 'Queue started')
        state = 'AsyncTask 1 started'
        await setTimeoutAsync(50)
        return 1
      },
      async () => { throw expectedError },
      async () => {
        nodeModuleAssert.strictEqual(state, 'AsyncTask 1 started')
        state = 'AsyncTask 2 started'
        await setTimeoutAsync(10)
        return 3
      },
      async () => 4
    ]

    const promiseQueuePromise = promiseQueue({ asyncTaskList, shouldContinueOnError: true })

    nodeModuleAssert.strictEqual(state, '')
    state = 'Queue started'

    setTimeoutAsync(100).then(() => reject(new Error(`promiseQueue should finish in time`)))

    const { resultList, errorList, endList, pendingList } = await promiseQueuePromise

    resolve()
    await promise // time check

    nodeModuleAssert.deepEqual([ ...resultList ], [ 0, 1, undefined, 3, 4 ])
    nodeModuleAssert.deepEqual([ ...errorList ], [ undefined, undefined, expectedError ])
    nodeModuleAssert.deepEqual(endList, asyncTaskList)
    nodeModuleAssert.deepEqual(pendingList, [])
  })
})