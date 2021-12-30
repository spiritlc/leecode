// Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，
// 并且由 groupSize 张连续的牌组成。

// 给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。
// 如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

//  

// 示例 1：

// 输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// 输出：true
// 解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
// 示例 2：

// 输入：hand = [1,2,3,4,5], groupSize = 4
// 输出：false
// 解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
//  

// 提示：

// 1 <= hand.length <= 104
// 0 <= hand[i] <= 109
// 1 <= groupSize <= hand.length
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function(hand, groupSize) {
    let len = hand.length
    if(len % groupSize) {
        return false
    }
    const obj = {}
    hand.forEach(item => {
        obj[item] = obj[item] ? obj[item] + 1 : 1
    })
    const keyArr = Object.keys(obj).sort((a, b) => a - b)
    let minIndex = 0;
    while(len > 0) {
        let index = 1
        let card = keyArr[minIndex]
        console.log(card, card);
        while(index <= groupSize) {
            console.log(card, obj[card]);
            if (!obj[card]) {
                return false
            }
            obj[card]--
            if (!obj[keyArr[minIndex]]) {
                minIndex++
            }
            card++
            index++
            len--
        }
    }
    return true
};

console.log(isNStraightHand([8,8,9,7,7,7,6,7,10,6], 2));