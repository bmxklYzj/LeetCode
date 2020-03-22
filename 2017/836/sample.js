// https://leetcode-cn.com/problems/rectangle-overlap/solution/ju-xing-zhong-die-by-leetcode-solution/

// 两个矩形是否相交
// 时间复杂度 O(1)
// 空间复杂度 O(1)
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  if (rec1[0] > rec2[0]) {
    let temp = rec1;
    rec1 = rec2;
    rec2 = temp;
  }
  const hor = rec1[0] >= rec2[2] || rec1[2] <= rec2[0];
  
  if (rec1[1] > rec2[1]) {
    let temp = rec1;
    rec1 = rec2;
    rec2 = temp;
  }
  const vert = rec1[1] >= rec2[3] || rec1[3] <= rec2[1];
  
  return !(hor || vert);
};
