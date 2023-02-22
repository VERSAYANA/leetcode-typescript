export function longestPalindrome1(s: string): number {
  let result = 0;
  let isThereAnyCharWithOddFrequency = 0;

  const charFrequencyMap = new Map<string, number>();
  for (const char of s) {
    incrementOrSet(charFrequencyMap, char);
  }

  for (const [_, frequency] of charFrequencyMap) {
    if (frequency % 2 === 0) {
      result += frequency;
    } else {
      isThereAnyCharWithOddFrequency = 1;
      result += frequency - 1;
    }
  }

  return result + isThereAnyCharWithOddFrequency;
}

function incrementOrSet(map: Map<string, number>, key: string) {
  const value = map.get(key);
  if (value === undefined) {
    map.set(key, 1);
  } else {
    map.set(key, value + 1);
  }
}
