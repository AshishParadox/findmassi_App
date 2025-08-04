# FindMaasi.com

A modern web application for connecting students with reliable domestic helpers (maasis) for campus support services.

## 🎯 Project Overview

FindMaasi.com is a platform designed specifically for students at HIT (and other institutions) to find trustworthy domestic helpers for various services like cooking, cleaning, laundry, and grocery shopping.

## ✨ Features

### 🏠 Home Page
- Hero section with glowing FindMaasi.com logo
- About Us section with mission statement
- Service highlights with icons
- Call-to-action buttons

### 🔐 Authentication
- Student login modal with clean UI
- Login/logout state management
- Form disappears after successful login
- Reappears only after logout

### 👥 About Us
- Detailed mission statement
- Service descriptions
- Location information
- Company values

### 🔍 Hire Maasi (Core Feature)
- **Advanced Filters:**
  - Location dropdown (Khudiramnagar, Gandhinagar, Abhinandan, CC)
  - Service checkboxes (Cooking, Cleaning, Laundry, Grocery)
  - Food type selection (Vegetarian/Non-Vegetarian)
- **Maasi Profiles:**
  - Card view with photos, names, and locations
  - Detailed profile pages with comprehensive information
  - Personal information (age, experience, marital status, religion, education, languages)
  - Service offerings with icons
  - Cooking skills (basic and special foods)
  - "Arrange a Call" functionality with success notifications

### 📞 Contact Us
- Contact form with validation
- Company information
- Social media links (Email, Instagram)
- Success message notifications

### 🦶 Footer
- Quick navigation links
- Legal pages (Terms of Use, Privacy Policy)
- Social media links
- Copyright information

## 🎨 Design Features

### Visual Identity
- **Logo:** "FindMaasi.com" in glowing golden-yellow (rgb(214, 211, 0))
- **Navbar:** Black background with white navigation links
- **Typography:** Poppins font family for clean, modern look
- **Color Scheme:** Golden-yellow accents with professional grays and whites

### UI/UX Elements
- Smooth scrolling navigation
- Hover effects on interactive elements
- Responsive design for mobile devices
- Modern card-based layouts
- Success notifications with animations
- Clean, centered forms

## 🛠️ Technology Stack

- **Frontend:** React.js
- **Routing:** React Router DOM
- **Styling:** CSS3 with custom animations
- **Font:** Google Fonts (Poppins)
- **Icons:** Emoji icons for simplicity
- **State Management:** React Hooks

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd findmaasi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 User Flow

1. **Landing:** Users see the home page with hero section
2. **Login:** Students can log in via the modal (appears only when logged out)
3. **Browse:** Users can view About Us, Contact Us, or go to Hire Maasi
4. **Search:** In Hire Maasi, users can apply filters to find suitable maasis
5. **View Profiles:** Click on maasi cards to see detailed information
6. **Arrange Call:** Use the "Arrange a Call" button to contact maasis
7. **Contact:** Use the contact form for general inquiries

## 🔧 Customization

### Adding New Maasis
Edit the `mockMaasis` array in `HireMaasi.js` and `MaasiProfile.js`:

```javascript
{
  id: 5,
  name: "New Maasi Name",
  age: 40,
  experience: 10,
  location: "Khudiramnagar",
  // ... other properties
}
```

### Modifying Locations
Update the `locations` array in `HireMaasi.js`:

```javascript
const locations = ["Khudiramnagar", "Gandhinagar", "Abhinandan", "CC", "New Location"];
```

### Changing Services
Update the `services` array in `HireMaasi.js`:

```javascript
const services = ["cooking", "cleaning", "laundry", "grocery", "new-service"];
```

## 📄 Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── LoginModal.js & LoginModal.css
│   ├── Home.js & Home.css
│   ├── AboutUs.js & AboutUs.css
│   ├── HireMaasi.js & HireMaasi.css
│   ├── MaasiProfile.js & MaasiProfile.css
│   ├── ContactUs.js & ContactUs.css
│   └── Footer.js & Footer.css
├── App.js & App.css
└── index.js & index.css
```

## 🎨 Color Palette

- **Primary Gold:** rgb(214, 211, 0)
- **Black:** #000000
- **White:** #ffffff
- **Gray Light:** #f8f9fa
- **Gray Medium:** #666666
- **Gray Dark:** #333333

## 📞 Contact Information

- **Email:** support@findmaasi.com
- **Instagram:** @findmaasi
- **Phone:** +91 98765 43210
- **Address:** HIT Campus, Kolkata, West Bengal, India

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Designed for students, by students.** 🎓
