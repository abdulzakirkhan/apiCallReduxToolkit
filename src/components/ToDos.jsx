/* eslint-disable no-unused-vars */
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todo";

export default function ToDos() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.todo.data);
  if (state.todo.isLoading) {
    return (
      <div className="pt-5 mt-5">
        {" "}
        <h1 className="text-center p-2 text-white bg-danger">Loading</h1>
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col md="12" sm="12" lg="12">
          <h1>My ToDos</h1>
        </Col>
        <Col sm="12" className="mt-5 text-center">
          <Button onClick={(e) => dispatch(fetchTodos())}>fetch todos</Button>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          {state.todo.data &&
            state.todo.data.map((e, index) => (
              <ul key={index} className="list-unstyled bg-body-secondary">
                <li className="dot">{e.title}</li>
              </ul>
            ))}
        </Col>
      </Row>
    </Container>
  );
}
