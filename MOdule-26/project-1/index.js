document.getElementById("submit-btn").addEventListener("click" , function(){
    // console.log('SUbmit button clicked')
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // console.log(email)
    // const passField = document.getElementById("user-pass");
    // const password = passField.value;
    // console.log|(email,password)

     const userPass = document.getElementById("user-pass");
     const password = userPass.value
     console.log(email ,password);
     
     if(email === 'sayed@gmail.com' && password == "iloveyou"){
        // console.log('valid Email , pass')
        window.location.href = 'bank.html'
     }else{
        alert("Incorrect password")
     }
})

//...................................................................

