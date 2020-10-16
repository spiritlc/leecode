// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true


/**
 * 思路,利用队列，每次弹出一个元素，如果是左侧元素，进行存储，右侧元素和左侧元素进行抵消
 * 
*/


var isValid = function(s) {
    const sLength = s.length
    if (sLength === 0) return

    if (s % 2 || ['}', ')', ']'].indexOf(s[0]) > -1) return false
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    const resStack = []
    for(let key of s) {
        if (obj[key]) {
            resStack.push(key)
        } else if (obj[resStack.pop()] !== key) {
            return false
        }
    }
    return !resStack.length
};




const a = '([]())'
console.log(isValid(a));