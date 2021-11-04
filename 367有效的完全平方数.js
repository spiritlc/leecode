//  367. 有效的完全平方数
//  给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

//  进阶：不要 使用任何内置的库函数，如  sqrt 。

 

//  示例 1：

//  输入：num = 16
//  输出：true
//  示例 2：

//  输入：num = 14
//  输出：false
 

//  提示：

//  1 <= num <= 2^31 - 1
//  通过次数94,513提交次数212,062
/**
 * @param {number} num
 * @return {boolean}
 */
// 二分法
 var isPerfectSquare = function(num) {
    let left = 1
    let right = num
    while(left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        
        const sum = mid * mid
        if (sum > num) {
            right = mid - 1
        } else if (sum < num) {
            left = mid + 1
        } else {
            return true
        }
    }
    return false
};


// 数学奇才
// function isPerfectSquare(num) {
//     let num1 = 1
//     while(num >0) {
//         num -= num1
//         num1 += 2
//     }
//     return num == 0;
// }

const num = 14
const res = isPerfectSquare(num)
console.log(res)