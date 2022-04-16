$(document).ready(function () {
  //botón de formulario de contacto
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  //tarjetas cambian de color en sección Descatados al presionar la imagen
  $(".card-img-top").on("click", function () {
    $(".card").addClass("background-selected");
  });

  //tooltips con mensajes para botones de sección Quiénes Somos
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
