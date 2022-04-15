import React from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import "./SearchBar.css";
// import bg from "../../../images/bannerbackground.png";
// import { Form, FormControl } from "react-bootstrap";
// import { Button } from "bootstrap";

const SearchBar = () => {
  //style={{background-image: URL(bg)}}
  return (
    <div className="search">
      {/* <img className="img-fluid" src={bg} alt="" /> */}
      <div className="search-detail">
        <h1>Best Food Waiting for your belly</h1>
        <div className="navbar">
          <Navbar className="mx-auto d-block" expand="lg">
            <Container fluid>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mx-auto form"
                  aria-label="Search"
                />
                <Button variant="danger">Search</Button>
              </Form>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
