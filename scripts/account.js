document.addEventListener("DOMContentLoaded", function(){

    var userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const{name, email, phone} = userInfo;
    console.log(userInfo);
    alert("help")
    
    document.getElementById("name").innerHTML = `Hi, ${name}, welcome to your account!`;
    document.getElementById("email").innerHTML = `<b>Email:<b>${email}`;
    document.getElementById("phone").innerHTML = `<b>Phone:<b>${phone}`;
})

alert("help 2")
function Logout(){
    alert("Logged out!")
    localStorage.removeItem("userInfo");
    window.location.href="index.html";
}