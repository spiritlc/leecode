// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
//  

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
//  

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let min = 0
    let max = nums.length - 1
    const res = []
    while(max > min) {
        let mid = Math.floor((max + min) / 2)
        if (nums[mid] < target) min = mid + 1
        else max = mid
    }
    if (nums[min] !== target) { // 判断是否有满足的条件
        return [-1, -1]
    }
    res[0] = min
    max = nums.length - 1
    while(max > min) {
        let mid = min + Math.ceil((max - min) / 2)
        if (nums[mid] > target) max = mid - 1
        else min = mid
    }
    res[1] = min
    return res

};
const nums = [5,7,7,8,8,10]
const target = 11
console.log(searchRange(nums, target));