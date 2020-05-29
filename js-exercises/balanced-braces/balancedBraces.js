
function balancedBraces(expressionString) {
    const openingBraces = ['(', '{', '['];
    const closingBraces = [')', '}', ']'];
    const closeOpenBraceSet = { ')': '(', '}': '{', ']': '[' }
    const expressionArray = expressionString.split('');
    const stack = [];

    for (let expression of expressionArray) {
        if (openingBraces.includes(expression)) {
            stack.push(expression);
        } else if (closingBraces.includes(expression)) {
            if (stack.pop() !== closeOpenBraceSet[expression]) {
                return false;
            }
        }
    }
    return !stack.length;
}

export {
    balancedBraces,
};
