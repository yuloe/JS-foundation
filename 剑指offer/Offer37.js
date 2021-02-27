/* 请实现两个函数，分别用来序列化和反序列化二叉树。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	if (!root) return '[]'
	let queue = [root]
	let res = []
	while (queue.length) {
		let node = queue.shift()
		if (node) {
			res.push(node.val)
			queue.push(node.left)
			queue.push(node.right)
		} else {
			res.push('null')
		}
	}


	let str = res[res.length - 1]
	while (str === 'null') {
		res.pop()
		str = res[res.length - 1]
	}
	return `[${res.toString()}]`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	if (data === '[]') return []
	let dataArr = data.slice(1, -1).split(',')
	if(!(dataArr.length % 2)) dataArr.push('null')
	let index = 1
	let root = new TreeNode(parseInt(dataArr[0]))
	let queue = [root]
	while(index < dataArr.length){
		let node = queue.shift()
		if(dataArr[index] !== 'null'){
			node.left =new TreeNode(parseInt(dataArr[index]))
			queue.push(node.left)
		}
		index++
		if(dataArr[index] !== 'null'){
			node.right =new TreeNode(parseInt(dataArr[index]))
			queue.push(node.right)
		}
		index++
	}

	return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


let tree = new TreeNode(5)
tree.left = new TreeNode(4)
tree.right = new TreeNode(8)
tree.left.left = new TreeNode(11)
tree.left.left.left = new TreeNode(7)
tree.left.left.right = new TreeNode(2)
tree.right.left = new TreeNode(13)
tree.right.right = new TreeNode(4)
tree.right.right.left = new TreeNode(5)
tree.right.right.right = new TreeNode(1)

deserialize('[1,2]')