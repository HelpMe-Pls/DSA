export default function linear_search(haystack: number[], needle: number): boolean {
  for (let t = 0; t < haystack.length; t++) {
    if (haystack[t] == needle) return true
  }

  return false
}