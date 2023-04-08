function checkAccout(str) {
    var reacc = /^[_a-z0-9]{6,}$/;
    if(reacc.test(str)){
        console.log("Valid Account");
    }else{
        console.log("Invalid Account");
    }
}
checkAccout("123abc_");
checkAccout("_abc123");
checkAccout("_____");
checkAccout(".@");