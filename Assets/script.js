$(document).ready(function () {
  const miniaturas = $(".miniatura");
  const modal = $("#modal");
  const imagenGrande = $("#imagen_grande");
  let indexActual = 0;

  miniaturas.click(function () {
    indexActual = miniaturas.index(this);
    const ruta = $(this).attr("src");
    imagenGrande.attr("src", ruta);
    modal.fadeIn();
  });

  $(".cerrar").click(function () {
    modal.fadeOut();
  });

  modal.click(function (evento) {
    if (
      !$(evento.target).is("#imagen_grande") &&
      !$(evento.target).is("#anterior") &&
      !$(evento.target).is("#siguiente")
    ) {
      modal.fadeOut();
    }
  });

  $("#anterior").click(function () {
    indexActual--;
    if (indexActual < 0) {
      indexActual = miniaturas.length - 1;
    }
    const ruta = miniaturas.eq(indexActual).attr("src");
    imagenGrande.attr("src", ruta);
  });

  $("#siguiente").click(function () {
    indexActual++;
    if (indexActual >= miniaturas.length) {
      indexActual = 0;
    }
    const ruta = miniaturas.eq(indexActual).attr("src");
    imagenGrande.attr("src", ruta);
  });
});
