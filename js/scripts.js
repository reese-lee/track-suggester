$(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // var qOne = parseInt($("#qOne").val());
    // var qTwo = parseInt($("#qTwo").val());
    // var qThree = parseInt($("#qThree").val());
    // var qFour = parseInt($("#qFour").val());
    // var qFive = parseInt($("#qFive").val());

    var qOne = $("input:radio[name=qOne]:checked").val();
    var qTwo = $("input:radio[name=qTwo]:checked").val();
    var qThree = $("input:radio[name=qThree]:checked").val();
    var qFour = $("input:radio[name=qFour]:checked").val();
    var qFive = $("input:radio[name=qFive]:checked").val();

    if(qOne = ) {
      $("#optCD").show();
      $("#optPD").hide();
      $("#optJA").hide();
      $("#workshop").hide();
    } else if(total >= 10) {
        $("#optPD").show();
        $("#optCD").hide();
        $("#optJA").hide();
        $("#workshop").hide();
    } else if(total >=15) {
        $("#optJA").show();
        $("#optPD").hide();
        $("#optCD").hide();
        $("#workshop").hide();
    } else {
      $("#workshop").show();
      $("#optCD").hide();
      $("#optPD").hide();
      $("#optJA").hide();

      };



});
  });
