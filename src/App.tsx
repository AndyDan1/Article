import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./assets/constants/books";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

import "./App.css";
import Layout from "./components/layouts/Layout";
import HomeServ from "./pages/HomeServ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={books.home} element={<Home />} />
          <Route path={books.homeServ} element={<HomeServ />} />
          <Route path={books.secondPage} element={<SecondPage />} />
          <Route path={books.error} element={<h1>ERROR</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
