var divide = function(dividend, divisor) {
    let result = dividend / divisor;
    if(result >= Math.pow(2, 31) - 1)
        return Math.pow(2, 31) - 1;
    else if(result <= Math.pow(2, 31) * (-1))
        return Math.pow(2, 31) * (-1);
    else if(result > 0)
        return Math.floor(result);
    else
        return Math.ceil(result);
};

console.log(divide(12,3))