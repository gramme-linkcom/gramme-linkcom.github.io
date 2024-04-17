let timer;

window.addEventListener("load", function(){
    const content = document.querySelector(".Content");
    if (window.innerWidth < 950){
      content.style.display = "none";
    } else if (window.innerWidth > 950){
      content.style.display = "";
    }
});

var lastInnerWidth = window.innerWidth ;

window.addEventListener( "resize", function () {
	// 現在と前回の横幅が違う場合だけ実行
	if ( lastInnerWidth != window.innerWidth ) {
		// 横幅を記録しておく
		lastInnerWidth = window.innerWidth ;
        const content = document.querySelector(".Content");
        if (window.innerWidth < 950){
          content.style.display = "none";
        } else if (window.innerWidth > 950){
          content.style.display = "";
        }
    }
});