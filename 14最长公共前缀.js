// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 提示：

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

var longestCommonPrefix = function(strs) {
    let max = 0
    let index = 0
    while(!max) {
        strs.forEach(item => {
            if (!item[index]) {
                max = index
            }
        });
        index++
    }
    let resArr = ''
    for(let i = 0; i < max; i++) {
        let tempStr = ''
        strs.forEach(item => {
            if (tempStr === '') {
                tempStr = item[i]
            } else if (tempStr !== item[i]) {
                tempStr = false
            } 
        })
        if (tempStr) {
            resArr += tempStr
        } else {
            break
        }
    }
    return resArr
};
let params = ["flower","flow","flight"]
longestCommonPrefix(params)