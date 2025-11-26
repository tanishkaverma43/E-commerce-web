<div align="center">

# 🛍️ Full Stack E-Commerce Platform

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=2000&pause=1000&color=FF6B6B&center=true&vCenter=true&width=600&lines=Modern+E-Commerce+Platform;Built+with+React+%26+Node.js;Full+Stack+Solution" alt="Typing SVG" />
</p>

<div>
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-7.5.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express-4.18.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Razorpay-3395FF?style=for-the-badge&logo=razorpay&logoColor=white" alt="Razorpay" />
</div>

<br/>

<img src="https://img.shields.io/github/stars/yourusername/Full_Stack_Ecommerce?style=social" alt="Stars" />
<img src="https://img.shields.io/github/forks/yourusername/Full_Stack_Ecommerce?style=social" alt="Forks" />

</div>

---

## ✨ Features

<div align="center">

| 🛒 **Customer Features** | 👨‍💼 **Admin Features** |
|:---:|:---:|
| 🎯 Product Browsing & Categories | ➕ Add/Remove Products |
| 🛒 Shopping Cart | 📦 Product Management |
| 💳 Secure Checkout | 📸 Image Upload |
| 💰 Payment Integration | 🎨 Admin Dashboard |
| 🔐 User Authentication | 📊 Category Management |

</div>

---

## 🛠️ Tech Stack

<div align="center">

<table>
<tr>
<td align="center" width="200">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40"/>
  <br/><b>React</b>
</td>
<td align="center" width="200">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/>
  <br/><b>Node.js</b>
</td>
<td align="center" width="200">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40"/>
  <br/><b>MongoDB</b>
</td>
<td align="center" width="200">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" height="40"/>
  <br/><b>Express</b>
</td>
</tr>
</table>

</div>

---

## 🚀 Quick Start

### 📦 Prerequisites
- Node.js (v14+)
- MongoDB (Atlas or Local)
- npm or yarn

### ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/yourusername/Full_Stack_Ecommerce.git
cd Full_Stack_Ecommerce

# Install dependencies
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 🔧 Configuration

**Backend** - Update MongoDB connection in `backend/index.js`:
```javascript
mongoose.connect("your_mongodb_connection_string");
```

**Frontend** - Update backend URL in `frontend/src/App.js`:
```javascript
export const backend_url = 'http://localhost:4000';
```

### ▶️ Run

```bash
# Terminal 1 - Backend (Port 4000)
cd backend && npm run dev

# Terminal 2 - Frontend (Port 3000)
cd frontend && npm start

# Terminal 3 - Admin (Port 3001)
cd admin && npm start
```

---

## 📡 API Endpoints

<div align="center">

| Method | Endpoint | Description | Auth |
|:---:|:---:|:---|:---:|
| `POST` | `/signup` | User registration | ❌ |
| `POST` | `/login` | User login | ❌ |
| `GET` | `/allproducts` | Get all products | ❌ |
| `GET` | `/newcollections` | Latest products | ❌ |
| `POST` | `/addtocart` | Add to cart | ✅ |
| `POST` | `/removefromcart` | Remove from cart | ✅ |
| `POST` | `/addproduct` | Add product | ✅ |
| `POST` | `/upload` | Upload image | ✅ |

</div>

---

## 📁 Project Structure

```
Full_Stack_Ecommerce/
├── 📱 frontend/     # Customer React App
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   └── Context/
│   └── package.json
│
├── ⚙️ backend/      # Express API Server
│   ├── index.js
│   ├── upload/
│   └── package.json
│
└── 👨‍💼 admin/        # Admin React Dashboard
    ├── src/
    │   ├── Components/
    │   └── Pages/
    └── package.json
```

---

## 🌐 Deployment

<div align="center">

| Platform | Service |
|:---:|:---|
| **Backend** | Render / Heroku / Railway |
| **Frontend** | Vercel / Netlify |
| **Admin** | Vercel / Netlify |

</div>

---

## ⚠️ Security Notes

> ⚠️ **Important**: Change JWT secret in production  
> ⚠️ Implement password hashing (bcrypt)  
> ⚠️ Use environment variables for sensitive data  
> ⚠️ Add rate limiting & input validation

---

## 🤝 Contributing

<div align="center">

Contributions are welcome! 🎉

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

</div>

---

<div align="center">

### 📝 License

This project is licensed under the ISC License.

---

**Made with ❤️ using React and Node.js**

<div>
  <img src="https://komarev.com/ghpvc/?username=yourusername&color=blueviolet&style=flat-square" alt="Profile views" />
</div>

</div>
