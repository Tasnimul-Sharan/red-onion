import React from "react";
import { Button, Form } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container w-25 text-start">
        {/* <h1>this is gonna be</h1> */}
        <Form>
          <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Confirm Password</Form.Label> */}
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="danger w-100" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
