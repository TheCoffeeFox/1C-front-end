var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    square, circle;

function drawWatch(){

square = new Path2D();    

var R=300/2,d,angle,pX,pY,qX,qY;

for(d=0; d<60; ++d){
    angle = (d/60)*(2*Math.PI);
    pX= Math.cos(angle)*R;
    pY= -Math.sin(angle)*R;
    qX= 0.9*pX;
    qY= 0.9*pY;
    pX +=R; pY +=R;
    qX +=R; qY +=R;
    square.moveTo(pX,pY);
    square.lineTo(qX,qY);
}

var date = new Date(), hours, minutes, seconds;

hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

var secondsAngle, minutesAngle, hoursAngle;
var sX, sY, mX, mY, hX, hY;

secondsAngle = (seconds/60)*(2*Math.PI);
minutesAngle = (minutes/60)*(2*Math.PI);
hoursAngle = ((hours % 12)/12)*(2*Math.PI);

secondsAngle = Math.PI/2 - secondsAngle;
minutesAngle = Math.PI/2 - minutesAngle;
hoursAngle = Math.PI/2 - hoursAngle;

sX= Math.cos(secondsAngle)*R;
sY= -Math.sin(secondsAngle)*R;
sX +=R; sY +=R;
square.moveTo(sX,sY);
square.lineTo(R,R);
    
mX= Math.cos(minutesAngle)*0.75*R;
mY= -Math.sin(minutesAngle)*0.75*R;
mX +=R; mY +=R;
square.moveTo(mX,mY);
square.lineTo(R,R);
    
hX= Math.cos(hoursAngle)*0.25*R;
hY= -Math.sin(hoursAngle)*0.25*R;
hX +=R; hY +=R;
square.moveTo(hX,hY);
square.lineTo(R,R);

context.clearRect(0, 0, 300, 300);
context.stroke(square);

setTimeout(drawWatch, 1000);
}
drawWatch();