window.onload = function(){
    const target_MCServer = document.querySelector('#MC_Server_Info_Image');
    const target_WebServer = document.querySelector('#Web_Server_Info_Image');
    const target_PaymentSystem = document.querySelector('#Payment_System_Info_Image');
    var url_list = ["Server_normal.png","Server_abnormal.png","Server_stop.png"];
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycby2GEoY1YbIfVTxeJjKLOQuuPyGYiUg4g0cRLIhWHrftd4T4L4S9EhC9n_d5kA9ZjUV-Q/exec",
        type: 'get',
        }).done(function(data){
            target_MCServer.src = url_list[data[0]];
            target_WebServer.src = url_list[data[1]];
            target_PaymentSystem.src = url_list[data[2]];
        }).fail(function(data){
        /* 通信失敗時 */
        alert('通信に失敗しました。再度お試しください。');
        const content = document.querySelector(".loading");
        content.style.display = "none";
        });
}