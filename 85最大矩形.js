// 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

//  

// 示例 1：

// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],
// ["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：6
// 解释：最大矩形如上图所示。
// 示例 2：

// 输入：matrix = []
// 输出：0
// 示例 3：

// 输入：matrix = [["0"]]
// 输出：0
// 示例 4：

// 输入：matrix = [["1"]]
// 输出：1
// 示例 5：

// 输入：matrix = [["0","0"]]
// 输出：0
//  

// 提示：

// rows == matrix.length
// cols == matrix[0].length
// 0 <= row, cols <= 200
// matrix[i][j] 为 '0' 或 '1'

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximal-rectangle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 采用前缀和 和 贪心算法

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    // 循环，计算出每一个节点的前面数的和
    // 计算方式 sum(i, j) = sum(i, j - 1) + sum(i - 1, j) - sum(i - 1, j - 1) + num(i, j)
    const newMatrix = []
    matrix.forEach((item, i) => {
        item.forEach((itemChild, j) => {
            matrix[i][j] = Number(itemChild)
        })
    })
    matrix.forEach((item, i) => {
        if (i !== 0) { // 初始化第一位
            newMatrix[i] = [matrix[i][0] + newMatrix[i - 1][0]]
        } else {
            newMatrix[i] = [matrix[i][0]]
        }
        for(let j = 1; j < item.length; j++) {
            if (i !== 0) {
                newMatrix[i][j] = newMatrix[i][j - 1] + newMatrix[i - 1][j] - newMatrix[i - 1][j - 1] + matrix[i][j]
            } else {
                newMatrix[i][j] = matrix[i][j] + newMatrix[i][j - 1]
            }
        }
    })
    // 利用贪心算法，进行判断，获取最大的矩形
    let res = 0 // 当前最大的矩形面积

    // for(let i = matrix.length; i > 0; i--) {
    //     for(let j = matrix[0].length; j > 0; j --) {
    //         let x1 = 0
    //         let y1 = 0
    //         let x2 = 
    //     }
    // }
    return res
};
const matrix = [["1","0","1","0","0"],["1","0","1","1","1"], ["1","1","1","1","1"],["1","0","0","1","0"]]
// console.log(matrix)

console.log(maximalRectangle(matrix))
