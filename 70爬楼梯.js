// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
// 示例 1：
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 3.  2 阶 + 1 阶
// 2.  1 阶 + 2 阶

/**
 * 单一参数递归超时，无尾递归,采用递推
*/
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const arr = []
    arr[0] = 1
    arr[1] = 1
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
};


/**
 * 多参数，采用递归
*/
console.time('sumClimbStairs')
const res = climbStairs(45)
console.log(res); 
console.timeEnd('sumClimbStairs')