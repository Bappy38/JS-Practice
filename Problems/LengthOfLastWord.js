/**
 * @param {string} s
 * @return {number}
 */

function isNonEmptyWord(word) {

    for (var char of word) {
        
        if(char !== ' ') {
            
            return true;
        }
    }
    return false;
}

var lengthOfLastWord = function(s) {
    
    var words = s.split(' ').filter(word => isNonEmptyWord(word));
    var lastWord = words.pop();
    return lastWord.length;
};