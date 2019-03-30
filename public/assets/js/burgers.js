$(document).on("click", ".change-devour", function(event){
    var id = $(this).data("id");
    var updatedDevoured = $(this).data("updatedDevoured");

    $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: {
            devoured: updatedDevoured
        }
    }).then(
        function(){
            location.reload();
        }
    );
});

$("#newBurger").on("submit", function(event){
    event.preventDefault();
    $.ajax("/api/burgers", {
        type: "POST",
        data: {
            burger_name: $("#newBurger").val().trim()
        }
    }).then(function(){
        location.reload();
    })
})