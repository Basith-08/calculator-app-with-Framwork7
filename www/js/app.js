var $ = Dom7;

var app = new Framework7({
  name: "My App", // App name
  theme: "auto", // Automatic theme detection

  el: "#app", // App root element

  // App store
  store: store,
  // App routes
  routes: routes,
});

$("#tambah").click(function () {
  var bil1 = $("#bil1").val();
  var bil2 = $("#bil2").val();

  var result = parseInt(bil1) + parseInt(bil2);

  app.dialog.alert(result, "Hasil tambah")
});
$("#kurang").click(function () {
  var bil1 = $("#bil1").val();
  var bil2 = $("#bil2").val();

  var result = parseInt(bil1) - parseInt(bil2);

  app.dialog.alert(result, "Hasil kurang")
});
$("#bagi").click(function () {
  var bil1 = $("#bil1").val();
  var bil2 = $("#bil2").val();

  var result = parseInt(bil1) / parseInt(bil2);

  app.dialog.alert(result, "Hasil bagi")
});
$("#kali").click(function () {
  var bil1 = $("#bil1").val();
  var bil2 = $("#bil2").val();

  var result = parseInt(bil1) * parseInt(bil2);

  app.dialog.alert(result, "Hasil kali")
});
