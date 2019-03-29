$(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var qOne = $("input:radio[name=qOne]:checked").val();
    var qTwo = $("input:radio[name=qTwo]:checked").val();
    var qThree = $("input:radio[name=qThree]:checked").val();
    var qFour = $("input:radio[name=qFour]:checked").val();
    var qFive = $("input:radio[name=qFive]:checked").val();

    if(qOne === "cd1" && qTwo === "cd2" && qThree === "cd3" && qFour === "cd4" && qFive === "cd5") {
      $("#optCD").show();
      $("#optPD").hide();
      $("#optJA").hide();
      $("#workshop").hide();
    } else if(qOne === "pd1" && qTwo === "pd2" && qThree === "pd3" && qFour === "cd4" && qFive === "pd5") {
        $("#optPD").show();
        $("#optCD").hide();
        $("#optJA").hide();
        $("#workshop").hide();
    } else if(qOne === "ja1" && qTwo === "ja2" && qThree === "ja3" && qFour === "ja4" && qFive === "ja5") {
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
