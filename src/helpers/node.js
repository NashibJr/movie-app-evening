class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(8);
root.left = new Node(2);
root.right = new Node(4);
root.left.right = new Node(9);
root.left.left = new Node(6);

const inOrder = (node) => {
  if (node !== null) {
    inOrder(node.left);
    // console.log(node.value);
    inOrder(node.right);
  }
};

const que = [root];

const toArray = () => {
  let result = [];
  while (que.length > 0) {
    const node = que.shift();
    if (node !== null) {
      result.push(node.value);
      que.push(node.left);
      que.push(node.right);
    } else {
      result.push(null);
    }
  }

  return result?.filter((res) => res !== null);
};

console.log(toArray(), ":::");
