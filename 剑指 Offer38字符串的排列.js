// 输入一个字符串，打印出该字符串中字符的所有排列。

//  

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

//  

// 示例:

// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
//  

// 限制：

// 1 <= s 的长度 <= 8

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string[]}
 */
// // 思路，长度阶乘，判断可以组成的最大值
// // 然后判断重复的长度，最大值除以重复的阶乘
// var permutation = function(s) {
//     const obj = {}
//     const sArr = s.split('')
//     let tempIndex = 0
//     let res = 1
//     sArr.forEach((item, index) => {
//         obj[item] = (obj[item] || 0) + 1
//         tempIndex++
//         res = res * tempIndex / obj[item]
//     })
//     return res
// };
// console.log(permutation('abc'))

// 排序，去重
var permutation = function(s) {
    const obj = {}
    const res = []
    for(let i = 0; i < s.length - 1; i++) {
        if (obj[s[i]]) {
            continue
        }
        console.log(i)
        for(let j = i + 1; j < s.length; j++) {
            console.log(s.substr(i, j - i - 1))
            res.push(`${s.substring(0, i)}${s[j]}${s.substr(i + 1, j - i - 1)}${s[i]}${s.substr(j + 1)}`)
        }
        obj[s[i]] = true
    }
    return res
}
console.log(permutation('abc'))