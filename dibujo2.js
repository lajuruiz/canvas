alert("si funciona");
var d = document.getElementById("dibujito");
var lienzo = d.getContext ("2d");
var lineas = 30;
var l = 0;
var yi, xf;

while (l< lineas) 
{
    yi = 10 * l;
    xf = 10* (l+1);
    xi = 10 * l;
    yf = 10* (l+1);
    x_reves = 300 - xi
    y_reves = 300 - yf
    dibujarLinea("#AAAAFF",0,yi,xf,300);
    dibujarLinea("#FFAAAA",xi,0,300,yf);
    dibujarLinea("#AAFFAA", 300,yi,x_reves,300);
    dibujarLinea("#AAFFAA", 0,y_reves,xf,0);
    console.log (" lineas " + l );
    l= l+1;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial, yinicial);
    lienzo.lineTo (xfinal, yfinal);
    lienzo.stroke ();
    lienzo.closePath();
} 