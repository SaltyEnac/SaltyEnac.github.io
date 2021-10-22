function submit(){
  var hello = document.getElementById('select').value
  window.alert(hello)
}

var a;

function getName(){
  //get value from input field and save as "a"
  a = document.getElementById('username').value;
  //create LS key with value of "a"
  localStorage.setItem('uName',a);
  //automatically take user to two.html
  location.href = "two.html";
}


