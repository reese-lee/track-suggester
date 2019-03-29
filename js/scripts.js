$(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var qOne = parseInt($("#qOne").val());
    var qTwo = parseInt($("#qTwo").val());
    var qThree = parseInt($("#qThree").val());
    var qFour = parseInt($("#qFour").val());
    var qFive = parseInt($("#qFive").val());

    if(qOne === 1 && qTwo === 1 && qThree === 1 && qFour === 1 && qFive ===1) {
      console.log("ayo");
      $("#optCD").show();
      $("#optPD").hide();
      $("#optJA").hide();
      $("#workshop").hide();
    } else if(qOne === 2 && qTwo === 2 && qThree === 2 && qFour === 1 && qFive === 2)
        $("#optPD").show();
        $("#optCD").hide();
        $("#optJA").hide();
        $("#workshop").hide();
    } else if(qOne === 3 && qTwo === 3 && qThree === 3 && qFour === 3 && qFive === 3) {
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
