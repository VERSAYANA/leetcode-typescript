Given a string `s` which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, `"Aa"` is not considered a palindrome here.

#### Example 1:

```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
```

#### Example 2:

```
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
```

#### Constraints:

- $1 <= s.length <= 2000$
- `s` consists of lowercase and/or uppercase English letters only.

## Solution 1

```ts
function longestPalindrome1(s: string): number {
  let result = 0;
  let isThereAnyCharWithOddFrequency = 0;
  // Create a map to store the frequency of each character
  const charFrequencyMap = new Map<string, number>();
  for (const char of s) {
    incrementOrSet(charFrequencyMap, char);
  }

  for (const [_, frequency] of charFrequencyMap) {
    if (frequency % 2 === 0) {
      // For characters with even frequency, we can use all of them
      // because we can split them evenly on both sides of the string
      result += frequency;
    } else {
      // We can only use one character with odd frequency in the middle,
      // so if we have more than one, we use one less instance of each.
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
```

- **Time complexity: $O(n)$** , where `n` is the length of `s`
- **Space complexity: $O(1)$**
