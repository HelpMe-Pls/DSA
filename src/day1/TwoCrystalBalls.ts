export default function two_crystal_balls(breaks: boolean[]): number {
  const steps = Math.floor(Math.sqrt(breaks.length))
  let i = steps

  // jumping a `sqrt` range of `steps` 
  for (; i < breaks.length; i += steps) {
    if (breaks[i]) break  // until the ball breaks 
  }

  // mark the beginning "step" of the range where the ball breaks
  i -= steps

  // traverse within that range to find the exact location where the ball breaks
  for (let j = 0; j <= steps; j++, i++) {
    if (breaks[i]) return i
  }

  return -1
}