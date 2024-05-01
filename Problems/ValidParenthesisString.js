/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {
    
    var openParIdxs = [];
    var dummyParIdxs = [];
    var length = s.length;
    
    for (var idx = 0 ; idx < length ; idx++) {
        
        var parenthesis = s[idx];
        if (parenthesis === '(') {
            
            openParIdxs.push(idx);
        }
        else if (parenthesis === '*') {
            
            dummyParIdxs.push(idx);
        }
        else if (!tryRemoveCorrespondingOpenPar(openParIdxs, dummyParIdxs)) {
            return false;
        }
    }
    
    return tryRemoveRemainingOpenPars(openParIdxs, dummyParIdxs);
};

function tryRemoveRemainingOpenPars(openParIdxs, dummyParIdxs) {
    
    while(openParIdxs.length > 0) {
        
        if (dummyParIdxs.length === 0 || dummyParIdxs.pop() < openParIdxs.pop()) {
            
            return false;
        }
    }
    return true;
}

function tryRemoveCorrespondingOpenPar(openParIdxs, dummyParIdxs) {
    
    if (openParIdxs.length === 0 && dummyParIdxs.length === 0) {
        
        return false;
    }
    
    var correspondingOpenParIdx = openParIdxs.length > 0 ? openParIdxs.pop() : dummyParIdxs.pop();
    return true;
}