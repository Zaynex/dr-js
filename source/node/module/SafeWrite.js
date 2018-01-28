import { openSync, write, writeSync, closeSync } from 'fs'

// async write normally, sync write on emergency
const createSafeWriteStream = ({ pathOutputFile, flag = 'w', mode = 0o666, onError = DEFAULT_ON_ERROR }) => {
  let fileDescriptor = openSync(pathOutputFile, flag, mode)
  let writingQueue = []
  let pendingQueue = []
  const onWriteError = (error) => error ? onError(error) : (writingQueue.length = 0)
  const doWrite = (string) => fileDescriptor && write(fileDescriptor, string, onWriteError)
  return {
    write: (writeString) => {
      if (!writeString) return
      pendingQueue.push(writeString)
      if (writingQueue.length !== 0) return
      [ writingQueue, pendingQueue ] = [ pendingQueue, [] ]
      process.nextTick(doWrite, writingQueue.join(''))
    },
    end: () => {
      const remainQueue = [ ...writingQueue, ...pendingQueue ]
      remainQueue.length !== 0 && writeSync(fileDescriptor, remainQueue.join(''))
      closeSync(fileDescriptor)
      fileDescriptor = null
      pendingQueue.length = writingQueue.length = 0
    }
  }
}

const DEFAULT_ON_ERROR = (error) => {
  console.warn(error)
  throw error
}

export { createSafeWriteStream }
