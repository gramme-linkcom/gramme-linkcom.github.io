document.addEventListener("DOMContentLoaded", function() {
    content = document.querySelector(".loading");
    content.style.display = "";
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
            data_stringify = JSON.stringify(data);
            data_json = JSON.parse(data_stringify);
            if (data_json[10] == ""){document.getElementById('mailaddress_span').innerHTML = "未登録";} else {document.getElementById('mailaddress_span').innerHTML = ""+data_json[10]+"";}
            if (data_json[6] == ""){document.getElementById('address_span').innerHTML = "未登録";} else {document.getElementById('address_span').innerHTML = data_json[6];}
            if (data_json[4] == ""){document.getElementById('Number_span').innerHTML = "未登録(キャリア契約なし)";} else {document.getElementById('Number_span').innerHTML = data_json[4]+"("+data_json[5]+")";}
            if (data_json[7] == ""){document.getElementById('linkedAccount_span').innerHTML = "未登録";} else {document.getElementById('linkedAccount_span').innerHTML = data_json[7]+"("+data_json[5]+")";}
            content.style.display = "none";
            }).fail(function(data){alert('通信失敗！');});
    }

    document.getElementById('Username_span').innerText = Username;
});