var postOrderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  function traverse(node) {
    if (node && node.left) traverse(node.left);
    if (node && node.right) traverse(node.right);
    res.push(node.val);
  }
  traverse(root);
  return res;
};
var postOrderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return result.reverse();
};

var postOrderTraversal = function (root) {
  const res = [];
  if (!root) return [];
  const stack = [];
  let [curr, prev] = [root, null];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    if (
      stack[stack.length - 1].right == null ||
      stack[stack.length - 1].right == prev
    ) {
      prev = stack.pop();
      res.push(prev.val);
    } else {
      curr = stack[stack.length - 1].right;
    }
  }
  return ans;
};
