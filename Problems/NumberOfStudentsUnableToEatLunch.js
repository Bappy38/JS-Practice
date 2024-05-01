/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    var zerosNeed = 0, onesNeed = 0;

    students.forEach(student => {

        if (student === 0)
            zerosNeed++;
        else
            onesNeed++;
    });

    var sandwichRemain = sandwiches.length;
    for (var sandwich of sandwiches) {

        if (sandwich === 0 && zerosNeed > 0) {

            zerosNeed--;
            sandwichRemain--;
        }
        else if (sandwich === 1 && onesNeed > 0) {

            onesNeed--;
            sandwichRemain--;
        }
        else {
            break;
        }
    }

    return sandwichRemain;
};