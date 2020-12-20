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
        setPost([...post, ...data]);
      })
      .catch(error => {});
  }, []);

  let list =
    post.length &&
    post.map(item => <ListGroupItem>{item.email}</ListGroupItem>);

  return <ListGroup>{list}</ListGroup>;
}

export default ComplexSecondUseState;
