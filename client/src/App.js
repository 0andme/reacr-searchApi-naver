import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import Chart from "./components/Chart";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" className="active">
              검색
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/chart" className="">
              조회
            </NavLink>
          </NavItem>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
