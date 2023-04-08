function checkEmail(email){
  var reGula = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  if(reGula.test(email)) {
    console.log("Valid Email");
  }else{
    console.log("Invalid Email");
  }
}
checkEmail("a@gmail.com");
checkEmail("ab@yahoo.com");
checkEmail("abc@hotmail.com");
checkEmail("ab@gmail.");
checkEmail("@#abc@gmail.com");

