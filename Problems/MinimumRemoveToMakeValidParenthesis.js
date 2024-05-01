/**
 * @param {string} s
 * @return {string}
 */

function hasCorrespondingOpenPar(openParIdxs) {
    return openParIdxs.length > 0;
}

function isOpenParenthesis(ch) {
    return ch === '(';
}

function isAlphabet(ch) {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
}

function getMinIndexesNeedToRemove(s) {

    var openParIdxs = [];
    var removedIdxs = new Map();

    for (var idx = 0 ; idx < s.length ; idx++) {

        if (isAlphabet(s[idx])) {
            continue;
        }

        if (isOpenParenthesis(s[idx])) {
            openParIdxs.push(idx);
            continue;
        }
        
        if (hasCorrespondingOpenPar(openParIdxs)) {
            openParIdxs.pop();
        }
        else {
            removedIdxs.set(idx, true);
        }
    }
    
    while(openParIdxs.length > 0) {
        removedIdxs.set(openParIdxs.pop(), true);
    }
    
    return removedIdxs;
}

var minRemoveToMakeValid = function(s) {
    
    var indexesToRemove = getMinIndexesNeedToRemove(s);
    
    var longestValidParenthesis = "";
    
    for (var idx = 0 ; idx < s.length ; idx++) {
        
        if(indexesToRemove.has(idx)) {
            continue;
        }
        
        longestValidParenthesis += s[idx];
    }
    return longestValidParenthesis;
};