import "./App.css";
import Index from "./pages/index";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
}

export default App;
