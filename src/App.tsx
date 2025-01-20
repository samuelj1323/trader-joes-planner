import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import "./App.css";
import { ThemeProviderWrapper } from "./context/theme";
import AppShell from "./components/AppShell";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <AppShell>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </AppShell>
        </ThemeProviderWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
