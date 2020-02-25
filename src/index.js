module.exports = function reverse (n) {
    let pos = Math.abs(n);
    let arr = pos.toString().split('');
    let reverseNumber = +arr.reverse().join('');
    return reverseNumber;
}
