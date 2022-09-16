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
  // console.log(props.id);
  const { id, todos } = props;
  console.log(id, todos);
  return (
    //   <Col className="col-3">
    //     <Card
    //       className="my-2"
    //       color="success"
    //       inverse
    //       style={{
    //         width: "16rem",
    //       }}
    //     >
    //       <CardHeader>{showFormattedDate(date)}</CardHeader>
    //       <CardBody>
    //         <CardTitle tag="h5">{title.toUpperCase()}</CardTitle>
    //         <CardText>{body}</CardText>
    //       </CardBody>
    //     </Card>
    //   </Col>
    <></>
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
