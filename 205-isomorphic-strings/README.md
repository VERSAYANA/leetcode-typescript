Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

#### Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

#### Example 2:

```
Input: s = "foo", t = "bar"
Output: false
```

#### Example 3:

```
Input: s = "paper", t = "title"
Output: true
```

#### Constraints:

- `1 <= s.length <= 5 * 104`
- `t.length == s.length`
- `s` and `t` consist of any valid ASCII character.

## Solution

```ts
export function isIsomorphic(s: string, t: string): boolean {
  const charMap = new Map<string, string>();
  const usedChars = new Set<string>();
  let transformed = "";
  for (let i = 0; i < s.length; i++) {
    const mappedChar = charMap.get(t[i]);
    if (mappedChar) {
      transformed += mappedChar;
    } else {
      if (usedChars.has(s[i])) {
        return false;
      }
      usedChars.add(s[i]);
      charMap.set(t[i], s[i]);
      transformed += s[i];
    }
  }

  if (s === transformed) {
    return true;
  }

  return false;
}
```

- **Time complexity: $O(n)$** , where `n` is the length of the strings `s` and `t`
- **Space complexity: $O(n)$** , where `m` is the number of unique characters in the strings `s` and `t`
