var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    const xs = Math.abs(x) + ''
    let length
    
    (xs.length) % 2 == 0 ? iso = true : iso = false
    if (iso) {
        length = Math.floor((xs.length) / 2)
        for (let i = 0; i <= length; i++) {
            if (xs[i] != xs[xs.length - 1 - i] ) {
            return false
            }
        }
    } else {
        length = Math.floor(xs.length / 2) - 1
        for (let i = 0; i <= length; i++) {
            if (xs[i] != xs[xs.length - 1 - i] ) {
            return false
            }
        }
    }
    return true
}

console.log(isPalindrome(11121))