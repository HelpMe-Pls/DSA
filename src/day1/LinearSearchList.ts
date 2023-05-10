export default function linear_search(haystack: number[], needle: number): boolean {
  for (const element of haystack) {
    if (element == needle) return true
  }

  return false
}