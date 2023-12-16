window.onload = onLoad;

function onLoad() {
    let link = document.getElementById('news');
    link.setAttribute('href', "/linkcom/news/index.html");

    link = document.getElementById('about');
    link.setAttribute('href', "/linkcom/about/index.html");
    
    link = document.getElementById('ir');
    link.setAttribute('href', "/linkcom/ir/index.html");
    
    link = document.getElementById('recruit');
    link.setAttribute('href', "/linkcom/recruit/index.html");

    link = document.getElementById('base');
    let root = "gramme-linkcom.github.io"
    link.setAttribute('href', "http://"+root);

    console.log("completed rewrite")
}
