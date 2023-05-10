export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // ===========> Base cases <===========
  // Check if we're reaching the leaf nodes on both trees, i.e. both trees are having the same structure
  if (a === null && b === null) return true

  // The trees are NOT structurally equal
  if (a === null || b === null) return false

  // It is what it is
  if (a.value !== b.value) return false

  // ===========> Recursive call <===========
  return compare(a.left, b.left) && compare(a.right, b.right)

}