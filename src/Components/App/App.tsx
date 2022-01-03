import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Landing } from "../Landing/Landing";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;
