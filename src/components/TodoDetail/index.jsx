import React from "react";
import { Link, useParams } from "react-router-dom";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Index = () => {
  const { id } = useParams();
  const LOCAL_STORAGE_KEY = "list-todos";
  const listTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const dataTodo = listTodos.find((listTodo) => listTodo.id == id);

  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light border col-12 mt-5 pt-5 pb-5">
            <h1 className="display-4">{dataTodo.title}</h1>
            <p className="lead">{showFormattedDate(dataTodo.createdAt)}</p>
            <hr className="my-2" />
            <p>{dataTodo.body}</p>
            <p className="lead">
              <Link className="btn btn-sm btn-secondary" to={`/`}>
                <i className="bi bi-arrow-left"></i> Back
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// prop types TodoCard
Index.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
};

export default Index;
