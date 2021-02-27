/* 输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。 
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */

var permutation = function (s) {
  if (!s) return []
  if (s.length === 1) return [s]

  const res = []
  const list = s.split('')

  function recur(index) {
    if (index === list.length - 1) {
      res.push(list.join('')) 
    } else {
      let set = new Set()

      for (let i = index; i < list.length; i++) {
        if (set.has(list[i])) continue
        set.add(list[i])

        let tmp = list[i]
        list[i] = list[index]
        list[index] = tmp

        recur(index + 1)
        tmp = list[i]
        list[i] = list[index]
        list[index] = tmp
        // [list[index], list[i]] = [list[i], list[index]]
      }
    }
    return 
  }

  recur(0)
  return res
};

console.log(permutation('abc'))