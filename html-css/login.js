// var example =document.getElementsByClassName('loginWelcome')
// example.style.color = "red";
// console.log(document.querySelector(".loginWelcome")[0].value);
// console.log(example)
// console.log(example[0].innerHTML)

// const collection = document.getElementById("id").getElementsByClassName("loginWelcome");
// let text = collection[0];
// console.log("hyy",text)

const userEmail = "yash.d@sankeysolutions.com";
const userPassword = "12345";

const email = document.getElementById("email");
const password = document.querySelector('input[type="password"]');

var emailValue=""
var passwordValue = ""
email.addEventListener("blur",(event)=>{
    emailValue = event.target.value;
    var emailReg = /^[\w\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const errorElement = document.getElementById("emailError");
    if(!emailReg.exec(emailValue)){
        errorElement.innerHTML="Enter Valid Email";
    }else{
        errorElement.innerHTML="";

    }
})
password.addEventListener("blur",(event)=>{
    passwordValue = event.target.value;
})


function submit(){
    const loginError = document.getElementById("loginError")
    if(emailValue==="" || passwordValue===""){
        loginError.innerHTML="Enter Both the Credentials"
    }
    else if(emailValue!==userEmail || passwordValue!==userPassword){
        loginError.innerHTML="Bad Credentials"
    }
    
}

