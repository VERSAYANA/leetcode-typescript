export function pivotIndex1(nums: number[]): number {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

export function pivotIndex2(nums: number[]): number {
  const runningSum: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    runningSum[i] = nums[i] + runningSum[i - 1];
  }
  const totalSum = runningSum[runningSum.length - 1];

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - runningSum[i] + nums[i] === runningSum[i]) {
      return i;
    }
  }

  return -1;
}
