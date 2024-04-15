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
    document.getElementById('Username_invi').innerText = "ユーザー名："+Username;
      $.ajax({
          url: URL_str,
          /* 自サイトのドメインであれば、https://yotuya.com/ というURL指定も可 */
          type: 'get',
          data: {"mode":"Site_Login","name" : Username ,"pass" : Password},
          dataType: 'json'
          }).done(function(data){
          /* 通信成功時 */
          var data_stringify = JSON.stringify(data);
          var data_json = JSON.parse(data_stringify);
          document.getElementById('InvitationCode').innerText = "招待コード："+data_json[12];
          console.log("complete!!")
          }).fail(function(data){
          /* 通信失敗時 */
          alert('通信失敗！');
          });
  }
});