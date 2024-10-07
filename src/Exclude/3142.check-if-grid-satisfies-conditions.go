/*
 * @lc app=leetcode.cn id=3142 lang=golang
 * @lcpr version=30204
 *
 * [3142] 判断矩阵是否满足条件
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
func satisfiesConditions(grid [][]int) bool {
	n := len(grid)
	m := len(grid[0])
	
	for i:=0; i<n; i++ {
		for j:=0; j<m ;j++ {
			// 不能等于下一个
			if i+1<n&&grid[i][j] != grid[i + 1][j]{
				return false
			}
			if j+1<m&&grid[i][j] == grid[i][j + 1]{
				return false
			}
		}
	}
	return true
}
// @lc code=end




// @lcpr case=start
// [[1,0,2],[1,0,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1],[0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1],[2],[3]]\n
// @lcpr case=end



