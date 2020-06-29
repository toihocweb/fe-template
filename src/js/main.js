$(function () {
  const products = [
    { id: 1, title: "ship nam", img: "item.jpg", price: 10, stock: 9 },
    { id: 2, title: "ship nU", img: "item.jpg", price: 12, stock: 0 },
    { id: 3, title: "trai caY", img: "item.jpg", price: 3, stock: 0 },
    { id: 4, title: "Banh bao", img: "item.jpg", price: 5, stock: 2 },
    { id: 5, title: "hai san", img: "item.jpg", price: 12, stock: 1 },
    {
      id: 6,
      title: "This is a title 6",
      img: "item.jpg",
      price: 150,
      stock: 6,
    },
    { id: 7, title: "This is a title 7", img: "item.jpg", price: 23, stock: 1 },
  ];

  renderProducts(products);

  //suggestion

  $("input.search").keyup(function (e) {
    e.preventDefault();

    let currentVal = $(this).val();
    const newSearchProducts = products.filter(function (val) {
      return val.title.toLowerCase().includes(currentVal.toLowerCase());
    });

    if (e.keyCode === 13) {
      $(".suggestion").fadeOut();
      emptyProducts();
      renderProducts(newSearchProducts);
    } else {
      if (!$(this).val()) {
        $(".suggestion").fadeOut();
      } else {
        $(".suggestion").fadeIn();
        $(".suggestion").empty();
        newSearchProducts.map(function (item) {
          $(`<li>${item.title}</li>`).appendTo(".suggestion");
        });
      }
    }
  });

  $("body").on("click", ".suggestion li", function () {
    const text = $(this).text();
    $("input.search").val(text);
    $(".suggestion").fadeOut();
  });

  $("button.add").click(function (e) {
    e.preventDefault();
    const title = $(".title").val();
    const img = $(".img").val();
    const stock = $(".stock").val();
    const price = $(".price").val();
    const newItem = {
      id: products.length + 1,
      title,
      img,
      stock,
      price,
    };
    products.push(newItem);
    emptyProducts();
    renderProducts(products);
    resetInput();
  });

  $("#filter").change(function (e) {
    e.preventDefault();
    emptyProducts();
    renderProducts(filterProducts(products, $(this).val()));
  });

  $(".open-modal").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn();
  });

  $(".close, .modal").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut();
  });

  $(".modal-content").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
});

function filterProducts(products, type) {
  switch (type) {
    case "greaterthan5":
      return products.filter(function (item) {
        return item.price > 5;
      });

    case "lesserthan5":
      return products.filter(function (item) {
        return item.price < 5;
      });
    case "equalto5":
      return products.filter(function (item) {
        return item.price === 5;
      });

    default:
      return products;
  }
}

function renderProducts(list) {
  list.forEach(function (item) {
    $(`<div class="col-md-3">
    <div class="item">
      <img src="/dist/img/${item.img}" alt="" />
      <h2>${item.title}</h2>
      <div class="flex j-between">
        <span>$${item.price}</span>
        <span>Stock: ${item.stock}</span>
      </div>
    </div>
  </div>`).appendTo(".list");
  });
}

function emptyProducts() {
  $(".list").empty();
}

function resetInput() {
  $(".title").val("");
  $(".img").val("");
  $(".stock").val("");
  $(".price").val("");
}
