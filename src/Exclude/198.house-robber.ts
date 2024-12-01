/*
 * @lc app=leetcode.cn id=198 lang=typescript
 * @lcpr version=30204
 *
 * [198] 打家劫舍
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let dp:number[] = Array.from({length:nums.length},()=>(-1))
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
    return dp[nums.length-1]
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */

