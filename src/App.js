import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navRoutes/NavRoutes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavRoutes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
