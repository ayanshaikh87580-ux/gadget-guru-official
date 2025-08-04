 function orderOnWhatsApp(productName, price) {
            // Replace with your WhatsApp number
            const phoneNumber = "919558533117";
            
            // Create the order message
            const message = `I want to order:\n\n*${productName}*\nPrice: ₹${price}\n\nPlease confirm availability.`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
        }

        // This would be dynamic in a real implementation
        function loadCategoryProducts(category) {
            // In a real app, you would fetch products for this category
            console.log("Loading products for category:", category);
            // You would typically make an AJAX request to your backend here
        }

        // Get category from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'mobile-accessories';
        
        // Load products for this category
        document.addEventListener('DOMContentLoaded', function() {
            loadCategoryProducts(category);
        });