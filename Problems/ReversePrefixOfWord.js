var reversePrefix = function(word, seperator) {
    
    var result = "";
    var idxOfFirstOccurrence = word.indexOf(seperator);

    for (var idx = idxOfFirstOccurrence ; idx >=  0; idx--) {
        
        result += word[idx];
    }
    
    for (var idx = idxOfFirstOccurrence+1 ; idx < word.length ; idx++) {
        
        result += word[idx];
    }
    
    return result;
};

console.log(reversePrefix("abcdefd", 'd'));