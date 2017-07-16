
// tle version
var maxArea = function(height) {
    var maxRes = -1;
    for (var i = 0; i < height.length; i++) {
        var a = height[i];
        for (var j = 0; j < height.length, i !== j; j++) {
            var b = height[j];
            var min = Math.min(a, b);
            maxRes = Math.max(maxRes, min * (Math.abs(i - j)));
        }
    }
    return maxRes;
};

// optimize version == 不会啊😂