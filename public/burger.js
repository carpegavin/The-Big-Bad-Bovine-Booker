$(function() {
    $(".eatburger").on("click", function(event) {
      var id = $(this).data("id");
    //   var newEat = $(this).data("neweat");
  
    //   var newEatState = {
    //     devour: newEat
    //   };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: id
      }).then(
        function() {
          console.log("changed burger to true");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim()
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("fashioned new Burger");
          location.reload();
        }
      );
    });
  
    
        }
      );
    
  
  