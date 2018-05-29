var text = "Hi I am javascript I can change the content at any time";
function changeText() {
    var para = document.getElementById("par");
    var temp = para.innerHTML;

    para.innerHTML = text;
    text = temp;
}


var butt = document.getElementById("change");
butt.addEventListener("click", changeText);
