// 1526. 形成目标数组的子数组最少增加次数
// https://leetcode.cn/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/
/**
 * @param {number[]} target
 * @return {number}
 */
function minNumberOperations(target: number[]): number {
    let n = target[0] 
    for(let i = 1; i < target.length; i++){
        let min = target[i] - target[i-1]
        n += min > 0 ? min : 0
    }
    return n
};