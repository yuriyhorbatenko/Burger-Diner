
$(function () {

  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };


    $.ajax("/api/menu/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("iD: " + id + " changed to Devour");
        location.reload();
      }
    );
  });


  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: 0
    };

    $.ajax("/api/menu", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Created New Item");
        location.reload();
      }
    );
  });


  $(".delete-item").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/menu/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("iD: " + id + " Deleted");
        location.reload();
      }
    );
  });

});
