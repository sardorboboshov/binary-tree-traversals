// recursive inorder
var inOrderTraversal = function (root) {
  const stack = [];
  const res = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

// iterative approach
var inOrderTraversal = function (root) {
  const res = [];
  let cur = root;
  while (cur) {
    if (!cur.left) {
      res.push(cur.val);
      cur = cur.right;
    } else {
      let predecessor = cur.left;
      while (predecessor.right && predecessor.right !== cur) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        predecessor.right = cur;
        cur = cur.left;
      } else {
        predecessor.right = null;
        res.push(cur.val);
        cur = cur.right;
      }
    }
  }
  return res;
};
