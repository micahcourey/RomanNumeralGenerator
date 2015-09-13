var romanNumeral = function(number) {
  if(number > 3999 || number < 1) {
    return "not a number please enter a number between 1 and 3999";
  } else {
    var list = { "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90,
                 "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1 };
    var roman = '';
    var i;
      for ( i in list ) {
        while ( number >= list[i] ) {
          roman += i;
          number -= list[i];
        }
      }
    }
    return roman;
};

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    var number = parseInt($("input#number").val());
    var roman = romanNumeral(number);

    $(".number").text(number);
    $(".result").text(roman);

    $("#result").show();
    event.preventDefault();
  });
});
