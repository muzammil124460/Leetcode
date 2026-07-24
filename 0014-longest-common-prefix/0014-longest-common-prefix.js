var longestCommonPrefix = function(strs) {

    if (strs.length === 0) return "";

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {

        let char = strs[0][i];

        for (let j = 0; j < strs.length; j++) {

            // Agar current string chhoti hai
            if (i >= strs[j].length) {
                return prefix;
            }

            // Agar character match nahi hua
            if (strs[j][i] !== char) {
                return prefix;
            }
        }

        // Sab strings me character same mila
        prefix += char;
    }

    return prefix;
};