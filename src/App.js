import "./App.css";
import Header from "./components/Header";
import Create from "./components/Create";
import Read from "./components/Read";
import { BlogDetail } from "./components/BlogDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/createblog" element={<Create />}></Route>
          <Route path="/allblogs" element={<Read />}></Route>
          <Route path="/allblogs/:id" element={<BlogDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
