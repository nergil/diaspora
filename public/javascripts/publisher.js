  $(document).ready( function() {

    $("#publisher_content_pickers .status_message").click(selectPublisherTab);
    $("#publisher_content_pickers .bookmark").click(selectPublisherTab);
    $("#publisher_content_pickers .blog").click(selectPublisherTab);

    function selectPublisherTab(){
      var form_id = "#new_" + this.className
      if( $(form_id).css("display") == "none" ) {
        $("#publisher_content_pickers").children("li").removeClass("selected");
        $("#publisher_form form").fadeOut(50);

        $(this).toggleClass("selected");
        $(form_id).delay(50).fadeIn(200);
      } else {
        $("#publisher_content_pickers").children("li").removeClass("selected");
        $("#publisher_form form").fadeOut(200);
      }
    }
  });