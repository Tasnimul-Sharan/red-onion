import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreakFast from "../BreakFast/BreakFast";
// import Foods from "../Food/Foods";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <>
        <Nav className="justify-content-center text-danger ">
          <Nav.Item>
            <Nav.Link as={Link} to="/Breakfast">
              Breakfast
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Lunch">
              Lunch
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Dinner">
              Dinner
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    </div>
  );
};

export default Home;
