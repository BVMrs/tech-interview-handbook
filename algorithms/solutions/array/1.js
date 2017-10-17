/*
 * In an array of arrays, e.g. given [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []], 
 * print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
 */

function printArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}

printArray([[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []]);
