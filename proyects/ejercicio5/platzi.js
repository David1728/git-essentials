var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var pvx = newArray(), pvy = newArray();
var ppx = newArray(), ppy = newArray();
var cantidad = aleatorio(1, 20), ptotal = 0;
ptotal = cantidad;
var xc = aleatorio(0, 7);
var yc = aleatorio(0, 7);
var xc = xc * 60;
var yc = yc * 60;
var movimiento = 20;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujarCerdo()
{
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, xc, yc);
  }
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(cerdo.cargaOK)
  {
    dibujarCerdo();
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=1; v <= cantidad; v++)
    {
      var xv = aleatorio(0, 7);
      var yv = aleatorio(0, 7);
      var xv = xv * 60;
      var yv = yv * 60;
      papel.drawImage(vaca.imagen, xv, yv);
      pvx[v] = xv;
      pvy[v] = yv;
    }
  }
  if(pollo.cargaOK)
  {
    console.log(cantidad);
    for(var v=1; v <= cantidad; v++)
    {
      var xp = aleatorio(0, 7);
      var yp = aleatorio(0, 7);
      var xp = xp * 60;
      var yp = yp * 60;
      papel.drawImage(pollo.imagen, xp, yp);
      ppx[v] = xp;
      ppy[v] = yp;
    }
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function dibujarTeclado(evento)
{
  papel.drawImage(fondo.imagen, 0, 0);
  cantidad = ptotal;
  for(var v=1; v <= cantidad; v++)
  {
    xv = pvx[v];
    yv = pvy[v];
    papel.drawImage(vaca.imagen, xv, yv);
  }
  cantidad = ptotal;
  for(var v=1; v <= cantidad; v++)
  {
    xp = ppx[v];
    yp = ppy[v];
    papel.drawImage(pollo.imagen, xp, yp);
  }
  switch(evento.keyCode)
  {
    case teclas.UP:
      yc = yc - movimiento;
      dibujarCerdo();
    break;
    case teclas.DOWN:
      yc = yc + movimiento;
      dibujarCerdo();
    break;
    case teclas.LEFT:
      xc = xc - movimiento;
      dibujarCerdo();
    break;
    case teclas.RIGHT:
      xc = xc + movimiento;
      dibujarCerdo();
    break;
    default:
    console.log("Otra tecla");
    break;
  }
}
