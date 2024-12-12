# E-Pharmacy Admin Dashboard

This is an administrative dashboard application built for pharmacy management. The application
provides a comprehensive interface for managing pharmacy operations, products, and administrative
tasks.

## 🔗 Important Links

- [Figma Design](https://www.figma.com/design/z1JklHHxX8kTGo3zWvlzat/Admin-dashboard?node-id=0-1&node-type=canvas&t=2gOhZ7xupqOJ7nL0-0)
- [Backend Documentation](https://admin-dashboard-back-n51a.onrender.com/api-docs/)
- [Backend Repository](https://github.com/YevhenKharchenko/admin-dashboard-back/tree/main)
- [Live Demo](https://admin-dashboard-orcin-seven.vercel.app/)

## 🚀 Demo Credentials

Use these credentials to test the application:

```
Admin User:
Email: vendor@gmail.com
Password: claytonsantos
```

## 💻 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Routing:** React Router v6
- **Form Handling:** React Hook Form with Yup validation
- **Styling:** SASS
- **HTTP Client:** Axios
- **Date Handling:** date-fns
- **UI Components:**
  - react-datepicker
  - react-select
  - react-toastify
  - react-loader-spinner

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/YevhenKharchenko/admin-dashboard-front.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📚 Dependencies

### Main Dependencies

```json
{
  "@hookform/resolvers": "^3.9.1",
  "@reduxjs/toolkit": "^2.3.0",
  "axios": "^1.7.7",
  "clsx": "^2.1.1",
  "date-fns": "^4.1.0",
  "react": "^18.3.1",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-hook-form": "^7.53.2",
  "react-redux": "^9.1.2",
  "react-router-dom": "^6.28.0",
  "react-select": "^5.8.3",
  "react-toastify": "^10.0.6",
  "redux-persist": "^6.0.0",
  "yup": "^1.4.0"
}
```

### Development Dependencies

```json
{
  "@vitejs/plugin-react": "^4.3.3",
  "eslint": "^9.13.0",
  "sass": "^1.80.6",
  "vite": "^5.4.10"
}
```

## 🏗️ Project Structure

```
src/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── redux/
├── services/
├── styles/
├── utils/
└── App.jsx
```

## 🔐 Features

- User Authentication & Authorization
- Products Management
- Transactions Tracking
- Suppliers Management
- Customers Information
- Orders Information

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
