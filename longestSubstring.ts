function lengthOfLongestSubstring(s: string): number {
  const sLen = s.length;
  let res = 0;
  for (let i = 0; i < sLen; i++) {
    const strFreqMap: Record<string, boolean> = {};
    for (let j = i; j < sLen; j++) {
      const char = s.charAt(j);
      if (strFreqMap[char]) {
        break;
      }
      strFreqMap[char] = true;
      res = Math.max(res, j - i + 1);
    }
  }
  return res;
}
