URL_str="https://script.google.com/macros/s/AKfycbz7dv_sN8KcGt2yq7gSZdjiWkeHVJL0jwncv2uAaiSZUga54d2ddJAKJdQ0yWDUoucN/exec"

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
  var UsernameEncrypt = String(Cookies.get('UserName'));
  var PasswordEncrypt = Cookies.get('Password');

  if((UsernameEncrypt == "undefined")||(PasswordEncrypt == "undefind")){
    window.location.href = './index.html';
      return;
  } else {
    UsernameEncrypt = CryptoJS.AES.decrypt(UsernameEncrypt, "UsernameEncrypt");
    var Username = UsernameEncrypt.toString(CryptoJS.enc.Utf8);

    PasswordEncrypt = CryptoJS.AES.decrypt(PasswordEncrypt, "PasswordEncrypt");
    var Password = PasswordEncrypt.toString(CryptoJS.enc.Utf8);

    document.getElementById('Username').innerText = Username+"様"
      $.ajax({
          url: URL_str,
          type: 'get',
          data: {"mode":"Site_Login","name" : Username ,"pass" : Password},
          dataType: 'json'
          }).done(function(data){
          var data_stringify = JSON.stringify(data);
          var data_json = JSON.parse(data_stringify);
          document.getElementById('Username').innerText = Username+"様"
          document.getElementById('Username_Card').innerText = Username;
          document.getElementById('Cardnumber').innerText = data_json[4];
          document.getElementById('Deposit').innerText = data_json[3].toLocaleString()+"円";
          document.getElementById('MainBank').innerText = "貯蓄先銀行："+data_json[2];
          console.log("complete!!")
          }).fail(function(data){
          alert('通信失敗！');
          });
  }
});