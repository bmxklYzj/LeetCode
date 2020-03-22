/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (m === 0 && nums1[0] === 0) {
        nums1.splice(0, 1);
    }
    if (n === 0 && nums2[0] === 0) {
        nums2.splice(0, 1);
    }
    for (let i = 0; i < n; i++) {
        let temp = nums2[i];
        let pos = -1;
        pos = nums1.indexOf(temp);
        if (pos === -1) {
            nums1.splice(pos, 0, temp);
        }
    }
    function cmp(a, b) {
        return a-b;
    }
    nums1.sort(cmp)
    // return nums1.sort(cmp);
};

console.log(merge([1],
1,
[2,3],
2));
