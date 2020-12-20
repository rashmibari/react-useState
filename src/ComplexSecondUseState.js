import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

function ComplexSecondUseState() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(response => {
        let data = response.data;
        console.log("after getting post data", response.data);

        //setPost([...response.data]);
      })
      .catch(error => {});
  }, []);

  let list =
    post.length &&
    post.map(item => (
      <ListGroupItem tag="a" href="#">
        {item}
      </ListGroupItem>
    ));

  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#">
        {list}
      </ListGroupItem>
    </ListGroup>
  );
}

export default ComplexSecondUseState;
