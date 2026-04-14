# 🎓 SchoolMart Admin Panel

A modern, feature-rich admin dashboard for managing the SchoolMart e-commerce platform. Built with React, Tailwind CSS, and React Router.

![React](https://img.shields.io/badge/React-19.2.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.2-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Features

### 🔐 Authentication
- **Secure Login** - Email and password authentication
- **Demo Credentials** - Pre-filled credentials for testing
- **Session Management** - LocalStorage-based authentication
- **Protected Routes** - Secure access to admin pages

### 📊 Dashboard
- **Real-time Statistics** - Revenue, orders, products, customers
- **Recent Orders** - Quick view of latest transactions
- **Top Products** - Best-selling items overview
- **Performance Metrics** - Growth indicators

### 🛍️ Product Management
- **Product Catalog** - View all products with images
- **Search & Filter** - Find products by name or category
- **CRUD Operations** - Add, edit, delete products
- **Stock Status** - Active/Out of Stock indicators

### 📦 Order Management
- **Order Tracking** - View all orders with status
- **Status Filters** - Filter by Pending, Processing, Shipped, Delivered, Cancelled
- **Order Details** - Customer info, products, payment status
- **Export Orders** - Download order data

### 👥 Customer Management
- **Customer Database** - View all registered customers
- **Customer Insights** - Total orders and spending per customer
- **Search Functionality** - Find customers quickly
- **Customer Status** - Active/Inactive tracking

### 📂 Category Management
- **Category Overview** - Manage product categories
- **Product Count** - See products per category
- **Visual Icons** - Easy category identification

### 📋 Inventory Management
- **Stock Monitoring** - Real-time stock levels
- **Low Stock Alerts** - Automatic warnings
- **Reorder Levels** - Set minimum stock thresholds
- **Stock Status** - In Stock, Low Stock, Out of Stock

### 📈 Analytics
- **Revenue Trends** - Monthly revenue visualization
- **Sales Analytics** - Order volume tracking
- **Category Performance** - Top-performing categories
- **Growth Metrics** - Percentage changes

### ⚙️ Settings
- **Store Settings** - Configure store information
- **Profile Management** - Update admin profile
- **Notifications** - Customize alert preferences
- **Security** - Change password

---

## 🎨 UI/UX Features

- **Responsive Design** - Works on all devices
- **Modern Interface** - Clean and professional design
- **Smooth Animations** - Professional transitions
- **Color-coded Status** - Easy visual identification
- **Sidebar Navigation** - Quick access to all sections
- **Mobile Menu** - Collapsible sidebar for mobile
- **Search Bars** - Quick filtering and searching
- **Dropdown Menus** - User profile and actions

---

## 🔑 Demo Credentials

### Super Admin
- **Email:** admin@schoolmart.com
- **Password:** admin123
- **Role:** Super Admin

### Manager
- **Email:** manager@schoolmart.com
- **Password:** manager123
- **Role:** Manager

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to admin directory**
```bash
cd admin
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open browser**
```
http://localhost:3000
```

5. **Login with demo credentials**
Use the credentials provided on the login page

---

## 📁 Project Structure

```
admin/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top navigation bar
│   │   ├── Sidebar.jsx         # Side navigation menu
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   └── ProtectedRoute.jsx  # Route protection
│   ├── pages/
│   │   ├── Login.jsx           # Login page
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── Products.jsx        # Product management
│   │   ├── Orders.jsx          # Order management
│   │   ├── Customers.jsx       # Customer management
│   │   ├── Categories.jsx      # Category management
│   │   ├── Inventory.jsx       # Inventory tracking
│   │   ├── Analytics.jsx       # Analytics & reports
│   │   └── Settings.jsx        # Settings page
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎯 Pages Overview

### 1. Login Page
- Email and password fields
- Show/hide password toggle
- Demo credentials display
- One-click credential fill
- Gradient background

### 2. Dashboard
- 4 key metric cards (Revenue, Orders, Products, Customers)
- Recent orders table
- Top products list
- Growth indicators

### 3. Products
- Product grid with images
- Search functionality
- Category filter
- Add/Edit/Delete actions
- Stock status badges

### 4. Orders
- Comprehensive order table
- Status filter buttons
- Order statistics
- Payment status
- Export functionality

### 5. Customers
- Customer cards with avatars
- Contact information
- Order history
- Spending analytics
- Search capability

### 6. Categories
- Category cards with icons
- Product count per category
- Edit/Delete actions
- Add new category

### 7. Inventory
- Stock level monitoring
- Status indicators
- Reorder alerts
- Restock actions

### 8. Analytics
- Revenue trend charts
- Category performance
- Growth metrics
- Key performance indicators

### 9. Settings
- Tabbed interface
- Store configuration
- Profile management
- Notification preferences
- Security settings

---

## 🎨 Design System

### Colors
- **Primary:** Blue (#3B82F6)
- **Secondary:** Purple (#8B5CF6)
- **Success:** Green (#10B981)
- **Warning:** Yellow (#F59E0B)
- **Danger:** Red (#EF4444)
- **Gray Scale:** Various shades

### Typography
- **Font Family:** System fonts
- **Headings:** Bold, various sizes
- **Body:** Regular weight

### Components
- **Cards:** Rounded corners, shadows
- **Buttons:** Gradient backgrounds, hover effects
- **Tables:** Striped rows, hover states
- **Forms:** Focus rings, validation
- **Badges:** Color-coded status indicators

---

## 🔧 Tech Stack

- **Frontend Framework:** React 19.2.5
- **Styling:** Tailwind CSS 4.2.2
- **Routing:** React Router DOM 7.14.1
- **Icons:** React Icons 5.6.0
- **State Management:** React Context API
- **Build Tool:** Create React App

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## 🔐 Authentication Flow

```
Login Page → Validate Credentials → Store in LocalStorage → Redirect to Dashboard
```

Protected routes check authentication status before rendering.

---

## 🚀 Available Scripts

```bash
npm start          # Start development server (port 3000)
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from CRA
```

---

## 🔄 Future Enhancements

- [ ] Real backend API integration
- [ ] Advanced analytics with charts
- [ ] Product image upload
- [ ] Bulk operations
- [ ] Email notifications
- [ ] Role-based permissions
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Export to PDF/Excel
- [ ] Real-time notifications
- [ ] Advanced filtering
- [ ] Drag-and-drop reordering

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨💻 Author

**Joseph Satharasi**
- GitHub: [@josephsatharasi](https://github.com/josephsatharasi)
- Repository: [blink-bowl](https://github.com/josephsatharasi/blink-bowl)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS
- React Icons for the icon library
- React Router for routing solution

---

## 📞 Support

For support, email: admin@schoolmart.com

---

**Built with ❤️ for Education Management**
