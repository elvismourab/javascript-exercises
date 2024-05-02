const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        return oldestAge < personAge ? person : oldest;
    });
};
// This function, findTheOldest, returns the oldest person from an array of objects.
// 1. It sets the currentYear by using JavaScript's Date() method and retrieving the year with the getFullYear() function.
// 2. Then, it calculates the ages (oldestAge and personAge) based on properties passed as parameters. Both check if yearOfDeath has a valid value. If true, it calculates the age based on the object's properties; otherwise, it calculates the age using the currentYear constant.
// 3. After that, the reduce() method performs a logical comparison between oldestAge and personAge, returning the object representing the oldest person.

// Do not edit below this line
module.exports = findTheOldest;
