// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * 思路，数字去符号反转，进行范围的比较
 */
/**
 * 思路2，数字对10进行取余，取完的余数作为新数字的头
 */


var reverse = function(x) {
    //  1.字符串反转
    // const absNum = Math.abs(x) // 进行取整
    // const resX = absNum.toString().split('').reverse().join('')



    // 进行取余
    let dealX = Math.abs(x)
    let resX = 0
    while(dealX > 0) {
        resX = resX * 10 + dealX % 10
        dealX = Math.floor(dealX / 10)
    }

    const bianjie = Math.pow(2, 31)
    if (x < 0) {
        return resX < bianjie ? -resX : 0
    } else {
        return resX < bianjie - 1 ? resX : 0
    }
};
console.log(reverse(-123))