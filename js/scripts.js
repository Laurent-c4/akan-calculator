var submit = function(){
var dob = document.getElementById("dob").value;
//split date to CC YY MM DD
var dobString = dob.toString();
var array1 = new Array();
array1=dobString.split("-");
var year = array1[0];
var array2 = new Array();
array2=year.split("");
//CC
var century = parseInt(array2[0]+array2[1]);
//YY
var year2 = parseInt(array2[2]+array2[3]);
//MM
var month = parseInt(array1[1]);
//DD
var day = parseInt(array1[2]);

var dayOfWeek =Math.round((((century/4)-2*century-1)+((5*year2/4))+((26*(month+1)/10))+day) % 7);

//Akan Names
var male = new Array();
male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female = new Array();
female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//Switch case to determine Akan name
if (document.getElementById("gender_male").checked) {
  switch (dayOfWeek) {
    case 0:
    alert("Your Akan name is " + male[6]);
      break;
    case 1:
    alert("Your Akan name is " + male[0]);
      break;
    case 2:
    alert("Your Akan name is " + male[1]);
      break;
    case 3:
    alert("Your Akan name is " + male[2]);
      break;
    case 4:
    alert("Your Akan name is " + male[3]);
      break;
    case 5:
    alert("Your Akan name is " + male[4]);
      break;
    case 6:
    alert("Your Akan name is " + male[5]);
      break;
  }
}
else if (document.getElementById("gender_female").checked) {
  switch (dayOfWeek) {
    case 0:
    alert("Your Akan name is " + female[6]);
      break;
    case 1:
    alert("Your Akan name is " + female[0]);
      break;
    case 2:
    alert("Your Akan name is " + female[1]);
      break;
    case 3:
    alert("Your Akan name is " + female[2]);
      break;
    case 4:
    alert("Your Akan name is " + female[3]);
      break;
    case 5:
    alert("Your Akan name is " + female[4]);
      break;
    case 6:
    alert("Your Akan name is " + female[5]);
      break;
  }
}
else if (document.getElementById("gender_female").checked===false && document.getElementById("gender_male").checked===false) {
  alert("Please select gender");
}
else if (dob === "") {
  alert("Enter Date of Birth!!!");
}



}
