exports.min = function min (array) {
  if (array === undefined || (Array.isArray(array) && array.length === 0)) {
    return 0
  } else {
    array.sort((a, b) => a - b)
    return array[0]
  }
}

exports.max = function max (array) {
  if (array === undefined || (Array.isArray(array) && array.length === 0)) {
    return 0
  } else {
    array.sort((a, b) => b - a)
    return array[0]
  }
}

exports.avg = function avg (array) {
  if (array === undefined || (Array.isArray(array) && array.length === 0)) {
    return 0
  } else {
    array.sort((a, b) => b - a)
    return Number((array.reduce((prevValue, item, index, arr) => prevValue + item / arr.length, 0)).toFixed(3))
  }
}
