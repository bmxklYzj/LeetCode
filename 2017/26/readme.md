# description

给一个排好序的数组，让你去重，例如[1,1,2]数组要变为[1,2]然后函数返回数组个数2

# solution

直接for循环一下数组，再while循环判断每一位和其后面的各位是否相同，相同的话用splice移除。每次for循环最终个数+1

# conclusion

