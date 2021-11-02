// 581. 最短无序连续子数组
// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。

 

// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：0
 

// 提示：

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用栈，挨个压入，
// var findUnsortedSubarray = function(nums) {
//     const minArr = []
//     let minIndex = -1
//     const numsLenth = nums.length
//     for (let i = 0; i < numsLenth; i++) {
//         const item = nums[i]
//         if (!i || item >= nums[i - 1]) {
//             minArr.push(item)
//             console.log(minArr)
//         } else {
//             if (minArr[0] > item) {
//                 minIndex = 0
//             } else {
//                 while(minArr.length && (minArr.pop() > item)) {
//                     console.log(minArr, 'jian', item)
//                 }
//                 minIndex = minArr.length + 1
//             }
//         }
//     }
//     if (minIndex === -1) return 0
//     const maxArr = []
//     let maxIndex = -1
//     for (let i = numsLenth - 1; i > -1; i--) {
//         const item = nums[i]
//         if ((i === numsLenth -1) || item <= nums[i + 1]) {
//             maxArr.push(item)
//         } else {
//             console.log(maxArr, item)
//             if (maxArr[0] < item) {
//                 maxIndex = numsLenth
//             } else {
//                 while(maxArr.length && (maxArr.pop() < item)) {
//                     console.log(maxArr)
//                 }
//                 maxIndex = numsLenth - maxArr.length - 1
//             }
//             break
//         }
//     }
//     console.log(minIndex, maxIndex)
//     return nums.slice(minIndex, maxIndex).length

// };

// const res = findUnsortedSubarray( [1,3,5,4,2])
// console.log(res)
 
var findUnsortedSubarray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        
    }
}
const res = findUnsortedSubarray( [1,3,5,4,2])