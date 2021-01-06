/* 替换空格 
*   简单难度的题目
*   直接调用api就行
*
*/

let replaceSpace = function(s){
  return s.replaceAll(' ', '%20')
  //return s.split(' ').join('%20')
}