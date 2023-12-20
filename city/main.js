URL_str = "https://script.google.com/macros/s/AKfycbz7dv_sN8KcGt2yq7gSZdjiWkeHVJL0jwncv2uAaiSZUga54d2ddJAKJdQ0yWDUoucN/exec"

function Login(){
    const content = document.querySelector(".loading");
        content.style.display = "";
    if (($('#Name').val().length==0) && ($('#Password').val().length==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = 'この項目は必須項目です。';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = 'この項目は必須項目です。';
        content.style.display = "none";
        return;
    } else if(($('#Name').val().length==0) && ($('#Password').val().length!==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = 'この項目は必須項目です。';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = '';
        content.style.display = "none";
        return;
    } else if(($('#Password').val().length==0) && ($('#Name').val().length!==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = '';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = 'この項目は必須項目です。';
        content.style.display = "none";
        return;
    } else {
        $.ajax({
            url: URL_str,
            /* 自サイトのドメインであれば、https://yotuya.com/ というURL指定も可 */
            type: 'get',
            data: {"mode":"Site_Login","name" : $('#Name').val() ,"pass" : $('#Password').val()},
            dataType: 'json'
            }).done(function(data){
            /* 通信成功時 */
            var data_stringify = JSON.stringify(data);
            var data_json = JSON.parse(data_stringify);
            if (data_json[0] == "Not Found Account"){
                let Name_textBox = document.getElementById('Name_text').innerText;
                document.getElementById('Name_text').innerText = 'アカウントが見つからないか、パスワードが間違っています。';
                let Pass_textBox = document.getElementById('Pass_text').innerText;
                document.getElementById('Pass_text').innerText = '';
                content.style.display = "none";
            } else if (data_json[0] == "Authentication failure"){
                let Name_textBox = document.getElementById('Name_text').innerText;
                document.getElementById('Name_text').innerText = 'アカウントが見つからないか、パスワードが間違っています。';
                let Pass_textBox = document.getElementById('Pass_text').innerText;
                document.getElementById('Pass_text').innerText = '';
                content.style.display = "none";
            } else if(navigator.cookieEnabled){
                        // cookieが使えるか確認
                var Save = Save_Account();
                window.location.href = './main';
            }
            }).fail(function(data){
            /* 通信失敗時 */
            alert('通信失敗！');
            });
    }
}




function Save_Account(){
    var Username_temp = String($('#Name').val());
    var Password_temp = String($('#Password').val());
    var Username = CryptoJS.AES.encrypt(Username_temp, "UsernameEncrypt");
    var Password = CryptoJS.AES.encrypt(Password_temp, "PasswordEncrypt");

    Cookies.set('UserName', Username , {expires: 1});
    Cookies.set('Password', Password , {expires: 1});

    console.log(Cookies.get('UserName'));
    console.log(Cookies.get('Password'));

}

function Account_startup(){
    const content = document.querySelector(".loading");
    content.style.display = "";
    $.ajax({
        url: URL_str,
        /* 自サイトのドメインであれば、https://yotuya.com/ というURL指定も可 */
        type: 'get',
        data: {"mode":"Site_Startup","name" : $('#Name').val() ,"pass" : $('#Password').val()},
        dataType: 'json'
        }).done(function(data){
        /* 通信成功時 */
        var data_stringify = JSON.stringify(data);
        var data_json = JSON.parse(data_stringify);
        if (data_json[0] == "Subscribed"){
            const Made_Account = document.querySelector(".Made_Account");
            const Check_AccountInfo = document.querySelector(".Check_AccountInfo");
            Check_AccountInfo.style.display = "none";
            Made_Account.style.display = "";
            content.style.display = "none";
        }
        }).fail(function(data){
        /* 通信失敗時 */
        alert('通信失敗！');
        });
}

function CheckCode(){
    const content = document.querySelector(".loading");
    content.style.display = "";
    if (($('#Code').val().length==0) || ($('#Invisiter_Name').val().length==0)){
        if ($('#Code').val().length==0){
            document.getElementById('Code_text').innerText = 'この項目は必須項目です。';
        } else if ($('#Code').val().length!=0){
            document.getElementById('Code_text').innerText = '';
        }
        if ($('#Invisiter_Name').val().length==0){
            document.getElementById('Invisiter_Name_text').innerText = 'この項目は必須項目です。';
        } else if ($('#Invisiter_Name').val().length!=0){
            document.getElementById('Invisiter_Name_text').innerText = '';
        }
        content.style.display = "none";
        return;
    }
    document.getElementById('Invisiter_Name_text').innerText = '';
    document.getElementById('Code_text').innerText = '';

    $.ajax({
        url: URL_str,
        /* 自サイトのドメインであれば、https://yotuya.com/ というURL指定も可 */
        type: 'get',
        data: {"mode":"Site_invitation_certification","name" : $('#Invisiter_Name').val() ,"code" : $('#Code').val()},
        dataType: 'json'
        }).done(function(data){
        /* 通信成功時 */
        var data_stringify = JSON.stringify(data);
        var data_json = JSON.parse(data_stringify);
        if (data_json[0] == "Not Found Code"){
            let Code_textBox = document.getElementById('Code_text').innerText;
            document.getElementById('Code_text').innerText = 'このコードは存在しません。';
            content.style.display = "none";
        } else if (data_json[0] == "Find"){
            const Invitation_code = document.querySelector(".invitation");
            const UserInfo_Subscribe = document.querySelector(".UserInfo_Subscribe");
            Invitation_code.style.display = "none";
            UserInfo_Subscribe.style.display = "";
            content.style.display = "none";
        }
        }).fail(function(data){
        /* 通信失敗時 */
        alert('通信失敗！');
        });
}

function Acodion_Menu(){
    const content = document.querySelector(".Content");
    if (content.style.display == "none"){
        content.style.display = "";
    } else {
        content.style.display = "none";
    }
}



  function Temp_Account(){
    const content = document.querySelector(".loading");
    content.style.display = "";
    if (($('#Name').val().length==0) && ($('#Password').val().length==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = 'この項目は必須項目です。';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = 'この項目は必須項目です。';
        content.style.display = "none";
        return;
    } else if(($('#Name').val().length==0) && ($('#Password').val().length!==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = 'この項目は必須項目です。';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = '';
        content.style.display = "none";
        return;
    } else if(($('#Password').val().length==0) && ($('#Name').val().length!==0)){
        let Name_textBox = document.getElementById('Name_text').innerText;
        document.getElementById('Name_text').innerText = '';
        let Pass_textBox = document.getElementById('Pass_text').innerText;
        document.getElementById('Pass_text').innerText = 'この項目は必須項目です。';
        content.style.display = "none";
        return;
    }
    $.ajax({
        url: URL_str,
        /* 自サイトのドメインであれば、https://yotuya.com/ というURL指定も可 */
        type: 'get',
        data: {"mode":"Site_FindAc","name" : $('#Name').val()},
        dataType: 'json'
        }).done(function(data){
        /* 通信成功時 */
        var data_stringify = JSON.stringify(data);
        var data_json = JSON.parse(data_stringify);
        if (data_json[0] == "Not Found Account"){
            const UserInfo_Subscribe = document.querySelector(".UserInfo_Subscribe");
            const Check_AccountInfo = document.querySelector(".Check_AccountInfo");
            UserInfo_Subscribe.style.display = "none";
            Check_AccountInfo.style.display = "";
            document.getElementById('Check_AccountInfo_Name').innerText = "ユーザー名："+$('#Name').val();
            document.getElementById('Check_AccountInfo_Mail').innerText = "メールアドレス："+$('#Mail').val();;
            content.style.display = "none";
        } else if (data_json[0] == "Find"){
            document.getElementById('Name_text').innerText = 'このユーザー名は使用できません。';
            content.style.display = "none";
        }
        }).fail(function(data){
        /* 通信失敗時 */
        alert('通信失敗！');
        });
  }

  function Back_AccountInfo(){
    const UserInfo_Subscribe = document.querySelector(".UserInfo_Subscribe");
    const Check_AccountInfo = document.querySelector(".Check_AccountInfo");
    Check_AccountInfo.style.display = "none";
    UserInfo_Subscribe.style.display = "";
  }