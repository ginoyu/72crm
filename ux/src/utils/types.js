export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export function floatToFixed(f, l = 2) {
  if (isString(f)) {
    return f;
  }
  f = f.toFixed(l)
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + l) {
    s += '0'
  }
  return s
}
