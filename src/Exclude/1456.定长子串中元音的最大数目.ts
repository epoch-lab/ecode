/*
 * @lc app=leetcode.cn id=1456 lang=typescript
 * @lcpr version=30204
 *
 * [1456] 定长子串中元音的最大数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxVowels(s: string, k: number): number {
    // o(n)的滑动窗口，初始化之后再扫一遍就是了
    const vowels = new Set(['a','e','i','o','u']);
    let maxCount = 0;
    let currentCount = 0;
    for(let i=0;i<k;i++){
        if(vowels.has(s[i])){
            currentCount++;;
        }
    }

    maxCount = currentCount;

    for(let i=k;i<s.length;i++){
        if(vowels.has(s[i])){
            currentCount++;
        }
        if(vowels.has(s[i-k])){
            currentCount--;
        }
        maxCount = Math.max(currentCount, maxCount);
    }
    return maxCount;
};
// @lc code=end




// @lcpr case=start
// "abciiidef"\n3\n
// @lcpr case=end

// @lcpr case=start
// "aeiou"\n2\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n3\n
// @lcpr case=end

// @lcpr case=start
// "rhythms"\n4\n
// @lcpr case=end

// @lcpr case=start
// "tryhard"\n4\n
// @lcpr case=end


