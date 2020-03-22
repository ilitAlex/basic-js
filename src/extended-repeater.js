module.exports = function repeater(str, obj) {
    // throw 'Not implemented';
    let result = '';
    if (!obj) {return result + '+'}
    if (!obj.hasOwnProperty('separator')) {obj.separator = '+'};
    if (!obj.hasOwnProperty('addition') && !obj.hasOwnProperty('additionSeparator')) {obj.addition = ''; obj.additionSeparator = ''};
    if (obj.hasOwnProperty('addition') && !obj.hasOwnProperty('additionSeparator')) {obj.additionSeparator = '|'};
    for (let i = obj.repeatTimes; i > 1; i--) {
        result += str;
        for (let j = obj.additionRepeatTimes; j > 1; j--) {
            result += obj.addition + obj.additionSeparator;
        };
        result += obj.addition;
        result += obj.separator;

    }
    result += str;
    for (let j = obj.additionRepeatTimes; j > 1; j--) {
        result += obj.addition + obj.additionSeparator;}
    result += obj.addition;
    return result;

};



