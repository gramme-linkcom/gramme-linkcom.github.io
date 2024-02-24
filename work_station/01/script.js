screen_mode="false"

function list1(){
    var element = document.getElementById("List-1");
    element.style.display = ""
    element = document.getElementById("List-2");
    element.style.display = "none"
    element = document.getElementById("List-3");
    element.style.display = "none"
    element = document.getElementById("List-4");
    element.style.display = "none"
}

function list2(){
    var element = document.getElementById("List-1");
    element.style.display = "none"
    element = document.getElementById("List-2");
    element.style.display = ""
    element = document.getElementById("List-3");
    element.style.display = "none"
    element = document.getElementById("List-4");
    element.style.display = "none"
}

function list3(){
    var element = document.getElementById("List-1");
    element.style.display = "none"
    element = document.getElementById("List-2");
    element.style.display = "none"
    element = document.getElementById("List-3");
    element.style.display = ""
    element = document.getElementById("List-4");
    element.style.display = "none"
}

function list4(){
    var element = document.getElementById("List-1");
    element.style.display = "none"
    element = document.getElementById("List-2");
    element.style.display = "none"
    element = document.getElementById("List-3");
    element.style.display = "none"
    element = document.getElementById("List-4");
    element.style.display = ""
}

function Change_menu_mode() {
    var Class= document.getElementsByClassName("Del_Button_menu")
    if (screen_mode == "false"){
        screen_mode="true"
        Class[0].id = "Del_Button_menu"
        Class[1].id = "Del_Button_menu"
        Class[2].id = "Del_Button_menu"
        Class[3].id = "Del_Button_menu"
        console.log(screen_mode)
    } else {
        screen_mode="false"
        Class[0].id = "Del_Button_menu_none"
        Class[1].id = "Del_Button_menu_none"
        Class[2].id = "Del_Button_menu_none"
        Class[3].id = "Del_Button_menu_none"
        console.log(screen_mode)
    }
}

function Delete_All_1() {
    for (let step=1; step < 41; step++) {
        num = "1-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="false"
    var Class= document.getElementsByClassName("Del_Button_menu")
    Class[0].id = "Del_Button_menu_none"
    Class[1].id = "Del_Button_menu_none"
    Class[2].id = "Del_Button_menu_none"
    Class[3].id = "Del_Button_menu_none"
}

function Delete_All_2() {
    for (let step=1; step < 41; step++) {
        num = "2-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="false"
    var Class= document.getElementsByClassName("Del_Button_menu")
    Class[0].id = "Del_Button_menu_none"
    Class[1].id = "Del_Button_menu_none"
    Class[2].id = "Del_Button_menu_none"
    Class[3].id = "Del_Button_menu_none"
}

function Delete_All_3() {
    for (let step=1; step < 41; step++) {
        num = "3-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="false"
    var Class= document.getElementsByClassName("Del_Button_menu")
    Class[0].id = "Del_Button_menu_none"
    Class[1].id = "Del_Button_menu_none"
    Class[2].id = "Del_Button_menu_none"
    Class[3].id = "Del_Button_menu_none"
}

function Delete_All_4() {
    for (let step=1; step < 41; step++) {
        num = "4-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="false"
    var Class= document.getElementsByClassName("Del_Button_menu")
    Class[0].id = "Del_Button_menu_none"
    Class[1].id = "Del_Button_menu_none"
    Class[2].id = "Del_Button_menu_none"
    Class[3].id = "Del_Button_menu_none"
}

function checked_checkbox(){
    let element = document.getElementById('Auto_Scroll_Check');
    position = window.scrollY+735
    speed = 150
    if (element.checked == true){
        $('html').animate({scrollTop:position}, speed, 'swing'); 
        return false; 
      }
}



function check_All_unlock(){
    var element = document.getElementsByName('checkbox');
    for (let i = 0; i < element.length; i++) {
        element[i].checked = false;
    }
}

function Return_top(){
        window.scroll({
            top: 0,
            behavior:'smooth'
        });
}

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y >= 2100){
        var Class= document.getElementById("Return_top")
        Class.style.display = ""
    } else if (y <= 2100){
        var Class= document.getElementById("Return_top")
        Class.style.display = "none"
    }
  });

  var isTouch = false;
  $(document)
      .on('touchstart', 'input[type="checkbox"]', function() {isTouch = true})
      // スクロールで反応しないようにする
      .on('touchmove', 'input[type="checkbox"]', function() {isTouch = false})
      .on('touchend', 'input[type="checkbox"]', function(e){
           // クリックイベントを強制発火
           if (isTouch) {
              $(this).trigger('click');
              e.preventDefault();
          }
      });

    