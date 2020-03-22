const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(N) {
    if (typeof N !== "string" || /[A-Za-z]/.test(N) || N <= 0 || N > MODERN_ACTIVITY)
        return false;
    let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
    let years = Math.log(MODERN_ACTIVITY / parseFloat(N)) / rate;
    return Math.ceil(years);
};



// assert.equal(dateSample('3'), 13308);