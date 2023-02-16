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
