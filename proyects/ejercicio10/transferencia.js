var disponible = document.getElementById("disponible");
var b = document.getElementById("transferir");
b.addEventListener("click", entregarDinero);

var t = document.getElementById("dinero");
var bancoclient = document.getElementById("bancocliente");
var bancodesti = document.getElementById("bancodestino");
var saldocliente = 200000;
var cuentaclient = true;
var cuentadestino = true;
var hora = Math.floor(Math.random() * (24 - 0 + 1)) + 0;
var costotransferencia;

disponible.innerHTML += "<hr />" + "<strong>" + "Atención: " + "</strong>" + "Si su banco es diferente al banco destinatario se le cobrará $100 adicionales";

function entregarDinero()
{
  transferir = parseInt(t.value);
  disponible.innerHTML = null;
  if ((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20))
  {
    if(cuentaclient && cuentadestino)
    {
      if(bancoclient.value == bancodesti.value)
      {
        costotransferencia = 0;
        if(saldocliente >= (transferir + costotransferencia))
        {
          saldocliente = saldocliente - (transferir + costotransferencia);
          disponible.innerHTML = "<strong>" + "¡Transferencia exitosa! " + "</strong>" + "Saldo nuevo: $" + saldocliente;
        }
        else {
          disponible.innerHTML = "<strong>" + "Transferencia rechazada: saldo insuficiente" + "</strong>";
        }
      }
      else {
        costotransferencia = 100;
        if(saldocliente >= (transferir + costotransferencia))
        {
          saldocliente = saldocliente - (transferir + costotransferencia);
          disponible.innerHTML += "<strong>" + "¡Transferencia exitosa! " + "</strong>" + "Saldo nuevo: $" + saldocliente;
        }
        else {
          disponible.innerHTML += "<strong>" + "Transferencia rechazada: saldo insuficiente" + "</strong>";
        }
      }
    }
    else {
      disponible.innerHTML += "cuenta cliente o destino no verificada";
    }
  }
  else {
    disponible.innerHTML += "<strong>" + "Lo sentimos no se puede realizar la transferencia. " + "Recuerde que las transferencias se pueden hacer de 9 a 12 y de 15 a 20. " + "</strong>" + "Son las: " + hora;
  }
}
