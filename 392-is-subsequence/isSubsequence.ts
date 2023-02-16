export function isSubsequence(s: string, t: string): boolean {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer += 1;
    }
    tPointer += 1;
  }

  return sPointer === s.length;
}
