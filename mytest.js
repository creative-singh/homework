var lengthOfLongestSubstring = function(s) {
    let l = 0; let r = 0;
    let max = 0;
    let len = s.length;
    let map = new Map()
    while(r < len) {
        if(map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        } 
        let currMax = r - l + 1
        if(max < currMax) max = currMax
        map.set(s[r], r)
        r++
    }
    // console.log({max, l, r, map})
    return max
};

lengthOfLongestSubstring("pwwkew")