function steps(currentNode: BinaryNode<number> | null, path: number[]): number[] {
  // Base case:
  if (!currentNode) return path

  // Recursive calls
  // Pre-recurse:

  // Recursion:
  steps(currentNode.left, path)
  steps(currentNode.right, path)


  // Post-recurse:
  path.push(currentNode.value)
  return path
}

export default function post_order_search(root: BinaryNode<number>): number[] {
  return steps(root, [])
}