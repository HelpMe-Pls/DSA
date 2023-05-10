const dir = [
  [-1, 0],  // left
  [1, 0],   // right
  [0, -1],  // down
  [0, 1],   // up
]

function steps(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // =========== Base cases ===============
  // Out of bound:
  if ((curr.x < 0 && curr.y > maze[0].length) || (curr.y < 0 && curr.x > maze.length)) return false

  // Hit the wall:
  if (maze[curr.y][curr.x] == wall) return false

  // Hit previously visited point:
  if (seen[curr.y][curr.x]) return false

  // Curr == end:
  if (curr.x == end.x && curr.y == end.y) {
    path.push(curr)
    return true
  }

  // =========== Recursive calls (creating a path) ===============
  // Pre-recursion:
  seen[curr.y][curr.x] = true
  path.push(curr)

  // Recursive calls:
  for (const item of dir) {
    const [x, y] = item
    if (steps(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) return true
  }

  // Post-recursion:
  path.pop()

  return false
}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = []
  const path: Point[] = []

  for (const _element of maze) {
    seen.push(new Array(maze[0].length).fill(false))
  }

  steps(maze, wall, start, end, seen, path)

  return path
}