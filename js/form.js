document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "50237581057";

  let cliente = document.querySelector("#cliente").value;
  let direccion = document.querySelector("#direccion").value;
  let codigo = document.querySelector("#codigo").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=50237581057&text=
		*_GLOBAL MIX_*%0A
    *Formulario de Solicitud*%0A%0A
    *¿Cuál es tu nombre completo?*%0A
    ${cliente}%0A%0A
    *¿Cuál es la direccion de obra?*%0A
    ${direccion}%0A%0A
    *¿Cuentanos sobre su obra?*%0A
    ${codigo}`;

  if (cliente === "" || direccion === "" || codigo === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu solicitud, ${cliente}`;

  window.open(url);
});
