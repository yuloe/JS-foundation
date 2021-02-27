/* 
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let state = [
    new Map([['space', 0], ['symbol', 1], ['integer', 2], ['point', 3]]),
    new Map([['integer', 2], ['point', 3]]),
    new Map([['integer', 2], ['point', 4], ['charE', 6], ['space', 9]]),
    new Map([['integer', 5]]),
    new Map([['integer', 5], ['charE', 6], ['space', 9]]),
    new Map([['integer', 5], ['space', 9], ['charE', 6]]),
    new Map([['integer', 8], ['symbol', 7]]),
    new Map([['integer', 8]]),
    new Map([['integer', 8], ['space', 9]]),
    new Map([['space', 9]])
  ]

  let p = 0
  let stat
  for (char of s) {
    if ('0' <= char && char <= '9') stat = 'integer'
    else if (char === '+' || char === '-') stat = 'symbol'
    else if (char === 'e' || char === 'E') stat = 'charE'
    else if (char === '.') stat = 'point'
    else if (char === ' ') stat = 'space'
    else stat = '?'
    if (!state[p].has(stat)) return false
    p = state[p].get(stat)
  }

  return p === 2 || p === 4 || p === 5 || p === 8 || p === 9
};

isNumber(' 1 ')