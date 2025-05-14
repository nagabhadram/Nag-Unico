Product Card with Cart and Dark Mode
Overview
This project is a simple React-based web application that displays product cards with the ability to add items to a cart, toggle between light and dark mode, and view cart items. The project also demonstrates state management for cart functionality, as well as user interaction with the cart and theme toggling.

Features
Add Products to Cart: Users can add products to their cart and see the cart count updated.

View Cart: Users can toggle the visibility of their cart and view the products they've added.

Dark Mode Toggle: Users can switch between light and dark themes.

Product Information: Displays product details such as title, description, and price.

Technologies Used
React: Frontend JavaScript library for building user interfaces.

CSS: Styling for components, including layout and visual design.

React State Management: To manage cart state and toggle themes.

Project Structure
bash
Copy
Edit
/src
  /components
    ProductCard.js          # Handles product card display and cart functionality
    Cart.js                 # Handles displaying the cart and toggling cart visibility
    ProductCard.css         # Styles for the Product Card and Cart components
  App.js                    # Main component rendering the Product Card
Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/product-card-cart.git
cd product-card-cart
2. Install Dependencies
Make sure you have Node.js installed on your machine. If not, install Node.js.

bash
Copy
Edit
npm install
3. Start the Development Server
Run the development server to view the application in your browser.

bash
Copy
Edit
npm start
Visit http://localhost:3000 to see the application in action.

Usage
Adding Products to the Cart:

Click the "Add to Cart" button on the product card to add it to your cart.

Viewing Cart:

Click the Cart icon at the top-right corner to toggle the cart view.

View the products added to the cart, including their quantities.

Dark Mode Toggle:

Switch between light and dark mode by toggling the theme button. The selected theme is persisted across page reloads.

Key Components
ProductCard.js
Handles the display of a product card, and includes:

The product image, title, description, and price.

Buttons for adding products to the cart.

Cart.js
Displays the cart items, including:

The list of items added to the cart.

Quantity of each item.

Cart toggle button to show/hide cart items.

ProductCard.css
Contains the styles for:

The product card.

Cart button and items display.

Dark mode styling.

Challenges Faced
Handling Cart State: Ensuring the cart items persist correctly, especially with cart quantity.

Dark Mode Implementation: Managing the state for light/dark mode and applying it to the entire application without affecting the functionality.

Trade-offs and Design Decisions
I decided to keep the cart state in the local component level, making it simple but scalable enough for this use case.

The cart button visibility is kept minimal and tucked away at the top-right to avoid cluttering the UI.

Dark mode and light mode are handled via basic CSS variables that are toggled on the body element.

Future Enhancements
Dynamic Product Data: Fetch product data from an external API for dynamic rendering.

Cart Management: Add functionality to remove items from the cart or adjust quantities.

Checkout Process: Implement a simple checkout form or integration with payment gateways.
