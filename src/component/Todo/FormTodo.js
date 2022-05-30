import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setValue("");
    addTodo(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          placeholder="enter todo"
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <br />
      <Button type="submit">submit</Button>
    </Form>
  );
}

export default FormTodo;
