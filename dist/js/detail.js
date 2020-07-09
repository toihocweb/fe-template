$(function () {
  // parse qua object
  const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
  $(".choice").text(selectedItem.name);
  $(".price").text(selectedItem.price);

  $(".delete").click(function (e) {
    e.preventDefault();
    // localStorage.removeItem("selectedItem"); // xoa localStorage voi key
    // localStorage.clear(); // xoa het localStorage
  });
});
