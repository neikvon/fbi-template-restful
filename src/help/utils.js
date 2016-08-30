import path from 'path'

export function cwd(...args) {
  const arr = [].slice.call(args || [])
  return path.join.apply(null, [process.cwd()].concat(arr))
}

export function join(...args) {
  const arr = [].slice.call(args || [])
  return path.join.apply(null, arr)
}

export function dir(...args) {
  const arr = [].slice.call(args || [])
  return path.join.apply(null, [__dirname, '../'].concat(arr))
}

export function merge(...args) {
  const target = args[0]
  const sources = [].slice.call(args, 1)
  sources.forEach(source => (
    Object.keys(source).map(p => {
      if (typeof source[p] === 'object') {
        target[p] = target[p] || (Array.isArray(source[p]) ? [] : {})
        return merge(target[p], source[p])
      }
      return (target[p] = source[p])
    })
  ))
  return target
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function validJson(data) {
  try {
    const o = JSON.parse(data)
    // JSON.parse(null) returns null, and typeof null === "object"
    if (o && typeof o === 'object') {
      return o
    }
  } catch (e) {
    return false
  }
  return false
}
