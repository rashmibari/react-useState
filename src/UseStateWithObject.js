import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  inline,
  Row,
  Col
} from "reactstrap";
import "./style.css";

let userDetails = {
  intro: "Some plain text/ static value",
  email: "",
  password: "",
  url: "",
  number: "",
  dob: "",
  time: "",
  color: ""
};

let inputText = {
  width: "100%"
};

let submitBtn = {
  color: "#fff",
  background: "green",
  border: "none",
  height: "30px",
  width: "100px",
  cursor: "pointer",
  marginTop: "10px"
};

function UseStateWithObject() {
  const [user, setUser] = useState(userDetails);

  const onSubmit = event => {
    event.preventDefault();
    if (user.color && user.password && user.email && user.number && user.dob) {
      alert(JSON.stringify(user));
    } else {
      alert("Please enter required fields");
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <p>{user.email}</p>
      <Row Inline>
        <FormGroup className="formGroup">
          <Col sm={6}>
            <Label for="exampleEmail">Introduction</Label>
            <Input
              style={{}}
              plaintext
              value={user.intro}
              onChange={event =>
                setUser({ ...user, intro: event.target.value })
              }
            />
          </Col>
          <Col sm={6}>
            <FormGroup className="formGroup">
              <Label for="exampleEmail">Email*</Label>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={event =>
                  setUser({ ...user, email: event.target.value })
                }
                id="exampleEmail"
                placeholder=" Enter Email"
              />
            </FormGroup>
          </Col>
        </FormGroup>
      </Row>
      <FormGroup className="formGroup">
        <Label for="examplePassword">Password*</Label>
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={event => setUser({ ...user, password: event.target.value })}
          id="examplePassword"
          placeholder=" Enter Password"
        />
      </FormGroup>
      <FormGroup className="formGroup">
        <Label for="exampleUrl">Url</Label>
        <Input
          type="url"
          name="url"
          id="exampleUrl"
          onChange={event => setUser({ ...user, url: event.target.value })}
          placeholder="url placeholder"
        />
      </FormGroup>
      <FormGroup className="formGroup">
        <Label for="exampleNumber">Number*</Label>
        <Input
          type="number"
          name="number"
          value={user.number}
          onChange={event => setUser({ ...user, number: event.target.value })}
          id="exampleNumber"
          placeholder="number placeholder"
        />
      </FormGroup>

      <FormGroup className="formGroup">
        <Label for="exampleDate">Date*</Label>
        <Input
          type="date"
          name="date"
          value={user.dob}
          onChange={event => setUser({ ...user, dob: event.target.value })}
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup className="formGroup">
        <Label for="exampleTime">Time</Label>
        <Input
          type="time"
          name="time"
          value={user.time}
          onChange={event => setUser({ ...user, time: event.target.value })}
          id="exampleTime"
          placeholder="time placeholder"
        />
      </FormGroup>
      <FormGroup className="formGroup">
        <Label for="exampleColor">Color*</Label>
        <Input
          type="color"
          name="color"
          value={user.color}
          onChange={event => setUser({ ...user, color: event.target.value })}
          id="exampleColor"
          placeholder="color placeholder"
        />
      </FormGroup>
      <Button type="submit" style={submitBtn} color="primary">
        Submit
      </Button>
    </Form>
  );
}

export default UseStateWithObject;
