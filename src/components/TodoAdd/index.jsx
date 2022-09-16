import React, { useState } from "react";
import {
  Button,
  UncontrolledCollapse,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";

const Index = ({ todo, setTodo, handleSubmit }) => {
  return (
    <>
      <Button
        size="lg"
        color="info"
        id="toggler"
        style={{
          marginBottom: "1rem",
        }}
      >
        Open Me
      </Button>

      <UncontrolledCollapse toggler="#toggler">
        <Card className="mb-4">
          <CardBody>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                <Label for="name" hidden>
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="What your plan?"
                  type="text"
                  name="name"
                  value={todo.title}
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description" hidden>
                  Password
                </Label>
                <Input
                  id="description"
                  placeholder="How it will goin?"
                  type="text"
                  name="description"
                  value={todo.body}
                  onChange={(e) => setTodo({ ...todo, body: e.target.value })}
                />
              </FormGroup>
              {/* jika ada id, maka tampilkan button add new */}
              {todo.id ? (
                <>
                  <Button
                    className="me-2"
                    type="submit"
                    size="sm"
                    color="warning"
                  >
                    <i className="bi bi-pencil-square"></i> Update
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    color="secondary"
                    onClick={() =>
                      setTodo({
                        title: "",
                        body: "",
                      })
                    }
                  >
                    <i className="bi bi-x-lg"></i> Cancel
                  </Button>
                </>
              ) : (
                <Button type="submit" size="sm" color="primary">
                  <i className="bi bi-plus-lg"></i> Add New
                </Button>
              )}
            </Form>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </>
  );
};

// prop types TodoAdd
Index.propTypes = {
  todo: PropTypes.object,
  setTodo: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Index;
