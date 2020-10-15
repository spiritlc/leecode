// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 解题思路
 * 1.预备一个空对象
 * 2.遍历数组，计算当前值和目标值的插值，比对对象中是否有该数据，有的话返回结果，没有，将当前值作为key，索引位置作为value存入对象中
 */

const twoSum = (nums, target) => {
    const numsLength = nums.length
    const obj = {}
    for(let i = 0; i < numsLength; i++) {
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i]
        } else {
            obj[nums[i]] = i
        }
    }
}
const nums = [-3,4,3,90]
const target = 0
console.log(twoSum(nums, target))