var myCanvas = document.getElementById("canvas1")
ctx = myCanvas.getContext("2d")
var carwidth = 100
var carheight = 90
var carx = 300
var cary = 500
var bg = "racing.jpg"
var c = "car1.png"
function add() {
    background_image = new Image()
    background_image.onload = bgo;
    background_image.src = bg
    car1_image= new Image()
    car1_image.onload = co;
    car1_image.src = c
    car2_image= new Image()
    car2_image.onload = co2;
    car2_image.src = c2
}
var carwidth2 = 100
var carheight2 = 90
var carx2 = 400
var cary2 =500
var bg2 = "racing.jpg"
var c2 = "15-155064_race-car-clipart-above-bird-eye-view-car.jpg"

function bgo() {
    ctx.drawImage(background_image, 0, 0, canvas1.width, canvas1.height)
}
function co() {
    ctx.drawImage(car1_image, carx, cary, carwidth, carheight)
}
function co2() {
    ctx.drawImage(car2_image, carx2, cary2, carwidth, carheight)
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypress = e.keyCode
    if (keypress == 38) {
        up()
        console.log("up")
    }
    if (keypress == 40) {
        down()
        console.log("down")
    }
    if (keypress == 37) {
        left()
        console.log("left")
    }
    if (keypress == 39) {
        console.log("right")
        right()
    }
    keypress = e.keyCode
    if (keypress == 87) {
        up2()
        console.log("up")
    }
    if (keypress == 83) {
        down2()
        console.log("down")
    }
    if (keypress == 65) {
        left2()
        console.log("left")
    }
    if (keypress == 68) {
        right2()
        console.log("right")
    }
}
    if (cary==0) {
        var win= document.getElementById("GS").innerHTML
        document.getElementById("GS").innerHTML = "Car1 won"
    }
    if (cary==0) {
    var win= document.getElementById("GS").innerHTML
    document.getElementById("GS").innerHTML = "Car1 won"
}  
function up() {
    if (cary>=0) {
       cary=cary-10
       bgo()
       co()
       co2()
    } 
 }
 function down() {
     if (cary<=500) {
        cary=cary+10
        bgo()
        co()
        co2()
     } 
  }
  function left() {
     if (carx>=0) {
        carx=carx-10
        bgo()
        co()
        co2()
     } 
  }
  function right() {
     if (carx<=700) {
        carx=carx+10
        bgo()
        co()
        co2()
     } 
 }
 function up2() {
    if (cary2>=0) {
       cary2=cary2-10
       bgo()
       co()
       co2()
    } 
 }
 function down2() {
     if (cary2<=500) {
        cary2=cary2+10
        bgo()
        co()
        co2()
     } 
  }
  function left2() {
     if (carx2>=0) {
        carx2=carx2-10
        bgo()
        co()
        co2()
     } 
  }
  function right2() {
     if (carx2<=700) {
        carx2=carx2+10
        bgo()
        co()
        co2()
     } 
 }
 