import { resolve } from 'path'
import { strictEqual, ok } from 'assert'
import { readFileSync, statSync } from 'fs'
import { setTimeoutAsync } from 'source/common/time'
import { createDirectory } from 'source/node/file/File'
import { modify } from 'source/node/file/Modify'
import { createSimpleLogger, createLogger } from './Logger'

const { describe, it, before, after } = global

const TEST_ROOT = resolve(__dirname, './test-logger-gitignore/')

before('prepare', () => createDirectory(TEST_ROOT))
after('clear', () => modify.delete(TEST_ROOT))

describe('Node.Module.Logger', () => {
  it('createSimpleLogger()', async () => {
    const pathOutputFile = resolve(TEST_ROOT, 'simple-logger')
    const { add, save, end } = createSimpleLogger({ pathOutputFile, queueLengthThreshold: 4 })
    let size, prevSize

    add('1')
    add('2')
    add('3')
    add('4')
    await setTimeoutAsync(10)
    size = statSync(pathOutputFile).size
    // console.log('4', size)
    strictEqual(size, 0)

    add('5')
    await setTimeoutAsync(10)
    size = statSync(pathOutputFile).size
    // console.log('5', size)
    ok(size > 0)
    prevSize = size

    add('6')
    save()
    await setTimeoutAsync(10)
    size = statSync(pathOutputFile).size
    // console.log('6', size)
    ok(size > prevSize)
    prevSize = size

    add('7')
    end()
    await setTimeoutAsync(10)
    size = statSync(pathOutputFile).size
    // console.log('7', size)
    ok(size > prevSize)

    strictEqual(readFileSync(pathOutputFile, { encoding: 'utf8' }), '1\n2\n3\n4\n5\n6\n7\n')
  })

  it('createLogger()', async () => {
    let logFileIndex = 0
    const pathLogDirectory = resolve(TEST_ROOT, 'logger')
    const getCurrentLogPath = () => resolve(pathLogDirectory, `${logFileIndex}.log`)
    const { add, save, split, end } = await createLogger({
      pathLogDirectory,
      getLogFileName: () => {
        logFileIndex += 1
        return `${logFileIndex}.log`
      },
      queueLengthThreshold: 4,
      splitInterval: 50
    })
    let size, prevSize

    add('1', 1)
    add('2')
    add('3')
    add('4')
    await setTimeoutAsync(10)
    size = statSync(getCurrentLogPath()).size
    // console.log('4', size)
    strictEqual(size, 0, 'check 0')

    add('5')
    await setTimeoutAsync(10)
    size = statSync(getCurrentLogPath()).size
    // console.log('5', statSync(getCurrentLogPath()))
    ok(size > 0, 'check 1')
    prevSize = size

    add('6')
    save()
    await setTimeoutAsync(10)
    size = statSync(getCurrentLogPath()).size
    // console.log('6', size)
    ok(size > prevSize, 'check 2')
    prevSize = size

    add('7 should manual split')
    split() // new file, reset split timer
    await setTimeoutAsync(10)
    ok(statSync(resolve(pathLogDirectory, `${logFileIndex - 1}.log`)).size > prevSize, 'check 3')
    size = statSync(getCurrentLogPath()).size
    // console.log('7', size)
    strictEqual(size, 0, 'check 4')
    prevSize = size

    add('8', [ 'A' ])
    add('9', { k: 'v' }, 'should auto split')
    await setTimeoutAsync(60) // 60ms since last split, so auto split should run
    ok(statSync(resolve(pathLogDirectory, `${logFileIndex - 1}.log`)).size > prevSize, 'check 5')
    size = statSync(getCurrentLogPath()).size
    // console.log('9', size)
    strictEqual(size, 0, 'check 6')
    prevSize = size

    add('10')
    add('11')
    end()
    await setTimeoutAsync(10)
    size = statSync(getCurrentLogPath()).size
    // console.log('11', size)
    ok(size > prevSize, 'check 7')

    strictEqual(readFileSync(resolve(pathLogDirectory, `${logFileIndex - 2}.log`), { encoding: 'utf8' }), '1 1\n2\n3\n4\n5\n6\n7 should manual split\n')
    strictEqual(readFileSync(resolve(pathLogDirectory, `${logFileIndex - 1}.log`), { encoding: 'utf8' }), `8 A\n9 ${{}} should auto split\n`)
    strictEqual(readFileSync(getCurrentLogPath(), { encoding: 'utf8' }), '10\n11\n')
  })
})
