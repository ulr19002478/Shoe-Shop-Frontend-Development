function Register(){
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("password2").value;
    const phone = document.getElementById("phone").value;

    console.log(name,email,password,phone);

    if (name === "" || phone === "" || email === "" || password === ""){
        if(name === ""){
            document.getElementById("nameError").innerHTML = "You must have a valid name!";
        }
        if(phone === ""){
            document.getElementById("phoneError").innerHTML = "You must have a valid phone number!";
        }
        if(email === ""){
            document.getElementById("emailError").innerHTML = "You must have a valid Email Address!";
        }
        if(password === ""){
            document.getElementById("passError").innerHTML = "Please Enter a Password!";
        }
       
         
    }
    else if(password != confirmPassword){
        document.getElementById("matchError").innerHTML = "Passwords do not match"

    }
    
    else{

    

    var user = {
        name:name,
        email:email,
        password:password,
        phone:phone
    }

    localStorage.setItem("userInfo", JSON.stringify(user));
    window.location.href="Account.html";
    }
}

