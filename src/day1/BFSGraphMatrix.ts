export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  const traversedPath = new Array(graph.length).fill(false)

  // if it's != -1 then there's a connection with the current node
  const prev = new Array(graph.length).fill(-1)

  traversedPath[source] = true    // start from the source node
  const q: number[] = [source]    // `q` is the path we're forming, starting with a `source` node

  do {
    const curr = q.shift() as number
    const adjs = graph[curr]

    if (curr == needle) break  // found it

    for (let i = 0; i < adjs.length; ++i) {
      // `adjs[i] == 0` means there is no connection 
      if (adjs[i] == 0 || traversedPath[i]) continue

      traversedPath[i] = true
      prev[i] = curr
      q.push(i)
    }
  } while (q.length)

  if (prev[needle] == -1) return null // unable to form a path to the target node

  // build output path by reversing the `prev` array
  let curr = needle
  const path: number[] = []

  while (prev[curr] != -1) {
    path.push(curr)
    curr = prev[curr]
  }

  return [source].concat([...path].reverse())
}