var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    square, circle;

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

function drawWatch(){
    context.clearRect(0,0,300,300);
    
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
hoursAngle = Math.Pi/2 - hoursAngle;

sX= Math.cos(secondsAngle)*R;
sY= -Math.sin(secondsAngle)*R;
sX +=R; sY +=R;
square.moveTo(sX,sY);
square.lineTo(R,R);
    
mX= Math.cos(minutesAngle)*R;
mY= -Math.sin(minutesAngle)*R;
mX +=R; mY +=R;
square.moveTo(mX,mY);
square.lineTo(R,R);
    
hX= Math.cos(hoursAngle)*R;
hY= -Math.sin(hoursAngle)*R;
hX +=R; hY +=R;
square.moveTo(hX,hY);
square.lineTo(R,R);

context.stroke(square);

setTimeout(drawWatch, 1000);
}
drawWatch();