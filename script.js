$("#boton_realizar_pago").click(function () {
    let nombre = $("#inputNombreDelCliente").val().trim();
    let servicio = $("#seleccionarServicio").val();
    let fecha = $("#fecha").val();

    if (nombre === "") {
        alert("Por favor, ingresa el nombre del cliente.");
        return;
    }

    if (!servicio || servicio === "Selecciona un servicio") {
        alert("Por favor, selecciona un tipo de reparación.");
        return;
    }

    if (fecha === "") {
        alert("Por favor, agenda una fecha para la cita.");
        return;
    }
    $("#modal_pago").fadeIn();
});

$("#form_pago").submit(function(e){
    e.preventDefault();
    $("#mensajeExito").removeClass("d-none").hide().fadeIn()
    
    setTimeout(function(){
        $("#modal_pago").fadeOut();
    }, 1000);

    setTimeout(function(){
        $("#mensajeExito").fadeOut(function(){
            $(this).addClass("d-none")
        })
    }, 3000)

    $("form")[0].reset();
    $("#form_pago")[0].reset()
})

$("#modal_pago").on("click", function(e){
    if (e.target === this){
        $(this).fadeOut();
    }
});
