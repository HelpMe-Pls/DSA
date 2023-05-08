export default function bs_list(haystack: number[], needle: number): boolean {
  var low = 0, high = haystack.length

  while (low <= high) {
    let midIdx = Math.floor((low + high) / 2)
    let currentValue = haystack[midIdx]

    // Found it!
    if (currentValue === needle) return true;

    // Else look in left or right half respectively
    else if (currentValue < needle)
      low = midIdx + 1;
    else
      high = midIdx - 1;
  }

  return false;
}