// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

// 示例 1：

// 输入: s1 = "abc", s2 = "bca"
// 输出: true 
// 示例 2：

// 输入: s1 = "abc", s2 = "bad"
// 输出: false
// 说明：
// 0 <= len(s1) <= 100
// 0 <= len(s2) <= 100


const s1 = 'abc'
const s2 = 'bac'


// 1.解题思路，先比对长度，两个字符串按相同的规则进行排序后，比对是否相同
// 提交结果
// 执行用时： 72 ms, 在所有 JavaScript 提交中击败了83.59%的用户
// 内存消耗：37.2 MB, 在所有 JavaScript 提交中击败了9.89%的用户
// 代码如下

const func1 = (str1, str2) => (str1.length === str2.length) && str1.split('').sort().join('') === str2.split('').sort().join('')
// const res = func1(s1, s2)

// 2.使用json.strify

const func2 = (str1, str2) => (str1.length === str2.length) && JSON.stringify(str1.split('').sort()) === JSON.stringify(str2.split('').sort())
console.log(func2(s1,s2));