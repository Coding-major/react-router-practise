import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//pages
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          <nav>
            <h1>The jobs guy</h1>
            <Link to='/'>Home</Link>
            <Link to="about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
