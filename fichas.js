function funBuscar() {
  if (campo.value == "") {
    alert("El Campo numero de Ficha es obligatorio");
    campo.focus();
  }
  else {
    if (campo.value == "2689543") {
      calificacion.innerHTML = "<h2><a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vSHNbp3vy1bTSkofOQZ9MXKu3M4Qtixycw-rBC83zFCjBDBBjI-ccIVbaaKzKGzhAgZrhOyMnAXz8gg/pubhtml?gid=137193308&single=true' target='_blank'>Calificaciones</a></h2>";
      whatsapp.innerHTML = "<h2><a href='https://chat.whatsapp.com/H1iXmcPd74z2NDrvRhkt8e' target='_blank'>WhatsApp</a></h2>";
    }
    else {
      if (campo.value == "2689823") {
        calificacion.innerHTML = "<h2><a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vTK5BsNWkAnvkIEAH6d8r6AILz3PfpNXIZ6aaqF_k9_ukJ2NNMWmflHQOb8xVRAHg/pubhtml?gid=137193308&single=true' target='_blank'>Calificaciones</a></h2>";
        whatsapp.innerHTML = "<h2><a href='https://chat.whatsapp.com/GKTTxyo5TnS5y9v58dqJF8' target='_blank'>WhatsApp</a></h2>";
      }
      else {
        if (campo.value == "2758559") {
          calificacion.innerHTML = "<h2><a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vSRZQC76sG67MgyDuA6kzMxJh7AaogsvOvKNr-4qemDtl1yY6oXhkPEJA-hQQcaIQ/pubhtml?gid=137193308&single=true' target='_blank'>Calificaciones</a></h2>";
          whatsapp.innerHTML = "<h2><a href='https://chat.whatsapp.com/DS8GW2oxLUJ7flJzcbTLn4' target='_blank'>WhatsApp</a></h2>";
        }else{
          alert("Numero de Ficha no existe");
          campo.focus();
        }
      }
    }

  }
}

var campo = document.getElementById("campo");
var calificacion = document.getElementById("calificacion");
var whatsapp = document.getElementById("whatsapp");
var btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", funBuscar);