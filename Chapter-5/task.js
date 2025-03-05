const scripts = require('./scripts.js')

function identifyCharacterScript(char) {
    for (const script of scripts.SCRIPTS) {
        for (const range of script.ranges) {
            if (range[0] <= char && range[1] >= char) {
                return script;
            }
        }
    }

    return null;
}

function dominantDirection(text) {
    let count = 0;

    for (const char of text) {
        const script = identifyCharacterScript(char.codePointAt(0));
        if (script === null) {
            continue;
        }
        if (script.direction === "ltr") {
            count -= 1;
        } else {
            count += 1;
        }
    }

    if (count > 0) {
        return "rtl";
    } else if (count < 0) {
        return "ltr";
    } else {
        return "ltr";
    }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl