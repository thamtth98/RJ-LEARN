function checkUppercase(str) {
    reguExp = /^[A-Z]/;
if(reguExp.test(str)){
    console.log("String's first character is uppercase");
} else {
    console.log("String's first character is not uppercase"); 
}
}
checkUppercase('Abcd');
checkUppercase('abcd');
checkUppercase(`Nguyen van Nam`);
checkUppercase(`NGUYEN VAN NAM`);
checkUppercase('nguyen van Nam');