let f = [];
function fact(n) {
    // console.log(n, f[n]);
    if (f[n]) return f[n];
    if (n === 0 || n === 1) return 1;
    return f[n] = n * fact(n - 1);
    // console.log(n * fact(n - 1), f[n]);
}

fact(3)
console.log(f[3]);