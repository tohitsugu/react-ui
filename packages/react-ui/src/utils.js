import deepmerge from 'deepmerge'

export const mergeTwo = (a = {}, b = {}) => {
  // remove undefined values before merge
  Object.keys(a).forEach(key => a[key] == undefined && delete a[key])
  Object.keys(b).forEach(key => b[key] == undefined && delete b[key])

  return deepmerge(a, b)
}

export const merge = (...objs) => {
  return objs.reduce(function(merged, currentValue) {
    return mergeTwo(merged, currentValue)
  }, {})
}

export const mergeFns = (a, b) => {
  return (...args) => {
    if (typeof a === 'function') a(...args)
    if (typeof b === 'function') b(...args)
  }
}

const hasUnits = value => {
  if (typeof value !== 'string') return false
  else if (value.includes('%')) return true
  else if (value.match(/[a-z]/i)) return true
}

const isComponent = value => {
  if (!value) return false
  if (value.match(/[A-Z]/)) return true
  return false
}

export const calc = string => {
  let operator
  if (string.includes('+')) operator = '+'
  else if (string.includes('-')) operator = '-'
  else if (string.includes('/')) operator = '/'
  else if (string.includes('*')) operator = '*'
  if (!operator) return string

  let [a, b] = string.split(operator)
  a = a.trim()
  b = b.trim()

  return theme => {
    // check if theme.space and theme.sizes exist
    if ((hasUnits(a) || hasUnits(b)) && !theme.space) return string
    if ((isComponent(a) || isComponent(b)) && !theme.sizes) return string

    a = isComponent(a) ? theme.sizes[a] : a
    a = hasUnits(a) ? a : theme.space[a] || theme.sizes[a]

    b = isComponent(b) ? theme.sizes[b] : b
    // dont multiple or divide pixcels
    b =
      hasUnits(b) || ['*', '/'].includes(operator)
        ? b
        : theme.space[b] || theme.sizes[b]

    return `calc(${a} ${operator} ${b})`
  }
}
