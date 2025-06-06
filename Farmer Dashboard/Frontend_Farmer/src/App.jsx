import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Ensure correct path

// Import Components
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Marketplace from './Pages/FarmerMarketplace/Marketplace';
import Products from './Pages/Products&Orders/Products';
import Analytics from './Pages/Analytics';
import Profile from './Pages/Profile';
import Products_Layout from './Pages/Products&Orders/Products_&_Orders';
import Orders from './Pages/Products&Orders/Orders';
import ProductDetails from './Pages/Products&Orders/Crop_Details';
import FarmerDetails from './Pages/FarmerMarketplace/FarmerDetails';
import FarmingNews from './Pages/FarmerMarketplace/FarmingNews';
import MarketPrices from './Pages/FarmerMarketplace/MarketPrices';
import HomePage from './Pages/HomePage';
import FarmerProfileSetup from './Components/ProfileSetup';
import ChatModal from './Components/AiChatBot/ChatModel';
import FloatingChatButton from './Components/AiChatBot/FloatingChatButton';

function AppContent() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation(); // Works correctly inside BrowserRouter

  const handleChatButtonClick = () => setIsChatOpen(!isChatOpen);
  const handleCloseChat = () => setIsChatOpen(false);

  return (
    <>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Products & Orders Routes */}
          <Route path="/products" element={<Products_Layout />}>
            <Route index element={<Navigate to="/products/Crops" replace />} />
            <Route path="Crops" element={<Products />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="details/:id" element={<ProductDetails />} />
          </Route>

          {/* Marketplace Routes */}
          <Route path="/marketplace" element={<Marketplace />}>
            {/* <Route index element={<Navigate to="/marketplace/farmers" replace />} /> */}
            <Route path="farmers" element={<FarmerDetails />} />
            <Route path="market" element={<MarketPrices />} />
            <Route path="news" element={<FarmingNews />} />
          </Route>

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-setup" element={<FarmerProfileSetup />} />
        </Routes>
      </main>

      <div className="app">
        <FloatingChatButton onClick={handleChatButtonClick} />
        <ChatModal isOpen={isChatOpen} onClose={handleCloseChat} />
      </div>

    </>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
