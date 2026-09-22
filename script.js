let cart = [];


// Add food to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}


// Update cart

function updateCart() {

    document.getElementById("cartCount").innerText = cart.length;

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>${item.name}</span>

                <span>
                    ₹${item.price}

                    <button onclick="removeItem(${index})">
                        ❌
                    </button>
                </span>

            </div>
        `;

    });

    document.getElementById("total").innerText = total;
}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Show cart

function showCart() {

    document.getElementById("cart").style.display = "flex";

}


// Close cart

function closeCart() {

    document.getElementById("cart").style.display = "none";

}


// Search food

function searchFood() {

    let search =
        document.getElementById("search").value.toLowerCase();

    let foods =
        document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        let name =
            food.getAttribute("data-name").toLowerCase();

        if (name.includes(search)) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });
}


// Filter food

function filterFood(category) {

    let foods =
        document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        if (
            category === "all" ||
            food.getAttribute("data-category") === category
        ) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });
}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    alert("Order placed successfully! 🎉");

    cart = [];

    updateCart();

    closeCart();
}
