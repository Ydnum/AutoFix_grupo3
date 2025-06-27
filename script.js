$("#boton_realizar_pago").click(function(){
    $("#modal_pago").fadeIn();
})



$("#modal_pago").on("click", function(e){
    if (e.target === this){
        $(this).fadeOut();
    }
});