window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  const purchase_buttons = document.getElementsByClassName("btn-purchase");
  for (var i = 0; i < purchase_buttons.length; i++) {
    purchase_buttons[i].addEventListener("click", purchaseClicked);
  }
  var cartItems = document.querySelector(".cart-items");
  if (!cartItems) {
    return null;
  }

  var cart_items = JSON.parse(localStorage.getItem("cartItem")) || [];

  for (var i = 0; i < cart_items.length; i++) {
    item = cart_items[i];
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${
              item.imageSrc
            }" width="100" height="100">
            <span class="cart-item-title">${item.name}</span>
        </div>
        <span class="cart-price cart-column">${parseFloat(
          parseFloat(item.price) * parseInt(item.quantity)
        ).toFixed(2)}€</span>
        <div class="cart-quantity cart-column">
            <button class="cart-quantity-input" type="number"  disabled min="1" max="100">${
              item.quantity
            }</button>
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    cartRow.innerHTML = cartRowContents;
    console.log(cartItems);
    cartItems.appendChild(cartRow);
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
  }
  updateCartTotal();
}

function purchaseClicked() {
  const cartHiddenInput = document.querySelector(".store-purchase-input");
  cartHiddenInput.setAttribute("value", localStorage.getItem("cartItem"));
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  localStorage.removeItem("cartItem");
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  var parentDom = buttonClicked.parentElement.parentElement;
  var name = parentDom.querySelector(".cart-item-title").innerText;
  parentDom.remove();
  var cart_items = JSON.parse(localStorage.getItem("cartItem"));
  var cart_items = cart_items.filter((item) => item.name !== name);
  localStorage.setItem("cartItem", JSON.stringify(cart_items));

  updateCartTotal();
}

function quantityChanged(event) {
  currentValue = event.target.value;
  itemNode = event.currentTarget.parentNode.parentNode.parentNode;
  var title = itemNode.querySelector(".cart-item-title").innerHTML;
  var cart_items = JSON.parse(localStorage.getItem("cartItem")) || [];
  var new_cart_items = cart_items.map((item) => {
    if (item.title === title) {
      if (isNaN(currentValue) || currentValue <= 0) {
        currentValue = item.quantity;
      }
      item.quantity = currentValue;
      return item;
    }
    return item;
  });
  localStorage.setItem("cartItem", JSON.stringify(new_cart_items));

  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  alert(title + " is added");
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cart_items = JSON.parse(localStorage.getItem("cartItem")) || [];
  if (cart_items.map((x) => x["title"]).includes(title)) {
    alert(title + " is already added");
    return;
  }
  cart_items.push({
    title,
    imageSrc,
    price,
    quantity: 1,
  });
  localStorage.setItem("cartItem", JSON.stringify(cart_items));
}

function addQuantity(e) {
  console.log(e);
}

function updateCartTotal() {
  var cart_items = JSON.parse(localStorage.getItem("cartItem")) || [];
  const total = cart_items
    .map((x) => parseFloat(x.price.replace("$", "")) * parseInt(x.quantity))
    .reduce((x, y) => x + y, 0);
  const total_price = document.querySelector(".cart-total-price");
  total_price.innerHTML = parseFloat(total).toFixed(2) + " €";
}

function addToCart(details) {
  console.log("Details", details);
}
