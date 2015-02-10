$(document).ready(function(){
	
$(function() {
    $( "#salida" ).datepicker({
      showOn: "button",
      buttonImage: "images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  });

$(function(){
    var $select = $(".number");
    for (i=1;i<=20;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});​

  var height = $(window).height();
  $('#newYork').css('height', height);
  $('#newYork').css('width', height);


});