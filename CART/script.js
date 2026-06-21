// List of products (textbooks). Each one has an id, name, price (in naira),
// and a placeholder image.
const products = [
  { id: 1, name: "MTH 102 Textbook", price: 5500, image: "https://placehold.co/150x200/2c5f8a/ffffff?text=MTH+102" },
  { id: 2, name: "PHY 102 Textbook", price: 6200, image: "https://placehold.co/150x200/c97a2b/ffffff?text=PHY+102" },
  { id: 3, name: "COS 102 Textbook", price: 4800, image: "https://placehold.co/150x200/1f6f54/ffffff?text=COS+102" },
  { id: 4, name: "CSC 104 Textbook", price: 5000, image: "https://placehold.co/150x200/6b3fa0/ffffff?text=CSC+104" },
  { id: 5, name: "CSC 106 Textbook", price: 5750, image: "https://placehold.co/150x200/8c2f39/ffffff?text=CSC+106" },
];

// This array holds whatever the user has added to their cart.
let cart = [];

// Turns a plain number into a naira price, e.g. 5500 -> "₦5,500"
function formatNaira(amount) {
  return "₦" + amount.toLocaleString();
}

// Builds the product cards on the page
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(function (product) {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${formatNaira(product.price)}</p>
      <button>Add to Cart</button>
    `;

    // Find the button we just created and listen for clicks on it
    const addButton = card.querySelector("button");
    addButton.addEventListener("click", function () {
      addToCart(product);
    });

    productList.appendChild(card);
  });
}

// Adds a product to the cart. If it's already there, just increase its
// quantity instead of creating a second, duplicate line.
function addToCart(product) {
  const existingItem = cart.find(function (item) {
    return item.id === product.id;
  });

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  }

  displayCart();
}

// Removes one item from the cart array (by its position), then redraws the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

// Rebuilds the cart list and the running total
function displayCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(function (item, index) {
    const lineTotal = item.price * item.quantity;
    total += lineTotal;

    // Only show "x2", "x3" etc. when there's more than one
    const quantityLabel = item.quantity > 1 ? " x" + item.quantity : "";

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name}${quantityLabel} - ${formatNaira(lineTotal)}
      <button>Remove</button>
    `;

    const removeButton = li.querySelector("button");
    removeButton.addEventListener("click", function () {
      removeFromCart(index);
    });

    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = formatNaira(total);
}

// Run once when the page loads
displayProducts();
displayCart();