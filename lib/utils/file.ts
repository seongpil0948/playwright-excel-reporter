/* eslint-disable no-console */
type onLoadFunc = (ev: ProgressEvent<FileReader>, file: File) => Promise<void>
type ReadMethod = 'binary' | 'array' | 'url' | 'text'

interface ReadFileParam {
  file: File
  updatePercent?: (per: number) => void
  onLoad: onLoadFunc
  readMethod: ReadMethod
}

export async function readFile(p: ReadFileParam) {
  return new Promise<ReadFileParam>((resolve) => {
    const reader = new FileReader()
    // progress.value.percent = 0
    reader.addEventListener('load', async (event) => {
      console.log('on file load')
      await p.onLoad(event, p.file)
      resolve(p)
    })
    reader.addEventListener('loadstart', () => {
      p.updatePercent && p.updatePercent(0)
    })
    reader.addEventListener('loadend', () => {
      console.log('on file load ended')
      p.updatePercent && p.updatePercent(100)
    })
    reader.addEventListener('progress', (event) => {
      if (event.loaded && event.total)
        p.updatePercent && p.updatePercent((event.loaded / event.total) * 100)
    })

    const name = p.file.name ? p.file.name : 'NOT SUPPORTED' // Not supported in Safari for iOS.
    const type = p.file.type ? p.file.type : 'NOT SUPPORTED' // Not supported in Firefox for Android or Opera for Android.
    const size = p.file.size ? p.file.size : 'NOT SUPPORTED' // Unknown cross-browser support.
    console.log({ name, file: p.file, type, size })
    if (p.readMethod === 'binary')
      reader.readAsBinaryString(p.file)
    else if (p.readMethod === 'array')
      reader.readAsArrayBuffer(p.file)
    else if (p.readMethod === 'url')
      reader.readAsDataURL(p.file)
    else if (p.readMethod === 'text')
      reader.readAsText(p.file)
  })
}
