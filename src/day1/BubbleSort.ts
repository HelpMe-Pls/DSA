export default function bubble_sort(arr: number[]): void {
  const n = arr.length

  // Traversing the entire array
  for (let i = 0; i < n; i++) {
    // Traversing within that range and swap the elements 
    // so that the max element is placed at the end after each iteration 
    // (that's why we're having `- i`, as the iteration getting smaller and the array is getting sorted)
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
}