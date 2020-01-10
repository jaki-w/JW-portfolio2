$(document).ready(function() {
  $("button#about").click(function() {
    $(".about-hidden").toggle();
  });
  $("button#projects").click(function() {
    $(".myWork-hidden").toggle();
  });
  $("button#languages").click(function() {
    $(".languages-hidden").toggle();
  });
});
