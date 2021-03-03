// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

// 示例 1:

// 输入: 2
// 输出: [0,1,1]
// 示例 2:

// 输入: 5
// 输出: [0,1,1,2,1,2]
// 进阶:

// 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
// 要求算法的空间复杂度为O(n)。
// 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/counting-bits
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 全量循环
function getNum(num) {
    // 奇数 = 前一位 + 1  偶数 = i / 2 
    const res = [0]
    for(let i = 1; i <= num; i++) {
        if (i & 1 === 1) {
            res.push(res[i - 1] + 1)
        } else {
            res.push(res[i / 2])
        }
    }
    return res
    
    // 通过节点
    // const res = [0]
    // let sign = 0
    // let signIndex = 0
    // let signNum = Math.pow(2, sign)
    // for(let i = 1; i <= num; i++) {
    //     if (i === signNum) {
    //         res.push(1)
    //         sign ++
    //         signNum = Math.pow(2, sign)
    //         signIndex = i
    //     } else {
    //         res.push(res[i - signIndex] + 1)
    //     }
    // }
    // return res
}

console.log(getNum(5))