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
    screen_mode="true"
    element.style.display = "none"
}

function Delete_All_2() {
    for (let step=1; step < 41; step++) {
        num = "2-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="true"
    element.style.display = "none"
}

function Delete_All_3() {
    for (let step=1; step < 41; step++) {
        num = "3-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="true"
    element.style.display = "none"
}

function Delete_All_4() {
    for (let step=1; step < 41; step++) {
        num = "4-"+String(step)
        Myelement = document.getElementsByName(num);
        Myelement[0].value = "";
        Myelement[1].value = "";
    }
    screen_mode="true"
    element.style.display = "none"
}

function checked_checkbox(){
    let element = document.getElementById('Auto_Scroll_Check');
    if (element.checked == true){
        window.scroll({
            top: window.scrollY+731,
            behavior:'smooth'
        });
      }
}

