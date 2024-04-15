function menus(e){
    var Serch_hamburger = document.getElementById(e.id);
    var header_height = document.getElementById("header").getBoundingClientRect();
    if (e.id == "hamburger"){
        Serch_hamburger.id = 'hamburger_open';
        var Serch_left_menu = document.getElementById('left-menu');
        var hamburger_background = document.getElementById("hamburger_background");
        hamburger_background.id = "hamburger_background_display"
        Serch_left_menu.style.top = header_height.height+"px";
        Serch_left_menu.id = 'left-menu-display';
        console.log(Serch_hamburger);
        console.log(document.querySelector('div.left-menu'));
    }
    else if (e.id == "hamburger_open"){
        Serch_hamburger.id = 'hamburger';
        var Serch_left_menu = document.getElementById('left-menu-display');
        var hamburger_background = document.getElementById("hamburger_background_display");
        hamburger_background.id = "hamburger_background"
        Serch_left_menu.style.top = header_height.height+"px";
        Serch_left_menu.id = 'left-menu';
        console.log(Serch_hamburger);
        console.log(document.querySelector('div.left-menu'));
    }
}