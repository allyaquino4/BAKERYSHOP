// PRODUCT DATA - Now in JavaScript instead of HTML
const products = {
  breads: [
    {
      name: "Artisan Sourdough",
      price: 5.99,
      img: "https://i.pinimg.com/736x/65/4b/49/654b496162a0c92f3090d2562a32d4f6.jpg"
    },
    {
      name: "French Baguette",
      price: 3.99,
      img: "https://i.pinimg.com/736x/d6/41/4f/d6414f736d200b576c92079be98e1e94.jpg"
    },
    {
      name: "Whole Wheat Bread",
      price: 4.49,
      img: "https://i.pinimg.com/736x/d1/c2/9f/d1c29f677ea50649625addf1efe4b004.jpg"
    },
    {
      name: "Ciabatta",
      price: 4.99,
      img: "https://i.pinimg.com/736x/b7/14/bf/b714bfbdad80e8d0d390901b37aaab53.jpg"
    },
    {
      name: "Rye Bread",
      price: 5.49,
      img: "https://i.pinimg.com/736x/e3/40/63/e340636e989eaa81879784d6867c3df8.jpg"
    },
    {
      name: "Brioche",
      price: 6.99,
      img: "https://i.pinimg.com/736x/16/c6/ce/16c6cebb8cc58c0c0fd67da6c42c2641.jpg"
    },
    {
      name: "Focaccia",
      price: 5.99,
      img: "https://i.pinimg.com/736x/2f/de/4f/2fde4f42e6ad47fcd5af51658dde1381.jpg"
    },
    {
      name: "Multigrain Bread",
      price: 5.29,
      img: "https://i.pinimg.com/736x/91/9a/d6/919ad63f5f8de9487581b9973a0feed7.jpg"
    },
    {
      name: "Pumpernickel",
      price: 5.79,
      img: "https://i.pinimg.com/736x/41/21/bf/4121bf3f9ff4a9b9db956c6355d5a316.jpg"
    },
    {
      name: "Banana Bread",
      price: 6.49,
      img: "https://i.pinimg.com/736x/d2/46/91/d246912db168c065e482fba9fea524b8.jpg"
    }
  ],
  pastries: [
    {
      name: "Butter Croissant",
      price: 2.99,
      img: "https://i.pinimg.com/736x/05/4b/1a/054b1ae2136808ae87e264fb7724f4c3.jpg"
    },
    {
      name: "Cheese Danish",
      price: 3.49,
      img: "https://i.pinimg.com/736x/e5/a3/1b/e5a31b90cd51edeca9d7984f1eacd770.jpg"
    },
    {
      name: "Chocolate Croissant",
      price: 3.29,
      img: "https://i.pinimg.com/736x/53/e6/3b/53e63bd562e64eba395f8e541d7fece4.jpg"
    },
    {
      name: "Apple Turnover",
      price: 3.99,
      img: "https://i.pinimg.com/736x/3e/df/50/3edf508fdd5cf4a49d7551248836a8a1.jpg"
    },
    {
      name: "Palmier",
      price: 2.49,
      img: "https://i.pinimg.com/736x/92/05/9f/92059fa8998bbbc8e826939cba15917e.jpg"
    },
    {
      name: "Pain au Chocolat",
      price: 3.79,
      img: "https://i.pinimg.com/736x/ba/dc/d0/badcd05521204942788135c232734a03.jpg"
    },
    {
      name: "Almond Croissant",
      price: 3.99,
      img: "https://i.pinimg.com/736x/73/8e/be/738ebe123924d337d24c0af1233e05f0.jpg"
    },
    {
      name: "Cinnamon Roll",
      price: 3.29,
      img: "https://i.pinimg.com/736x/53/f9/7b/53f97be812da8db577ff2e73f1aa4827.jpg"
    },
    {
      name: "Bear Claw",
      price: 3.59,
      img: "https://i.pinimg.com/736x/f1/bc/50/f1bc50ef8267a75964975f08e4d91f1f.jpg"
    },
    {
      name: "Fruit Tart",
      price: 4.49,
      img: "https://i.pinimg.com/736x/04/1d/cb/041dcb801a04110e9ebff6ac65339234.jpg"
    }
  ],
  cakes: [
    {
      name: "Chocolate Fudge",
      price: 24.99,
      img: "https://i.pinimg.com/736x/13/c0/6e/13c06e607633c26adbe41977c8144c18.jpg"
    },
    {
      name: "Red Velvet",
      price: 26.99,
      img: "https://i.pinimg.com/736x/8f/1b/b7/8f1bb702e8a667d275f2e57a6c879fe7.jpg"
    },
    {
      name: "Cheesecake",
      price: 22.99,
      img: "https://i.pinimg.com/736x/53/ff/e2/53ffe2ce6d416ba5dd9492580c4e8251.jpg"
    },
    {
      name: "Black Forest",
      price: 28.99,
      img: "https://i.pinimg.com/736x/6f/bf/d4/6fbfd4d0d4ec8ad103820cb6912fdf47.jpg"
    },
    {
      name: "Carrot Cake",
      price: 25.99,
      img: "https://i.pinimg.com/736x/92/18/62/92186233f9f2468dd34af47413cf4bcd.jpg"
    },
    {
      name: "Tiramisu",
      price: 27.99,
      img: "https://i.pinimg.com/736x/7c/49/53/7c4953dd93173d304378e76bd8dcd4fc.jpg"
    },
    {
      name: "Lemon Drizzle",
      price: 23.99,
      img: "https://i.pinimg.com/736x/f0/c5/b7/f0c5b721bbf0359761a4cbe732ae33ff.jpg"
    },
    {
      name: "Victoria Sponge",
      price: 24.49,
      img: "https://i.pinimg.com/736x/56/39/30/563930aac5612c9a713a8fc9c60e800b.jpg"
    },
    {
      name: "Opera Cake",
      price: 29.99,
      img: "https://i.pinimg.com/736x/88/7b/dd/887bdd75629f51043bab28f63576ff61.jpg"
    },
    {
      name: "Chiffon Cake",
      price: 25.49,
      img: "https://i.pinimg.com/736x/ef/96/40/ef96401149c0427a6d1c28fd38b71bf5.jpg"
    }
  ],
  cookies: [
    {
      name: "Chocolate Chip",
      price: 1.50,
      img: "https://i.pinimg.com/736x/6f/a2/12/6fa212044776edcbc44b34687fc6e8e4.jpg"
    },
    {
      name: "Oatmeal Raisin",
      price: 1.25,
      img: "https://i.pinimg.com/736x/a4/bf/92/a4bf9253be9bfa6e5744ef3a1672f831.jpg"
    },
    {
      name: "Sugar Cookie",
      price: 1.00,
      img: "https://i.pinimg.com/736x/c3/41/64/c341642415bc4d3b7fe9e6e751471a57.jpg"
    },
    {
      name: "Peanut Butter",
      price: 1.75,
      img: "https://i.pinimg.com/736x/c4/1d/85/c41d85daf31fb13bd0fba23d81f9a434.jpg"
    },
    {
      name: "Snickerdoodle",
      price: 1.50,
      img: "https://i.pinimg.com/736x/04/f2/28/04f22802fa81178fa39759e4541b8d19.jpg"
    },
    {
      name: "Macaron",
      price: 2.50,
      img: "https://i.pinimg.com/736x/9d/81/b5/9d81b5fc0754c3b4e1a03e630c91eafd.jpg"
    },
    {
      name: "Shortbread",
      price: 1.25,
      img: "https://i.pinimg.com/736x/7f/bb/56/7fbb5664a4d88970ae6a6a87474e0821.jpg"
    },
    {
      name: "Gingerbread",
      price: 1.50,
      img: "https://i.pinimg.com/736x/f9/35/e9/f935e92214820b2ab839acdb74449c49.jpg"
    },
    {
      name: "White Chocolate Macadamia",
      price: 2.00,
      img: "https://i.pinimg.com/736x/00/04/12/000412629d6ef7f209dda1c7f2f043a1.jpg"
    },
    {
      name: "Double Chocolate",
      price: 1.75,
      img: "https://i.pinimg.com/736x/11/33/a7/1133a7302f65a10d38995446be3e07ac.jpg"
    }
  ]
};

