// 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

// 实现 NumArray 类：

// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）
// 范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
//  

// 示例：

// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]

// 解释：
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/range-sum-query-immutable
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 大佬解法 ，没看懂。。
//https://leetcode-cn.com/problems/range-sum-query-immutable/solution/ni-yong-yuan-ke-yi-xiang-xin-fen-kuai-su-ugou/


// 前缀和
var NumArray = function(nums) {
    this.obj = {
        '-1': 0 // 定义第一位计算0
    }
    this.numsLength = nums.length  // 计算并保存数组的长度
    nums.forEach((item, index) => {
        this.obj[index] = this.obj[index - 1] + item// 将index及之前每位的和存放再obj中
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    const tempJ = Math.min(this.numsLength - 1, j) // 最大值是数组最大的索引值
    const tempI = Math.max(0, i) // 减去最小索引值前一位的集合
    return this.obj[tempJ] - this.obj[tempI - 1]
};
const numA = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(numA.sumRange(0, 2))














// /**
//  * @param {number[]} nums
//  */
// var NumArray = function(nums) {
//     this.nums = nums;
//     this.numsLength = nums.length;
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     const tempI = Math.max(0, i)
//     const tempJ = Math.min(this.numsLength, j + 1)
//     return  this.nums.slice(tempI, tempJ).reduce((a, b) => a + b)
// };
// const numA = new NumArray([-2, 0, 3, -5, 2, -1])
// console.log(numA.sumRange(2,5))


