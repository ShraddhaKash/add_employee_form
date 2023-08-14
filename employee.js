
let x=document.getElementById("dialogue-box-main");
let y=document.getElementById("main");

let confirmationForm = document.getElementById('confirmationForm');

let cancelBtn= document.getElementById("cancel");
let confirmBtn=document.getElementById("confirm");
let result=false;

function confirmSubmit() {
   
   if(Validate()){
      console.log("valid");
      popUp();
   
let confirmationForm = document.getElementById('confirmationForm');
console.log(confirmationForm);
      if(result==false){
         confirmationForm.submit();
         console.log("confirm submit");
      }
   } 
 }

function confirmReset(){
   popUp();
   if(result==true){
      confirmationForm.reset();
      console.log("confirm reset");
   }
   
}

function popUp(){
   x.style.display="flex";
   y.style.display="none"; 
}

function hide(){
   x.style.display="none";
   y.style.display="flex";
}


 function cancelled(){
   hide();
   result=false;
 }
 function confirmed(){
  hide();
   result=true;
 }
 function Validate(){
   let fname = document.forms["myform-2"]["fname"].value;
   let lname = document.forms["myform-2"]["lname"].value;
   let email = document.forms["myform-2"]["email"].value;
   let phone = document.forms["myform-2"]["phone"].value;
   let domain = document.forms["myform-2"]["domain"].value;

  if (fname == "" || lname == "" || email == "" || phone == "" || domain == "") {
    alert("Fill out all the columns");
    return false;
  }else{
      return true;
  }
  

 }