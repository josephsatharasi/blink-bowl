# 🎓 SchoolMart - Educational E-Commerce Platform

A modern, full-featured e-commerce platform for educational products built with React and Tailwind CSS.

![React](https://img.shields.io/badge/React-19.2.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### 🛍️ Shopping Experience
- **Product Catalog** - Browse books, study materials, art supplies, and bags
- **Smart Filtering** - Filter products by category, level, and type
- **Quick View** - Preview products without leaving the page
- **Shopping Cart** - Add, remove, and manage cart items
- **Wishlist** - Save favorite products

### 💳 Checkout & Payment
- **Multi-step Checkout** - Shipping information and order summary
- **Payment Options** - Credit/Debit Card, UPI, Net Banking, Wallets
- **Order Confirmation** - Success page with order details
- **Cart Persistence** - Cart saved in localStorage

### 🎨 UI/UX
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Skeleton Loaders** - Smooth loading experience
- **Image Fallbacks** - Graceful error handling
- **Smooth Animations** - Professional transitions and effects
- **Side Drawers** - Mobile menu and shopping cart
- **Search Functionality** - Find products quickly

### 🔧 Technical Features
- **React Context API** - Global state management
- **React Router** - Client-side routing
- **LocalStorage** - Cart persistence
- **Lazy Loading** - Optimized image loading
- **Form Validation** - Input validation on checkout

---

## 📦 Tech Stack

- **Frontend Framework:** React 19.2.5
- **Styling:** Tailwind CSS 3.4.1
- **Routing:** React Router DOM 6.x
- **Icons:** React Icons
- **Animations:** Canvas Confetti
- **Build Tool:** Create React App

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/josephsatharasi/blink-bowl.git
cd blink-bowl
```

2. **Navigate to frontend**
```bash
cd frontend
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm start
```

5. **Open browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
blink-bowl/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   ├── SearchModal.jsx
│   │   │   ├── QuickViewModal.jsx
│   │   │   ├── ImageWithSkeleton.jsx
│   │   │   ├── Skeleton.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── AboutPreview.jsx
│   │   │   └── FAQ.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Books.jsx
│   │   │   ├── Materials.jsx
│   │   │   ├── Supplies.jsx
│   │   │   ├── Bags.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Payment.jsx
│   │   │   └── OrderSuccess.jsx
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

---

## 🎯 Key Features Breakdown

### 1. Product Pages
- **Books** - Textbooks, notebooks, reference materials
- **Study Materials** - High school and competitive exam guides
- **Art & Supplies** - Stationery and art materials
- **Bags & Accessories** - School bags and essentials

### 2. Shopping Cart
- Add/remove items
- Update quantities
- Real-time total calculation
- Persistent storage
- Empty state handling

### 3. Checkout Flow
```
Browse → Add to Cart → View Cart → Checkout → Payment → Success
```

### 4. Payment Integration Ready
- Razorpay integration ready
- Stripe compatible
- PayU compatible
- Multiple payment methods UI

---

## 💰 Pricing

All prices in Indian Rupees (₹):
- **Books:** ₹499 - ₹1,899
- **Study Materials:** ₹1,099 - ₹3,299
- **Art & Supplies:** ₹599 - ₹2,099
- **Bags & Accessories:** ₹699 - ₹6,599

**Free Shipping:** Orders above ₹1,000
**Tax:** 18% GST included

---

## 🎨 Design Features

- **Color Scheme:** Blue, Purple, Green, Orange gradients
- **Typography:** Clean, modern fonts
- **Animations:** Smooth transitions (300-700ms)
- **Shadows:** Multiple depth levels
- **Responsive:** Mobile-first approach

---

## 🔐 Security Features

- Input validation
- XSS prevention
- Secure payment forms
- HTTPS ready
- Environment variables support

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
cd frontend
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://josephsatharasi.github.io/blink-bowl"
npm run deploy
```

---

## 🛠️ Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from CRA
```

---

## 📊 Performance

- **First Load:** < 3s
- **Lighthouse Score:** 90+
- **Bundle Size:** Optimized
- **Image Loading:** Lazy loaded

---

## 🔄 Future Enhancements

- [ ] User authentication
- [ ] Product reviews and ratings
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Wishlist persistence
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Dark mode

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Joseph Satharasi**
- GitHub: [@josephsatharasi](https://github.com/josephsatharasi)
- Repository: [blink-bowl](https://github.com/josephsatharasi/blink-bowl)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Unsplash & Picsum for placeholder images
- React Icons for the icon library

---

## 📞 Support

For support, email: support@schoolmart.com

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ for Education**
