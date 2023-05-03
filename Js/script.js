//LoginData
loginEmail = document.getElementById("form2Example1");//Login Zamani Email
loginPassword = document.getElementById("form2Example2");//Login Zamani Parol
loginbtn = document.getElementById("loginbutton");//Login Ucun Button
signEmail = document.getElementById("form3Example3c");//Signin Zamani Email
signPassword = document.getElementById("form3Example4c")//Signin Zamani Email
Signbtn = document.getElementById("SignUpButton");//signin Zamani Email
sigpace = document.getElementById("SignPage");//Sign Sehifesi
lgnpage = document.getElementById("LoginPage");//Login sehifesi
rgsbtn = document.getElementById("registerbtn")//Hesab yoxddsa qeydiyyatdan kec duymesi

rgsbtn.addEventListener("click", function () {
    sigpace.style.display = "block"
    lgnpage.style.display="none"
})

//Signin
Signbtn.addEventListener("click", function () {
    SignUserEmail = signEmail.value
    SignUserPassword = signPassword.value
    sigpace.style.display = "none"
    lgnpage.style.display="block"

});
//Login
loginbtn.addEventListener("click", function () {
    lgnpage.style.display = "block"
    if (loginEmail.value == SignUserEmail && loginPassword.value == SignUserPassword) {
        alert("WelCome")
    }
    else {
        alert("Yanlisdir")
    }
});
