function swap(arr: number[], i: number, j: number): void {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Function to generate a random pivot index
function generateRandomPivot(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

// Function to perform QuickSort
function qs(arr: number[], low: number, high: number): void {
  if (low < high) {   // base case
    let pivotIndex = generateRandomPivot(low, high);
    let pivotValue = arr[pivotIndex];

    // Swap the pivot index with the last index in `arr`
    swap(arr, pivotIndex, high);
    // Set temporary starting point for partitioning iteration:  
    let i = low - 1;
    // Partitioning: 
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivotValue) {
        i++;
        swap(arr, i, j);
      }
    }

    // Partitioning: Swap the pivot element back so that it's placed within (i, j) range
    swap(arr, ++i, high);

    // Recursively sort the left and right sub-arrays
    qs(arr, low, i - 1);
    qs(arr, i + 1, high);
  }
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}