import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import BreakFast from "./Pages/Home/BreakFast/BreakFast";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Dinner from "./Pages/Home/Dinner/Dinner";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Breakfast" element={<BreakFast />}></Route>
        <Route path="/lunch" element={<Lunch />}></Route>
        <Route path="/diner" element={<Dinner />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
