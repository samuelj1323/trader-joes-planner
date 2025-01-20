import LandingPage from "./pages/LandingPage";
import "./App.css";
import { ThemeProviderWrapper } from "./context/theme";
import AppShell from "./components/AppShell";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <AppShell>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </AppShell>
        </ThemeProviderWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
