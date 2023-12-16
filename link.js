window.onload = onLoad;

function onLoad() {
    link = document.getElementById('base');
    let root = "gramme-linkcom.github.io"
    link.setAttribute('href', "http://"+root);

    console.log("completed rewrite")
}
