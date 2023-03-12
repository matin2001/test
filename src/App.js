import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setconfirm] = useState(false);
  const [cclicked, setcclicked] = useState(false);
  console.log(name);
  console.log(family);
  console.log(email);
  return (
    <div className="App">
      <Form noValidate onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setName(e.target.value);
              setconfirm(false);
              setcclicked(false);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setFamily(e.target.value);
              setconfirm(false);
              setcclicked(false);
            }}
          />
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
                setconfirm(false);
                setcclicked(false);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            setcclicked(true);
            if (
              name.length > 2 &&
              family.length > 2 &&
              /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
            )
              setconfirm(true);
          }}
        >
          Submit
        </Button>
      </Form>
      {confirm ? (
        <div>
          Welcome {name} {family} to our site.
          <br />
          Your Email address is: {email}
        </div>
      ) : cclicked ? (
        <div>Error</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
