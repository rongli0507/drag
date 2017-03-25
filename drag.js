// JavaScript Document

function drag(id){
    var obj = Document.getElementById(id);
    var disX = 0;
	var disY = 0;
    obj.onmousedown = function(argument) {
		disX = ev.pageX - obj.offsetLeft;
		disY = ev.pageY - obj.offsetTop;
    }
}