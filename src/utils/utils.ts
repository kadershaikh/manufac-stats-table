// function to find the mean (average) of an array of numbers
export function findMean(numbers: number[]) {
    let total = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
  }
  
  // function to find the median of an array of numbers
  export function findMedian(numbers: number[]){
    let median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
  }
  
  // function to find the mode of an array of numbers
  export function findMode(numbers: number[]) {
    const numCounts: { [key: number]: number } = {};

    // Count occurrences of each number
    numbers.forEach((num) => {
      numCounts[num] = (numCounts[num] || 0) + 1;
    });
  
    // Find the mode
    let mode = null;
    let maxCount = 0;
  
    for (const num in numCounts) {
      if (numCounts[num] > maxCount) {
        maxCount = numCounts[num];
        mode = Number(num);
      }
    }
  
    return mode;
  }
  