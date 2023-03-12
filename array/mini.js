// castArray:: string | array -> array
export const castArray = val => (Array.isArray(val) ? val : [val])
// flat:: array -> array
export const flat = arr => arr.flat(Infinity)
// tail:: array -> string
export const tail = arr => arr.slice(-1)

export default {
    castArray,
    flat,
    tail
}