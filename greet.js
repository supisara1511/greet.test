function greet(name) {
  if (Array.isArray(name) == true) {
  
    var stringUpperCase = [];
    var stringLowerCase = [];

    for (i = 0; i < name.length; i++) { 
  
      if(name[i] == name[i].toUpperCase()){
        stringUpperCase.push(name[i]) 
      }else{
        stringLowerCase.push(name[i]) 
      }
      
    }
 
    if(stringUpperCase.length > 0){
      return "Hello, " + stringLowerCase.slice(0, -1).join(', ') + ' and ' + stringLowerCase.slice(-1) + "."
      + " AND HELLO " + stringUpperCase + "!";
    }else if (name.length > 2) {
      return "Hello, " + name.slice(0, -1).join(', ') + ', and ' + name.slice(-1) + ".";
    }
    return "Hello, " + name.join(" and ") + ".";
  } else if (name == null) {
    return "Hello, my friend.";
  } else if (name.isUpperCase) {
    return "HELLO " + name.toUpperCase() + "!";
  }
  return "Hello, " + name + ".";
}

module.exports = greet;
