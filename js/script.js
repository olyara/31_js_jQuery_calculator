let result = "";
let number = "";
$(document).ready(function () {
  $(".js-press").click(function () {
    if (
      ($(this).attr("value") === "." && number.substr(length - 1) === ".") ||
      ($(this).attr("value") === "0" && number === "0")
    ) {
      return;
    }

    result += `${$(this).attr("value")}`;
    number += `${$(this).attr("value")}`;
    if (
      $(this).attr("value") === "+" ||
      $(this).attr("value") === "-" ||
      $(this).attr("value") === "*" ||
      $(this).attr("value") === "/"
    ) {
      number = "";
    }
    $(".js-field").val(number);
  });
  $(".js-equals").click(function () {
    $(".js-field").val(eval(result));
    result = "";
    number = "";
  });
  $(".js-clear").click(function () {
    result = "";
    number = "";
    $(".js-field").val(0);
  });
});
