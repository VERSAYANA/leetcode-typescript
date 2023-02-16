export function isIsomorphic1(s: string, t: string): boolean {
  const sCharToTCharMap = new Map<string, string>();
  const usedTChars = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    const mappedCharFromT = sCharToTCharMap.get(s[i]);
    if (mappedCharFromT === undefined) {
      // The character from `s` was not previously mapped to a character from `t`
      if (usedTChars.has(t[i])) {
        // But the current character from `t` was already used for another character from `s`
        return false;
      }
      sCharToTCharMap.set(s[i], t[i]);
      usedTChars.add(t[i]);
    } else if (mappedCharFromT !== t[i]) {
      // The character from `s` was already mapped to a character from `t`
      // , but a different character from `t`, not the current one.
      return false;
    }
  }

  return true;
}

export function isIsomorphic2(s: string, t: string): boolean {
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
