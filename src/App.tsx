import React, { useEffect, useState } from "react";
import "./App.css";
i;
import { ThemeProviderWrapper } from "./context/theme";

function App() {
  return (
    <div>
      <ThemeProviderWrapper>
        <h3>hello world</h3>
      </ThemeProviderWrapper>
    </div>
  );
}

export default App;
