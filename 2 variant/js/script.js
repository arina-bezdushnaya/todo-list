$( function() {
  $( "#sortable1, #sortable2" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();

  $(".todolist_add").on("keyup", function(e){
    
    if(e.keyCode == 13 && $(".todolist_add").val() !="")
    {
      var task = $("<div class='task'></div>").text($(".todolist_add").val());
      var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          p.remove();
        });
      });
      
      var check = $("<i class='fas fa-check'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          $(".todolist_completed").append(p);
          p.fadeIn();
        }); 
        $(this).remove();
      });

      task.append(del,check);

      $(".todolist_notcompleted").append(task);
      $(".todolist_add").val("");
    }   
  });

});