// FUNCTION TO RENDER PRODUCTS
function renderProducts() {
  for (const category in products) {
    const grid = document.getElementById(`${category}-grid`);
    
    products[category].forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="product-img">
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">&#8369;${product.price.toFixed(2)}</p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
      grid.appendChild(productCard);
    });
  }
}

// Cart functionality
let cart = [];

function getProductInfo(productCard) {
  return {
    id: productCard.querySelector('.product-name').textContent.toLowerCase().replace(/\s+/g, '-'),
    name: productCard.querySelector('.product-name').textContent,
    price: parseFloat(productCard.querySelector('.product-price').textContent.replace(/[^0-9.]/g, '')),
    img: productCard.querySelector('.product-img').src
  };
}

function addToCart(productCard) {
  const product = getProductInfo(productCard);
  
  // Check if item already exists in cart
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  saveCartToLocalStorage();
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');
  
  // Clear current cart display
  cartItemsElement.innerHTML = '';
  
  // Add each item to cart display
  let total = 0;
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <img src="${item.img}" alt="${item.name}" width="50">
      <div class="cart-item-details">
        <span class="item-name">${item.name}</span>
        <span class="item-quantity">Quantity: ${item.quantity}</span>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn minus" data-id="${item.id}">−</button>
        <button class="qty-btn plus" data-id="${item.id}">+</button>
      </div>
      <span class="item-price">₱${(item.price * item.quantity).toFixed(2)}</span>
      <button class="remove-item" data-id="${item.id}">×</button>
    `;
    cartItemsElement.appendChild(itemElement);
    
    total += item.price * item.quantity;
  });
  
  // Update total
  cartTotalElement.textContent = `Total: ₱${total.toFixed(2)}`;
  
  // Enable/disable checkout button
  checkoutButton.disabled = cart.length === 0;
  checkoutButton.setAttribute('aria-disabled', cart.length === 0);
}

function saveCartToLocalStorage() {
  localStorage.setItem('bakeryCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('bakeryCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
  }
}

function handleQuantityChange(productId, change) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    const newQuantity = cart[itemIndex].quantity + change;
    
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1); // Remove item if quantity reaches 0
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
    
    updateCartDisplay();
    saveCartToLocalStorage();
  }
}

// Initialize the cart functionality
function initCart() {
  // Load cart from localStorage when page loads
  loadCartFromLocalStorage();
  
  // Add click handlers to all "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      addToCart(productCard);
      
      // Add visual feedback
      this.textContent = 'Added!';
      setTimeout(() => {
        this.textContent = 'Add to Cart';
      }, 1000);
    });
  });
  
  // Handle quantity changes and removals
  document.getElementById('cart-items').addEventListener('click', function(e) {
    if (e.target.classList.contains('minus')) {
      handleQuantityChange(e.target.getAttribute('data-id'), -1);
    } else if (e.target.classList.contains('plus')) {
      handleQuantityChange(e.target.getAttribute('data-id'), 1);
    } else if (e.target.classList.contains('remove-item')) {
      const productId = e.target.getAttribute('data-id');
      cart = cart.filter(item => item.id !== productId);
      updateCartDisplay();
      saveCartToLocalStorage();
    }
  });
  
  // Checkout button functionality
  document.getElementById('checkout-button').addEventListener('click', function() {
    if (cart.length > 0) {
      document.getElementById('checkout-modal').style.display = 'flex';
    }
  });
  
  // Close modal functionality
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('checkout-modal').style.display = 'none';
  });
  
  // Delivery mode toggle
  document.querySelectorAll('input[name="delivery-mode"]').forEach(radio => {
    radio.addEventListener('change', function() {
      const addressField = document.querySelector('.delivery-address-group');
      if (this.value === 'delivery') {
        addressField.style.display = 'block';
        document.getElementById('cust-address').required = true;
      } else {
        addressField.style.display = 'none';
        document.getElementById('cust-address').required = false;
      }
    });
  });
  
  // Checkout form submission
  document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Prepare order data
    const orderData = {
      customer: {
        name: document.getElementById('cust-name').value,
        email: document.getElementById('cust-email').value,
        phone: document.getElementById('cust-phone').value,
        address: document.getElementById('cust-address').value
      },
      delivery: {
        mode: document.querySelector('input[name="delivery-mode"]:checked').value,
        date: document.getElementById('delivery-date').value,
        time: document.getElementById('delivery-time').value
      },
      payment: {
        method: document.getElementById('payment-method').value
      },
      items: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      date: new Date().toISOString()
    };
    
    // Save order and clear cart
    localStorage.setItem('bakeryOrder', JSON.stringify(orderData));
    localStorage.removeItem('bakeryCart');
    cart = [];
    updateCartDisplay();
    
    // Close modal and show confirmation
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
  });
  
  // Close confirmation message
  document.getElementById('confirm-close-btn').addEventListener('click', function() {
    document.getElementById('confirmation-message').style.display = 'none';
  });
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('delivery-date').min = today;
}

// Initialize slideshow
function initSlideshow() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlides() {
    slides.forEach((slide, i) => {
      slide.style.display = i === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000);
  }
  
  showSlides();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderProducts(); // Render products first
  initCart();       // Then initialize cart functionality
  initSlideshow();  // Then initialize slideshow
}); 

const categories = [...new Set(products.map(p => p.category))]; // unique categories
const productSections = document.getElementById('product-sections');

categories.forEach(category => {
  // Create section container
  const section = document.createElement('section');
  section.classList.add('product-category');

  const title = document.createElement('h2');
  title.textContent = category;
  section.appendChild(title);

  const scrollContainer = document.createElement('div');
  scrollContainer.classList.add('product-scroll');

  // Filter products by category
  products
    .filter(p => p.category === category)
    .forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>₱${product.price}</strong>
      `;
      scrollContainer.appendChild(card);
    });

  section.appendChild(scrollContainer);
  productSections.appendChild(section);
});