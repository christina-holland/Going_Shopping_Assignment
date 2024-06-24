//1. Creating a function called initializeCart that checks if there's a cart in localStorage
//   If not, it initializes an empty cart and stores it in localStorage
function initializeCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

//2. Creating a function called addItem that takes an item object as a parameter, 
//   retrieves the cart from localStorage, adds the item to the cart, 
//   and stores the updated cart back into localStorage
function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

//3. Creating a function called removeItem that takes an item id as a parameter,
//   retrieves the cart from localStorage, removes the item with the given id from the cart,
//   and then stores the updated cart back into localStorage
function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

//4. Creating a function called displayCart that retrieves the cart from localStorage 
//   and logs the cart contents to the console
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
  };

// //5. Creating event listeners for the add item form and displaying cart button to call the respective functions
document.getElementById('addItemForm').addEventListener('submit', function() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
  
    const item = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
    };
  
    addItem(item);
  });
  
document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
  });  

initializeCart();