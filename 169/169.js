/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let string = nums.join(',');
    string += ','
    string = ',' + string;
    for (let i = 0, len = nums.length; i < len; i++) {
        // let reg = /(\d+)+/g;
        // console.log(string.match(new RegExp(nums[i], 'g')).length);
        let t = ',' + nums[i] + ',';
        // console.log(string, t, i);
        let cnt = 0;
        let reg = new RegExp(t, 'g');
        while (reg.exec(string)) {
            reg.lastIndex--;
            cnt++;
            if (cnt > (~~(len / 2))) {
                return + nums[i];
            }
        }
    }
};

console.log(majorityElement([1]));