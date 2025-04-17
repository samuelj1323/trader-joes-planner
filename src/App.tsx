import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import "./App.css";
import { ThemeProviderWrapper } from "./context/theme";
import AppShell from "./components/AppShell";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import store from "./features/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProviderWrapper>
            <AppShell>
              <Toaster />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </AppShell>
          </ThemeProviderWrapper>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
