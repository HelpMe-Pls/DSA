const dir = [
  [-1, 0],  // left
  [1, 0],   // right
  [0, -1],  // down
  [0, 1],   // up
]

function steps(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
  // Hit previously visited point:
  if (seen[curr]) return false

  // =========== Recursive calls (creating a path) ===============
  // Pre-recursion:
  seen[curr] = true
  path.push(curr)
  if (curr == needle) return true


  // Recursive calls:
  const list = graph[curr]
  for (const i of list) {
    const edge = i
    if (steps(graph, edge.to, needle, seen, path)) return true
  }

  // Post-recursion:
  path.pop()

  return false
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  const traversedPath = new Array(graph.length).fill(false)
  const currentPath: number[] = []

  steps(graph, source, needle, traversedPath, currentPath)

  if (currentPath.length == 0) return null
  return currentPath
}