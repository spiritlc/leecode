// 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。


// 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。

//  

// 示例：

// 给定 matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12
//  

// 提示：

// 你可以假设矩阵不可变。
// 会多次调用 sumRegion 方法。
// 你可以假设 row1 ≤ row2 且 col1 ≤ col2 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/range-sum-query-2d-immutable
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 前缀和
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.newMatrix = []
    matrix.forEach((item, i) => {
        if (i !== 0) { // 初始化第一位
            this.newMatrix[i] = [matrix[i][0] + this.newMatrix[i - 1][0]]
        } else {
            this.newMatrix[i] = [matrix[i][0]]
        }
        for(let j = 1; j < item.length; j++) {
            if (i !== 0) {
                this.newMatrix[i][j] = this.newMatrix[i][j - 1] + this.newMatrix[i - 1][j] - this.newMatrix[i - 1][j - 1] + matrix[i][j]
            } else {
                this.newMatrix[i][j] = matrix[i][j] + this.newMatrix[i][j - 1]
            }
        }
    })
    console.log(matrix[0])
    this.newMatrix.unshift(new Array(matrix[0] ? matrix[0].length : 0).fill(0))
    this.newMatrix.forEach(item => item.unshift(0))
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    console.log(this.newMatrix[row2 + 1][col2 + 1])
    console.log(this.newMatrix[row1 + 1][col1 + 1])
    console.log(this.newMatrix[row1][col2 + 1])
    console.log(this.newMatrix[row2 + 1][col1])
    return this.newMatrix[row2 + 1][col2 + 1] + this.newMatrix[row1][col1] - this.newMatrix[row1][col2 + 1] - this.newMatrix[row2 + 1][col1]
    // const proRowIndex = row1 - 1
    // const proColIndex = col1 - 1
    // let pro = 0
    // let proRow = 0
    // let proCol = 0
    // if (proColIndex >= 0) {
    //     proRow = this.newMatrix[row2][col1 - 1]
    // }
    // if (proRowIndex >= 0) {
    //     proCol = this.newMatrix[row1 - 1][col2]
    // }
    // if(proRowIndex >= 0 && proColIndex >= 0) {
    //     pro = this.newMatrix[row1 - 1][col1 - 1]
    // }

    // return this.newMatrix[row2][col2] + pro - proRow - proCol
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
const matrix = []


// [2,1,4,3],[1,1,2,2],[1,2,2,4]]

const a = new NumMatrix(matrix)
// console.log(a.sumRegion(2,1,4,3))