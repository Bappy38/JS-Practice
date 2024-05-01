/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function appropriateMap(charOfS, charOfT, charToCharMap) {
    
    return charToCharMap.has(charOfS) && charToCharMap.get(charOfS) === charOfT;
}

function inAppropriateMap(charOfS, charOfT, charToCharMap) {
    
    return charToCharMap.has(charOfS) && charToCharMap.get(charOfS) !== charOfT;
}

function tryMap(charOfS, charOfT, charToCharMap, usedChar) {
    
    if (usedChar.has(charOfT)) {
        
        return false;
    }
    
    usedChar.add(charOfT);
    charToCharMap.set(charOfS, charOfT);
    return true;
}

var isIsomorphic = function(s, t) {
    var charToCharMap = new Map();
    var usedChar = new Set();
    
    for (var i = 0 ; i < s.length ; i++) {
        
        const charOfS = s[i];
        const charOfT = t[i];
        
        if (appropriateMap(charOfS, charOfT, charToCharMap)) {
            
            continue;
        }
        
        if (inAppropriateMap(charOfS, charOfT, charToCharMap)) {
            
            return false;
        }
        else if (!tryMap(charOfS, charOfT, charToCharMap, usedChar)) {
            
            return false;
        }
    }
    return true;
};