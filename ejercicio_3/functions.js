var lightstatus = true
var contentstatus = true

function changecolor() {
    var elements = document.getElementsByClassName('color'); //Get all elements with class name color

    if (lightstatus == false) {
        for (var index = 0; index < elements.length; index++) {
            elements[index].style.color = "black"
        }

        document.getElementById('container').style.backgroundcolor = "rgba(255, 255, 255, 0.7)"
        lightstatus = true;
    } else {
        for (var index = 0; index < elements.length; index++) {
            elements[index].style.color = "white"
        }

        document.getElementById('container').style.backgroundcolor = "rgba(0, 0, 0, 0.7)"
        lightstatus = false;
    } 
 }

function changecontent() {
    if (contentstatus == false) {

        document.getElementById('secondphoto').src='./assets/share.jpg'
        contentstatus ==true;
    } else {
        document.getElementById('secondphoto').src='./assets/1320128.jpeg'
        contentstatus =false;
    }
}