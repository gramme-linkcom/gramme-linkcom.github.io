window.addEventListener("load", function(){
    Cookies.remove("Password");
    Cookies.remove("UserName");
    window.location.href = './index';
});