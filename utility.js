// Line of Code by Jaya Krishna Lakkoju
module.exports = (letmeinsetString) => {  //mgo01rhctm
    var cloningString = letmeinsetString;
    var uppercase = 0, lowercase = 0, digits = 0, specialCharacters = 0;
    console.log('---------------------------------------------');
    console.log(`Given String ---> ${cloningString}`);
    console.log('---------------------------------------------');
    console.log(`Before the String traverse..`);
    console.log('---------------------------------------------');

    console.log(`Uppercase                 ------------> ${uppercase}`);
    console.log(`Lowercase                 ------------> ${lowercase}`);
    console.log(`Digits                    ------------> ${digits}`);
    console.log(`Special Characters        ------------> ${specialCharacters}`);

    //below Line of Code for comparing given string for uppercase,
    //lowecase, special characters, digits.
    for (let i = 0; i < cloningString.length; i++) {
        if (cloningString[i] >= "A" && cloningString[i] <= "Z") {
            uppercase++;
        } else if (cloningString[i] >= "a" && cloningString[i] <= "z") {
            lowercase++;
        } else if (cloningString[i] >= "0" && cloningString[i] <= "9") {
            digits++;
        } else specialCharacters++;
    };
    console.log('----------------------------------------------');
    console.log(`After String traverse..`);
    console.log('----------------------------------------------');

    console.log(`uppercase                  ----------->  ${uppercase}`);
    console.log(`lowercase                  ----------->  ${lowercase}`);
    console.log(`digits                     ----------->  ${digits}`);
    console.log(`specialCharacters          ----------->  ${specialCharacters}`);
    console.log('-----------------------------------------------');
    console.log('Happy Coding !!!');

}