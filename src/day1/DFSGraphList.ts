function steps(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
  // Hit previously visited point:
  if (seen[curr]) return false

  // =========== Recursive calls (creating a path) ===============
  // Pre-recursion:
  seen[curr] = true
  path.push(curr)
  if (curr == needle) return true  // found it


  // Recursive calls:
  const list = graph[curr]
  for (const edge of list) {
    if (steps(graph, edge.to, needle, seen, path)) return true
  }

  // Post-recursion: maintaining the order of the path when we're bubbling up the call stack
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