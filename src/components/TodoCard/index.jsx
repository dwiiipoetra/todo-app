import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Index = (props) => {
  const { id, title, body, date } = props;
  return (
    <Col className="col-3">
      <Card
        className="my-2"
        color="success"
        inverse
        style={{
          width: "16rem",
        }}
      >
        <CardHeader>{showFormattedDate(date)}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{title.toUpperCase()}</CardTitle>
          <CardText>{body}</CardText>
          <div class="btn-group" role="group" aria-label="Basic example">
            <Link className="btn btn-sm btn-dark" to={`/note/${id}`}>
              <i class="bi bi-eye"></i> View
            </Link>
            <Button
              size="sm"
              color="warning"
              onClick={() => props.updateHandler(id)}
            >
              <i className="bi bi-pencil-square"></i> Update
            </Button>
            <Button
              size="sm"
              color="danger"
              onClick={() => props.deleteHandler(id)}
            >
              <i className="bi bi-x-lg"></i> Delete
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
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
