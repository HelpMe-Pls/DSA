function hasUnvisitedNode(seen: boolean[], distances: number[]): boolean {
  return seen.some((itemSeen, index) => !itemSeen && distances[index] < Infinity)
}

// Get the unvisited node with the smallest known distance from the current node
function getUnvisitedNodeWithShortestPath(seen: boolean[], distances: number[]): number {
  let output = -1
  let lowestDistance = Infinity

  for (let node = 0; node < seen.length; node++) {
    if (seen[node]) continue

    if (distances[node] < lowestDistance) {
      lowestDistance = distances[node]
      output = node
    }
  }

  return output
}


export default function dijkstra(source: number, target: number, graph: WeightedAdjacencyList): number[] {
  const traversedPath = new Array(graph.length).fill(false)
  const prevNodes = new Array(graph.length).fill(-1)
  const distances = new Array(graph.length).fill(Infinity)

  // starting AT the source
  distances[source] = 0

  while (hasUnvisitedNode(traversedPath, distances)) {
    const currentNode = getUnvisitedNodeWithShortestPath(traversedPath, distances)
    traversedPath[currentNode] = true

    const adjs = graph[currentNode]
    for (const edge of adjs) {  // for each unvisited neighbor of the current node
      if (traversedPath[edge.to]) continue

      const shortestDistance = distances[currentNode] + edge.weight

      // update to get the unvisited neighbor which has the shortest path from the source node
      if (shortestDistance < distances[edge.to]) {
        distances[edge.to] = shortestDistance
        prevNodes[edge.to] = currentNode
      }
    }
  }

  // build output path by reversing the `prev` array
  let currentNode = target
  const path: number[] = []

  while (prevNodes[currentNode] != -1) {
    path.push(currentNode)
    currentNode = prevNodes[currentNode]
  }
  path.push(source)
  return path.reverse()
}


