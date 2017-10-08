var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    square,l1,l2,l3;

function drawWatch(){
context.clearRect(0, 0, 300, 300);
    context.lineCap = "round";
    context.lineWidth = 1;

square = new Path2D();
l1= new Path2D(); 
l2= new Path2D(); 
l3= new Path2D(); 

var R=300/2,d,angle,pX,pY,qX,qY;

square.arc(R,R,R,0,2*Math.PI);

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

sX= Math.cos(secondsAngle)*0.89*R;
sY= -Math.sin(secondsAngle)*0.89*R;
sX +=R; sY +=R;
l1.moveTo(sX,sY);
l1.lineTo(R,R);
    
mX= Math.cos(minutesAngle)*0.75*R;
mY= -Math.sin(minutesAngle)*0.75*R;
mX +=R; mY +=R;
l2.moveTo(mX,mY);
l2.lineTo(R,R);
    
hX= Math.cos(hoursAngle)*0.25*R;
hY= -Math.sin(hoursAngle)*0.25*R;
hX +=R; hY +=R;
l3.moveTo(hX,hY);
l3.lineTo(R,R);
    
context.stroke(square); 
    context.strokeStyle= "red";
context.stroke(l1);
    context.strokeStyle= "black";
    context.lineWidth = 3;
context.stroke(l2);
    context.lineWidth = 7;
context.stroke(l3);
   
    
setTimeout(drawWatch, 1000);
}
drawWatch();