/*
 * @lc app=leetcode.cn id=207 lang=typescript
 * @lcpr version=30204
 *
 * [207] 课程表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // 考虑入度，后面要根据ingree的0的数目来进行count的增减，所以得初始化为0；
    let ingree = new Array(numCourses).fill(0);
    // 设置所有元素为空数组，二维的，得用form；
    let amap: number[][] = Array.from({ length: numCourses }, () => [])

    //   统计对应关系和入度
    for (let i = 0; i < prerequisites.length; i++) {
        // amap.set(prerequisites[i][0], prerequisites[i][1]);
        // 对于相同的元素，表示所有的关系
        amap[prerequisites[i][0]].push(prerequisites[i][1]);
        // 所有节点的入度
        ingree[prerequisites[i][1]]++;
    }

    //  入度为0的节点的队列
    let queue: number[] = [];
    //   访问过的节点
    let count: number = 0;
    for (let i = 0; i < numCourses; i++) {
        // 把所有入度为0的节点放入队列；
        if (ingree[i] === 0) {
            queue.push(i);
            // count++;
        }
    }

    // 遍历队列
    while (queue.length) {
        // 访问队首元素
        let cur = queue.shift() as number;
        count++;
        for (let i = 0; i < amap[cur].length; i++) {
            // 减少入度为0的节点的相邻节点的入度
            ingree[amap[cur][i]]--;
            // 如果入度为0，就push到队列中，同时增加访问的节点的数量
            if (ingree[amap[cur][i]] === 0) {
                queue.push(amap[cur][i]);
                // count++;
            }
        }
    }
    return count === numCourses
};
// @lc code=end



/*
// @lcpr case=start
// 2\n[[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n[[1,0],[0,1]]\n
// @lcpr case=end

 */

