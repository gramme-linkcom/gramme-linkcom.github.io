window.onpageshow = function(event) {
    if (event.persisted) {
      var Username = String(Cookies.get('UserName'));
      var Password = String(Cookies.get('Password'));
      var Recertification = String(Cookies.get('Recertification'));
        if((Username == "undefined")||(Password == "undefind")){
           window.location.href = './403.html';
        } else if(Recertification == "undefined"){
            var POST_data = location.href;
            POST_data = CryptoJS.AES.encrypt(POST_data, "URL_POST");
            window.location.href = "userrecertification.html?url="+POST_data;
        }
     }
  };

window.addEventListener('load', function() {
    var UsernameEncrypt = String(Cookies.get('UserName'));
    var Recertification_Encrypt = String(Cookies.get('Recertification'));
    UsernameEncrypt = CryptoJS.AES.decrypt(UsernameEncrypt, "UsernameEncrypt");
    Recertification = CryptoJS.AES.decrypt(Recertification_Encrypt, "Recertification");
    Recertification = Recertification.toString(CryptoJS.enc.Utf8);
    Username = UsernameEncrypt.toString(CryptoJS.enc.Utf8);

    if (UsernameEncrypt == "undefined"){
        window.location.href = './403.html';
     } else if (Recertification_Encrypt == "undefined"){
        var POST_data = location.href;
        POST_data = CryptoJS.AES.encrypt(POST_data, "URL_POST");
        window.location.href = "userrecertification.html?url="+POST_data;
     } else if (Username !== Recertification){
        var POST_data = location.href;
        POST_data = CryptoJS.AES.encrypt(POST_data, "URL_POST");
        window.location.href = "userrecertification.html?url="+POST_data;
     } else {
        Cookies.remove("Recertification");
     }


});