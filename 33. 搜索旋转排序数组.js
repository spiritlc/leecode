// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：

// 输入：nums = [1], target = 0
// 输出：-1
//  

// 提示：

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// nums 中的每个值都 独一无二
// 题目数据保证 nums 在预先未知的某个下标上进行了旋转
// -10^4 <= target <= 10^4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    while(max >= min) {
        let mid = Math.floor((max + min) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] >= nums[min]) { // 左侧是按顺序排序
            if ((nums[mid] > target) && (nums[min] <= target)) { // target位于左侧
                max = mid - 1
            } else { // target位于右侧
                min = mid + 1
            }
        } else { // 右侧是按顺序排序
            if ((nums[mid] < target) && (nums[max] >= target)) { // target位于右侧
                min = mid + 1
            } else {
                max = mid - 1
            }
        }
    }
    return -1
};

console.log(search([4,5,6,7,0,1,2], 0));