// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animated Counter for Statistics
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const current = parseInt(element.textContent);
        const increment = target / 100;
        
        if (current < target) {
            element.textContent = Math.ceil(current + increment);
            setTimeout(() => animateCounter(element), 20);
        } else {
            element.textContent = target;
        }
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate counters when they come into view
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.service-card, .portfolio-item, .contact-item, .stat');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Observe stat numbers specifically
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroElements = document.querySelectorAll('.floating-card');
        
        heroElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
        }, 2000);
    });

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            zIndex: '9999',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
        });
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = '#10b981';
                break;
            case 'error':
                notification.style.background = '#ef4444';
                break;
            default:
                notification.style.background = '#6366f1';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Typing Effect for Hero Title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Mouse cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // Loading animation
    function hideLoader() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }

    // Hide loader when page is fully loaded
    window.addEventListener('load', hideLoader);

    // Theme switcher
    function createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        themeToggle.setAttribute('title', 'Toggle dark/light theme');
        
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            
            if (document.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            }
        });
        
        // Load saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.querySelector('i').className = 'fas fa-sun';
        }
    }

    // Initialize theme toggle
    createThemeToggle();

    // Performance optimization: Debounce scroll events
    function debounce(func, wait = 10) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll events
    const debouncedScrollHandler = debounce(() => {
        // Scroll-related operations
        const scrolled = window.pageYOffset;
        
        // Update navbar
        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update back to top button
        if (scrolled > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
        
        // Parallax effect
        const heroElements = document.querySelectorAll('.floating-card');
        heroElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    window.addEventListener('scroll', debouncedScrollHandler);

    // Add CSS for custom cursor
    const cursorStyles = document.createElement('style');
    cursorStyles.textContent = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-hover {
            transform: translate(-50%, -50%) scale(1.5);
            background: var(--accent-color);
        }
        
        .notification {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
            .custom-cursor {
                display: none;
            }
        }
    `;
    document.head.appendChild(cursorStyles);

    console.log('Modern website initialized successfully!');
});

// EmailJS Configuration
// Initialize EmailJS with your public key
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('YOUR_PUBLIC_KEY'); // You'll need to replace this
})();

// EmailJS Service Configuration
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID', // You'll need to replace this
    templateID: 'YOUR_TEMPLATE_ID', // You'll need to replace this
    publicKey: 'YOUR_PUBLIC_KEY' // You'll need to replace this
};

// Cart functionality
let cart = [];

// Quantity control functions
function increaseQty(product) {
    const qtyInput = document.getElementById(`${product}-qty`);
    const currentValue = parseInt(qtyInput.value);
    if (currentValue < 10) {
        qtyInput.value = currentValue + 1;
    }
}

function decreaseQty(product) {
    const qtyInput = document.getElementById(`${product}-qty`);
    const currentValue = parseInt(qtyInput.value);
    if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
    }
}

// Add to cart function
function addToCart(productId, productName) {
    const productType = productId.split('-')[0]; // 'sheng', 'besan', or 'methi'
    const weightRadio = document.querySelector(`input[name="${productType}-weight"]:checked`);
    const qtyInput = document.getElementById(`${productType}-qty`);
    
    if (!weightRadio) {
        showNotification('Please select a weight option', 'error');
        return;
    }
    
    const weight = weightRadio.value;
    const price = parseInt(weightRadio.getAttribute('data-price'));
    const quantity = parseInt(qtyInput.value);
    const totalPrice = price * quantity;
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.productId === productId && item.weight === weight
    );
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
        cart[existingItemIndex].totalPrice = cart[existingItemIndex].price * cart[existingItemIndex].quantity;
    } else {
        cart.push({
            productId,
            productName,
            weight,
            price,
            quantity,
            totalPrice
        });
    }
    
    updateCartUI();
    showNotification(`${productName} (${weight}) added to cart!`, 'success');
    
    // Reset quantity to 1
    qtyInput.value = 1;
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartFooter.style.display = 'none';
        cartItems.innerHTML = '';
    } else {
        emptyCart.style.display = 'none';
        cartFooter.style.display = 'block';
        
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.productName}</h4>
                    <p>${item.weight} - ₹${item.price} × ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <strong>₹${item.totalPrice}</strong>
                    <button class="remove-item" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        cartTotal.textContent = total;
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    showNotification('Item removed from cart', 'info');
}

// Cart modal functions
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckout = document.getElementById('closeCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    const confirmationModal = document.getElementById('confirmationModal');
    
    // Open cart modal
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });
    
    // Close cart modal
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    // Open checkout modal
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        
        cartModal.classList.remove('active');
        checkoutModal.classList.add('active');
        updateCheckoutSummary();
    });
    
    // Close checkout modal
    closeCheckout.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    // Handle checkout form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processOrder();
    });
    
    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('active');
        }
    });
});

// Update checkout summary
function updateCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.productName} (${item.weight}) × ${item.quantity}</span>
            <span>₹${item.totalPrice}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    checkoutTotal.textContent = total;
}

// Process order and send email
function processOrder() {
    const formData = new FormData(document.getElementById('checkoutForm'));
    const customerDetails = {};
    formData.forEach((value, key) => {
        customerDetails[key] = value;
    });
    
    const orderData = {
        orderNumber: generateOrderNumber(),
        customerDetails,
        items: cart,
        total: cart.reduce((sum, item) => sum + item.totalPrice, 0),
        orderDate: new Date().toLocaleDateString('en-IN'),
        orderTime: new Date().toLocaleTimeString('en-IN')
    };
    
    // Close checkout modal and show loading
    document.getElementById('checkoutModal').classList.remove('active');
    showNotification('Processing your order and sending confirmation...', 'info');
    
    // Send email receipt
    setTimeout(() => {
        sendEmailReceipt(orderData);
        showOrderConfirmation(orderData);
        cart = []; // Clear cart
        updateCartUI();
    }, 1500);
}

// Generate order number
function generateOrderNumber() {
    return 'SBL' + Date.now().toString().slice(-6);
}

// Send email receipt using EmailJS
function sendEmailReceipt(orderData) {
    // Prepare email parameters
    const emailParams = {
        to_email: orderData.customerDetails.customerEmail,
        customer_name: orderData.customerDetails.customerName,
        order_number: orderData.orderNumber,
        order_date: orderData.orderDate,
        order_time: orderData.orderTime,
        customer_phone: orderData.customerDetails.customerPhone,
        customer_address: orderData.customerDetails.customerAddress,
        customer_city: orderData.customerDetails.customerCity,
        payment_method: orderData.customerDetails.paymentMethod.toUpperCase(),
        special_instructions: orderData.customerDetails.specialInstructions || 'None',
        order_items: formatOrderItems(orderData.items),
        total_amount: orderData.total,
        // Store owner email (your email)
        store_email: 'Shubhamdesai080@outlook.com'
    };

    // Send email to customer
    emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, emailParams)
        .then(function(response) {
            console.log('Customer email sent successfully:', response);
            
            // Send notification to store owner
            sendStoreNotification(orderData, emailParams);
            
        }, function(error) {
            console.error('Failed to send customer email:', error);
            showNotification('Order placed successfully, but email receipt failed. We will contact you shortly.', 'info');
        });
}

// Send notification to store owner
function sendStoreNotification(orderData, emailParams) {
    // Prepare store notification email
    const storeEmailParams = {
        ...emailParams,
        to_email: 'Shubhamdesai080@outlook.com', // Your email
        subject: `New Order #${orderData.orderNumber} - Shobhaladdu.in`
    };

    // Send to store owner (you can use a different template for this)
    emailjs.send(EMAILJS_CONFIG.serviceID, 'YOUR_STORE_TEMPLATE_ID', storeEmailParams)
        .then(function(response) {
            console.log('Store notification sent successfully:', response);
        }, function(error) {
            console.error('Failed to send store notification:', error);
        });
}

// Format order items for email
function formatOrderItems(items) {
    return items.map(item => 
        `${item.productName} (${item.weight}) × ${item.quantity} = ₹${item.totalPrice}`
    ).join('\n');
}

// Generate email receipt content
function generateEmailReceipt(orderData) {
    return `
        <h2>Order Confirmation - ${orderData.orderNumber}</h2>
        <p>Dear ${orderData.customerDetails.customerName},</p>
        <p>Thank you for your order! Here are your order details:</p>
        
        <h3>Order Details:</h3>
        <ul>
            ${orderData.items.map(item => 
                `<li>${item.productName} (${item.weight}) × ${item.quantity} = ₹${item.totalPrice}</li>`
            ).join('')}
        </ul>
        
        <p><strong>Total Amount: ₹${orderData.total}</strong></p>
        <p><strong>Payment Method: ${orderData.customerDetails.paymentMethod.toUpperCase()}</strong></p>
        
        <h3>Delivery Address:</h3>
        <p>${orderData.customerDetails.customerAddress}<br>
        ${orderData.customerDetails.customerCity}</p>
        
        <p>Order Date: ${orderData.orderDate} at ${orderData.orderTime}</p>
        
        <p>We will contact you shortly to confirm your order and delivery details.</p>
        
        <p>Thank you for choosing Shobhaladdu.in!</p>
    `;
}

// Show order confirmation
function showOrderConfirmation(orderData) {
    const confirmationModal = document.getElementById('confirmationModal');
    const orderDetails = document.getElementById('orderDetails');
    
    orderDetails.innerHTML = `
        <div style="text-align: center; margin: 1rem 0;">
            <p><strong>Order Number: ${orderData.orderNumber}</strong></p>
            <p>Total Amount: ₹${orderData.total}</p>
            <p>Payment: ${orderData.customerDetails.paymentMethod.toUpperCase()}</p>
        </div>
    `;
    
    confirmationModal.classList.add('active');
}

// Close confirmation modal
function closeConfirmation() {
    document.getElementById('confirmationModal').classList.remove('active');
}

// Show loading message
function showLoadingMessage() {
    showNotification('Processing your order...', 'info');
}