// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/menu/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("iD: " + id + " changed to Devour");
        // Reload the page to get the updated list
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

    // Send the POST request.
    $.ajax("/api/menu", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Created New Item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-item").on("click", function (event) {
    var id = $(this).data("id");
    var name = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/menu/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("iD: " + id + " Deleted");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
