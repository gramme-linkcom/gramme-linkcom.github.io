window.onpageshow = function(event) {
    if (event.persisted) {
      var Username = String(Cookies.get('UserName'));
      var Password = String(Cookies.get('Password'));
        if((Username == "undefined")||(Password == "undefind")){
           window.location.href = './403.html';
     }
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    var Username = String(Cookies.get('UserName'));
    var Password = String(Cookies.get('Password'));
  if((Username == "undefined")||(Password == "undefind")){
    window.location.href = './index.html';
      return;
  }
});

function Recertification_input(){ 
    var UsernameEncrypt = String(Cookies.get('UserName'));
    var PasswordEncrypt = String(Cookies.get('Password'));
    UsernameEncrypt = CryptoJS.AES.decrypt(UsernameEncrypt, "UsernameEncrypt");
    PasswordEncrypt = CryptoJS.AES.decrypt(PasswordEncrypt, "PasswordEncrypt");
    var Username = UsernameEncrypt.toString(CryptoJS.enc.Utf8);
    var Password = PasswordEncrypt.toString(CryptoJS.enc.Utf8);

    if (($('#Name').val().length==0) && ($('#Password').val().length==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = 'この項目は必須項目です。';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = 'この項目は必須項目です。';
        return;
    } else if(($('#Name').val().length==0) && ($('#Password').val().length!==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = 'この項目は必須項目です。';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = '';
        return;
    } else if(($('#Password').val().length==0) && ($('#Name').val().length!==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = '';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = 'この項目は必須項目です。';
        return;
    } else {
        var Username_input = $('#Name').val();
        var Password_input = $('#Password').val();
        
        if ((Username != Username_input) || (Password != Password_input)){
            if (Username != Username_input){
                document.getElementById('Name_text').innerText = '現在のログインユーザーと違います。';
            } else if (Username == Username_input){
                document.getElementById('Name_text').innerText = '';
            }

            if (Password != Password_input){
                document.getElementById('Pass_text').innerText = 'パスワードが違います。';
            } else if (Password == Password_input){
                document.getElementById('Pass_text').innerText = '';
            }
            return;
        }
        var Recertification = CryptoJS.AES.encrypt(Username, "Recertification");
        Cookies.set('Recertification', Recertification , {expires: 1});
        var query = location.search;
        var value = query.split('=');
        var URL = decodeURIComponent(value[1]);
        URL = CryptoJS.AES.decrypt(URL, "URL_POST");
        URL = URL.toString(CryptoJS.enc.Utf8);
        window.location.href = URL;
    }
}

