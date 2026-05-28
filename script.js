let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  let cartContainer = document.getElementById("cart-items");
  let total = 0;

  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    cartContainer.innerHTML += `
      <div class="cart-item">
        ${item.name} - $${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

function sendWhatsApp() {
  let message = "Hola, quiero comprar:%0A";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name}: $${item.price} MXN%0A`;
    total += item.price;
  });

  message += `%0ATotal: $${total} MXN`;

  let phone = "5215512345678"; // 🔴 CAMBIA ESTE NÚMERO

  let url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
}
