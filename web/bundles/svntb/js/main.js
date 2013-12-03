$(document).ready(function(){
    $("#AppointmentType_date").datetimepicker();

    $("#picker").on("click", function(event){
        $("#AppointmentType_date").datetimepicker('show');
        event.preventDefault();
    })
})