export function twoSum(nums: number[], target: number): number[] {
  const numberToIndex = new Map<number, number>();
  numberToIndex.set(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    const complementIndex = numberToIndex.get(target - nums[i]);
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    numberToIndex.set(nums[i], i);
  }

  return [];
}
