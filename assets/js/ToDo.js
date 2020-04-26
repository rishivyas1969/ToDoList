$("#new_todo").keypress( function(event) {
    if(event.which == 13){
        var todo_text = $("#new_todo").val() ;
        $("#new_todo").val("") ;
        $("ul").append("<li><span class=\"hide\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> </span>" + todo_text + "</li>") ;
    }
}) ;

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed") ;
}) ;

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove() ;
    }) ;
    event.stopPropagation() ;
}) ;

$("#addbtn").click( function() {
    $("input").fadeToggle(400) ;
}) ;
