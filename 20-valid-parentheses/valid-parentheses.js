/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            const prevVal = stack.pop();

            if (prevVal === "(" && char !== ")") return false;
            if (prevVal === "[" && char !== "]") return false;
            if (prevVal === "{" && char !== "}") return false;
            if (prevVal === undefined) return false;
        }
    }

    return stack.length === 0;
};