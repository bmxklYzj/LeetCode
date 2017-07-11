var twoSum = function(nums, target) {
    for (var i = nums.length; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
            if (nums[j] + nums[i] === target) {
                return [j, i];
            }
        }
    }
};

var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        map[nums[i]] = i;
    }
    for (var i = 0, len = nums.length; i < len; i++) {
        var j = map[target - nums[i]];
        if (j) {
            return [i, j];
        }
    }
};

var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        map[nums[i]] = i;
        var j = map[target - nums[i]];
        if (j) {
            return [i, j];
        }
    }

};

// console.log(twoSum([3, 3, 4], 6));