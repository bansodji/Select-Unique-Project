$(document).ready(function(){
    $(".select2").select2();
    $(".select2").val('').trigger('change');

    $('#clear').on('click',function(e){
        e.preventDefault();
        $("#BuildingCode, #DrawingRevNo").val('').trigger('change');
    })

    $('#clearAll').on('click',function(e){
        e.preventDefault();
        $(".select2").val('').trigger('change');
    })
    
    $("#alert").hide();
})
