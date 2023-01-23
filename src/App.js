import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./navRoutes/NavRoutes"
import NavBar from "./navBar/NavBar";
import "./App.css"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <main>
            <NavRoutes />
          </main>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
