import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./hooks/translations/languageContext";
import { WebsiteRoutes } from "./website/routes/WebsiteRoutes";
import ScrollToTop from "./ScrollToTop";
import { AuthProvider } from "./website/pages/auth/context/AuthContext";
import { CartProvider } from "./website/pages/cart/context/CartContext";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <AuthProvider>
        <CartProvider> {/* Add CartProvider here */}
          <LanguageProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />

            <Routes>
              {WebsiteRoutes}
            </Routes>
          </LanguageProvider>
        </CartProvider> {/* Close CartProvider */}
      </AuthProvider>
    </Router>
  );
};

export default App;