import {
  stat, lstat, rename, unlink,
  readFile, writeFile, copyFile,
  mkdir, rmdir, readdir,
  createReadStream, createWriteStream,
  open, fstat
} from 'fs'
import { promisify } from 'util'

const statAsync = promisify(stat)
const lstatAsync = promisify(lstat)
const renameAsync = promisify(rename)
const unlinkAsync = promisify(unlink)

const mkdirAsync = promisify(mkdir)
const rmdirAsync = promisify(rmdir)
const readdirAsync = promisify(readdir)

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
const copyFileAsync = copyFile
  ? promisify(copyFile) // since 8.5.0
  : (() => {
    const openAsync = promisify(open)
    const fstatAsync = promisify(fstat)
    return async (pathFrom, pathTo) => {
      const fdFrom = await openAsync(pathFrom, 'r')
      const stat = await fstatAsync(fdFrom)
      const fdTo = await openAsync(pathTo, 'w', stat.mode)
      const readStream = createReadStream(undefined, { fd: fdFrom })
      const writeStream = createWriteStream(undefined, { fd: fdTo, mode: stat.mode })
      await new Promise((resolve, reject) => {
        readStream.on('error', reject)
        writeStream.on('error', reject)
        writeStream.on('close', resolve)
        readStream.pipe(writeStream)
      })
    }
  })()

export {
  statAsync,
  lstatAsync,
  renameAsync,
  unlinkAsync,

  mkdirAsync,
  rmdirAsync,
  readdirAsync,

  readFileAsync,
  writeFileAsync,
  copyFileAsync,

  createReadStream,
  createWriteStream
}
