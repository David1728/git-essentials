class Billete
 {
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
}

var disponible = document.getElementById("disponible");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var imagenes = [];
imagenes["100"] = "100.jpg";
imagenes["50"] = "50.jpg";
imagenes["20"] = "20.jpg";
imagenes["10"] = "10.jpg";
var caja = [];
var entregado = [];
caja.push(new Billete(100, 10) );
caja.push(new Billete(50, 10) );
caja.push(new Billete(20, 50) );
caja.push(new Billete(10, 50) );
var aux = [];
aux.push(new Billete(100, 0) );
aux.push(new Billete(50, 0) );
aux.push(new Billete(20, 0) );
aux.push(new Billete(10, 0) );
var dinero = 0, div = 0, papeles = 0, saldo = 0;

for(var s of caja){
  if(s.cantidad > 0){
    saldo = saldo + (s.cantidad * s.valor);
  }
}
disponible.innerHTML += "<strong>" + "¡Bienvenido! " + "Dinero en el Cajero: $" + saldo + "</strong>";

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  disponible.innerHTML = null;
  if(saldo >= dinero){
    var a = 0;
    for(var bi of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push (new Billete(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
        aux[a].cantidad = papeles;
        a = a+1;
      }
    }
  }
  if(dinero > 0)
  {
    resultado.innerHTML += "<strong>" + "No es posible entregar ese monto" + "</strong>" + "<hr />";
    disponible.innerHTML += "<strong>" + "Dinero en el Cajero: $" + saldo + "</strong>";
    for(a=0; a<=3; a++){
      aux[a].cantidad = 0;
    }
  }
  else
  {
    resultado.innerHTML += "<strong>" + "Dinero entregado" + "</strong>" + "<br />";
    for(var e of aux)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de" + "<br />" + "<img src=" + e.imagen.src + " />" + "<br />";
        saldo = saldo - (e.cantidad * e.valor);
      }
    }
    resultado.innerHTML += "<hr />";
    disponible.innerHTML += "<strong>" + "Dinero en el Cajero: $" + saldo + "</strong>";
    console.log(saldo);
    for(a=0; a<=3; a++){
      caja[a].cantidad = caja[a].cantidad - aux[a].cantidad;
      aux[a].cantidad = 0;
      console.log(caja[a].cantidad);
      console.log(caja[a].valor);
    }
  }
}
