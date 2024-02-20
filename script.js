function printText() {                   //Определение функции
  var str1 = "qwerty";
  var str2 = "123qwerty456";
  
  console.log(str2.search( /[7-9]/ ));
  console.log(str2.search( /\d/));
  console.log(str1.search( /[^qwerty]/ ));
  console.log(str1.search( /\W/ ));
  console.log(str1.search( /qwerty/ ));
  console.log(str2.search( /[^qwerty]/ ));
  console.log(str1.search( /\w/ ));
  console.log(str2.search( /qwerty/ ));
  };
  
  printText();