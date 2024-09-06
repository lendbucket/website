import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Box } from '@chakra-ui/react';
import { Header } from '@/components/header'
import Footer from '@/components/footer';
import Dashboard from "@/views/dashboard";
import BusinessDashboard from "@/views/business-dashboard";
import Revolv from "@/views/revolv";
import Instal from "@/views/instal";
import Marketplace from "@/views/marketplace";
import Faqs from "@/views/faqs";
import BusinessMarketplace from "@/views/business-marketplace";
import BusinessPricing from "@/views/business-pricing";

function App() {
  return (
    <>
      <main className="main min-h-screen">
        <Router>
          <Header />
          <Box className="w-full" pt={'109px'}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product/revolv" element={<Revolv />} />
              <Route path="/product/instal" element={<Instal />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/business" element={<BusinessDashboard />} />
              <Route path="/business/pricing" element={<BusinessPricing />} />
              <Route path="/business/marketplace" element={<BusinessMarketplace />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </main>
    </>
  )
}

export default App
