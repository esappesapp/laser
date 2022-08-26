console.log("hey fam");
var string = "yooo";
var t;

function clicked(f) {t = document.getElementById(f); ; 

if(f == 'hippy') {
var img = document.createElement("img");
img.src = "theimage.jpeg";
img.style.marginTop = '-1000em';
img.style.marginLeft = '40em';
t.appendChild(img);
} else {
var img = document.createElement("img");
img.src = "bird.gif";
img.style.marginTop = '-1000em';
img.style.marginLeft = '10em';
t.appendChild(img);
}
}



