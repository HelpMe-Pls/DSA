export default function dfs(currentNode: BinaryNode<number> | null, needle: number): boolean {
  if (!currentNode) return false
  if (currentNode.value === needle) return true

  if (needle > currentNode.value) return dfs(currentNode.right, needle)
  return dfs(currentNode.left, needle)
}