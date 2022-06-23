module.exports = function reverse(n) {
    let num = Math.abs(n);
    num = num.toString().split("").reverse().join("");
    return num;
};
