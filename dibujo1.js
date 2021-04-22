alert("si funciona");
var d = document.getElementById("dibujito");
var lienzo = d.getContext ("2d");

dibujarLinea("blue",10, 300,250,0);
dibujarLinea("blue",10, 300,200,0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (xinicial, yinicial);
    lienzo.lineTo (xfinal, yfinal);
    lienzo.stroke ();
    lienzo.closePath();
}

 