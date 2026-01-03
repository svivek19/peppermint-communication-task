# Project Notes – ShopNow

## Overview

This project was built as a simple, scalable product listing and cart application.  
The main focus was to implement core e-commerce functionality with clean UI, readable code, and good user experience.

---

## Approach

- Used React with functional components and hooks
- Used Context API for global cart state management
- Followed a component-based architecture for reusability
- Focused on mobile-first responsive design using Tailwind CSS

---

## Key Design Decisions

- **Context API** was chosen instead of Redux to keep state management simple
- Products are stored in a local data file to simulate an API response
- Cart allows duplicate items for simplicity and clarity
- Client-side routing handled using React Router DOM

---

## Features Implemented

- Product listing with images, price, and description
- Search functionality
- Category-based filtering
- Price-based sorting
- Add to Cart with cart count in navbar
- Cart page with GST (18%) and total calculation
- Responsive UI for mobile and desktop
- Deployed on Netlify with routing refresh fix

---

## Assumptions

- Cart quantity is based on number of added items
- GST is calculated at a fixed rate of 18%
- Product data is static for this assignment

---

## Trade-offs

- No backend or database integration
- No authentication or user sessions
- Cart data is not persisted across page refresh

---

## Improvements (If Given More Time)

- Integrate backend API using Node.js and MongoDB
- Add quantity controls and remove-from-cart functionality
- Persist cart data using localStorage
- Add loading skeletons and better error handling
- Improve animations and micro-interactions

---

## Conclusion

This project demonstrates a practical implementation of a product listing and cart system using modern React practices, focusing on clarity, scalability, and user experience.
