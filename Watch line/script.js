var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    square,square2,l1,l2,l3;

function drawWatch(){
    context.clearRect(0, 0, 500, 1000);
    context.lineCap = "round";
    context.lineWidth = 4;

square = new Path2D();
square2 = new Path2D();
l1= new Path2D(); 
l2= new Path2D(); 
l3= new Path2D(); 

var R=1000/2,d,angle,pX,pY,qX,qY;

    square.arc(0,R,R,0,2*Math.PI);
    
for(d=0; d<60; ++d){
    angle = ((29.5-d)/120)*(2*Math.PI);
    pX= Math.cos(angle)*R;
    pY= -Math.sin(angle)*R;
    qX= 0.9*pX;
    qY= 0.9*pY;
    pY +=R;
    qY +=R;
    if(d % 5 == 0){
        context.lineWidth = 80;
    };
    square.moveTo(pX,pY);
    square.lineTo(qX,qY);
}
    
    for(d=0; d<12; ++d){
    angle = ((29.5-5*d)/120)*(2*Math.PI);
    pX= Math.cos(angle)*R;
    pY= -Math.sin(angle)*R;
    qX= 0.9*pX;
    qY= 0.9*pY;
    pY +=R;
    qY +=R;
    square2.moveTo(pX,pY);
    square2.lineTo(qX,qY);
}
    
    context.font = 'bolder  45px bolder';
    context.fillText('0', Math.cos(((29.5)/120)*(2*Math.PI))*0.5*R, R-Math.sin(((29.5)/120)*(2*Math.PI))*0.8*R);
    context.fillText('12', Math.cos(((29.5)/120)*(2*Math.PI))*0.2*R, R-Math.sin(((29.5)/120)*(2*Math.PI))*0.7*R);
    context.fillText('1', Math.cos(((29.5-5)/120)*(2*Math.PI))*0.8*R, R-Math.sin(((29.5-5)/120)*(2*Math.PI))*0.8*R);
    context.fillText('2', Math.cos(((29.5-10)/120)*(2*Math.PI))*0.8*R, R-Math.sin(((29.5-10)/120)*(2*Math.PI))*0.8*R);
    context.fillText('3', Math.cos(((29.5-15)/120)*(2*Math.PI))*0.8*R, R-Math.sin(((29.5-15)/120)*(2*Math.PI))*0.8*R);
    context.fillText('4', Math.cos(((29.5-20)/120)*(2*Math.PI))*0.81*R, R-Math.sin(((29.5-20)/120)*(2*Math.PI))*0.79*R);
    context.fillText('5', Math.cos(((29.5-25)/120)*(2*Math.PI))*0.81*R, R-Math.sin(((29.5-25)/120)*(2*Math.PI))*0.79*R);
    context.fillText('6', Math.cos(((29.5-30)/120)*(2*Math.PI))*0.81*R, R-Math.sin(((29.5-30)/120)*(2*Math.PI))*0.79*R);
    context.fillText('7', Math.cos(((29.5-35)/120)*(2*Math.PI))*0.8*R, R-Math.sin(((29.5-35)/120)*(2*Math.PI))*R);
    context.fillText('8', Math.cos(((29.5-40)/120)*(2*Math.PI))*0.8*R, R-Math.sin(((29.5-40)/120)*(2*Math.PI))*0.9*R);
    context.fillText('9', Math.cos(((29.5-45)/120)*(2*Math.PI))*0.8*R, R-Math.sin(((29.5-45)/120)*(2*Math.PI))*0.88*R);
    context.fillText('10', Math.cos(((29.5-50)/120)*(2*Math.PI))*0.76*R, R-Math.sin(((29.5-50)/120)*(2*Math.PI))*0.85*R);
    context.fillText('11', Math.cos(((29.5-55)/120)*(2*Math.PI))*0.75*R, R-Math.sin(((29.5-55)/120)*(2*Math.PI))*0.85*R);  
    
var date = new Date(), hours, minutes, seconds;

hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

var secondsAngle, minutesAngle, hoursAngle;
var sX, sY, mX, mY, hX, hY;

secondsAngle = ((0.5+seconds)/120)*(2*Math.PI);
minutesAngle = ((0.5+minutes)/120)*(2*Math.PI);
hoursAngle = ((0.5/24+hours)/48)*(2*Math.PI);

secondsAngle = Math.PI/2 - secondsAngle;
minutesAngle = Math.PI/2 - minutesAngle + secondsAngle/120;
hoursAngle = Math.PI/2 - hoursAngle + minutesAngle/120;

sX= Math.cos(secondsAngle)*0.89*R;
sY= -Math.sin(secondsAngle)*0.89*R;
//sX +=R; 
sY +=R;
l1.moveTo(sX,sY);
l1.lineTo(0,R);
    
mX= Math.cos(minutesAngle)*0.75*R;
mY= -Math.sin(minutesAngle)*0.75*R;
//mX +=R; 
mY +=R;
l2.moveTo(mX,mY);
l2.lineTo(0,R);
    
hX= Math.cos(hoursAngle)*0.45*R;
hY= -Math.sin(hoursAngle)*0.45*R;
//hX +=R; 
hY +=R;
l3.moveTo(hX,hY);
l3.lineTo(0,R);
    context.lineWidth = 8;
context.stroke(square2);
    context.lineWidth = 4;
context.stroke(square);
    context.strokeStyle= "red";
context.stroke(l1);
    context.strokeStyle= "black";
    context.lineWidth = 7;
context.stroke(l2);
    context.lineWidth = 15;
context.stroke(l3);
   
setTimeout(drawWatch, 1000);
}
drawWatch();