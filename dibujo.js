alert("si funciona");
var d = document.getElementById("dibujito");
var lienzo = d.getContext ("2d");
var lineas  =30;
var l =0;
var yi, xf;

while (l< lineas) 
{
    yi = 10 * l;
    xf= 10* (l+1);
    dibujarLinea("#AAAAFF",0,yi,xf,300);
    console.log (" lineas " + l );
    l= l+1;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial, yinicial);
    lienzo.lineTo (xfinal, yfinal);
    lienzo.stroke ();
    lienzo.closePath();
} 